import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/blog/:path*",   destination: "/", permanent: true },
      { source: "/author/:path*", destination: "/", permanent: true },
      { source: "/feed/:path*",   destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
