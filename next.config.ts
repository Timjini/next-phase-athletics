import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_STRIPE_SECRET_KEY: process.env.NEXT_STRIPE_SECRET_KEY,
  },
  webpack(config){
    config.cache = {
      type: 'filesystem',
      compression: 'gzip',
      allowCollectingMemory: true
    };
    return config;
  }
};
export default nextConfig;
