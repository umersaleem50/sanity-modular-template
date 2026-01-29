import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pro-section.ui-layouts.com",
      },
    ],
  },
};

export default nextConfig;
