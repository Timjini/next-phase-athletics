import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_STRIPE_SECRET_KEY: process.env.NEXT_STRIPE_SECRET_KEY,
  },
};

export default nextConfig;
