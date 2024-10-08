import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import path from 'path';
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import depsExternal from 'rollup-plugin-deps-external';

const packageJson = require("./package.json");

const emittedCSSFiles = new Set();
const bundleCssEmits = () => ({
  name: 'bundle-css-emits',
  buildStart () {
    emittedCSSFiles.clear();
  },
  renderChunk (code, chunkInfo) {
    const allImports = [...code.matchAll(/import (?:.* from )?['"]([^;'"]*)['"];?/g)];
    const dirname = path.dirname(chunkInfo.fileName);
    const output = allImports.reduce((resultingCode, [importLine, moduleId]) => {
      if (emittedCSSFiles.has(path.posix.join(dirname, moduleId))) {
        return resultingCode.replace(importLine, '');
      }
      return resultingCode;
    }, code);
    return {
      code: output,
      map: chunkInfo.map ?? null,
    };
  },
  generateBundle (options, bundle) {
    const bundleCode = Array.from(emittedCSSFiles.values())
      .map(file => bundle[file])
      .map(({ name, fileName, source }) => (`/* ${name} -> ${fileName} */\n` + source))
      .join('\n\n');
    this.emitFile({
      type: 'asset',
      fileName: 'bundle.css',
      source: bundleCode,
    });
  },
});

export default [
  {
    input: "src/index.ts",
    output: [
      {
        dir: './dist/cjs',
        format: "cjs",
        sourcemap: 'inline',
        preserveModules: true,
        preserveModulesRoot: 'src',
        assetFileNames({ name }) {
          return name?.replace(/^src\//, '') ?? '';
        },
      },
      {
        dir: './dist/esm',
        format: "esm",
        sourcemap: 'inline',
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames ({ name }) {
          return `${name.replace(/\.css$/, '.css.vanilla')}.js`;
        },
        assetFileNames (assetInfo) {
          const assetPath = assetInfo.name.replace(/^src\//, '');
          if (assetPath.match(/\.css$/)) {
            emittedCSSFiles.add(assetPath);
          }
          return assetPath;
        },
        exports: 'named',
      },
    ],
    plugins: [
      resolve(),
      peerDepsExternal(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      vanillaExtractPlugin({
        projectRoot: __dirname,
      }),
      bundleCssEmits(),
      depsExternal(),
      terser(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts.default()],
  },
];
