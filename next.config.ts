import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true, // Often helps with static export/standalone issues if image optimization service isn't available
  },
};

export default nextConfig;
