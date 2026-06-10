import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.buchwaldfamilydentistry.com" }],
        destination: "https://buchwaldfamilydentistry.com/:path*",
        permanent: true,
      },
      { source: "/store", destination: "/", permanent: true },
      { source: "/store/:path*", destination: "/", permanent: true },
      { source: "/meet-buchwaldfamilydentistry", destination: "/meet-us", permanent: true },
    ];
  },
};

export default nextConfig;
