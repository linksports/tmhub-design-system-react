import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        // file: packageJson.main,
        dir: './dist/cjs',
        format: "cjs",
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'src',
        // assetFileNames({ name }) {
        //   return name?.replace(/^src\//, '') ?? '';
        // },
      },
      {
        // file: packageJson.module,
        dir: './dist/esm',
        format: "esm",
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'src',
        // assetFileNames({ name }) {
        //   return name?.replace(/^src\//, '') ?? '';
        // },
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
      terser(),
    ],
    external: ["react", "react-dom", "@vanilla-extract/css", "@vanilla-extract/recipes"],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts.default()],
  },
];
