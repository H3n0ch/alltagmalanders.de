import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      { source: "/blog/:path*",   destination: "/", permanent: true },
      { source: "/author/:path*", destination: "/", permanent: true },
      { source: "/feed/:path*",   destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
