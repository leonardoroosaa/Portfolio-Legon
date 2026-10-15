import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/projetos/guarda-corpos-lisboa",
        destination: "/projetos/guarda-corpos-algarve",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
