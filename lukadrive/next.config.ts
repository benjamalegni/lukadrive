import type { NextConfig } from "next";
import "./src/env.js";

const nextConfig: NextConfig = {
  /* config options here */
    eslint:{
      ignoreDuringBuilds: true,
    },

    typescript: {
      ignoreBuildErrors: true,
    },

};

export default nextConfig;
