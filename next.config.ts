import type { NextConfig } from "next";

const repository = "_dev_Apple_SeniorSoftwareEngineer_Setup";
const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repository}`,
  assetPrefix: `/${repository}`,
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: { root: process.cwd() },
};
export default nextConfig;
