import path from "path";
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['tmhub-design-system-react'],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias["react"] = path.resolve("./node_modules/react");
    return config;
  }
};

export default withVanillaExtract(nextConfig);
