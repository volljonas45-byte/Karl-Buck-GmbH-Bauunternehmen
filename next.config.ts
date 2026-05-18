import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Karl-Buck-GmbH-Bauunternehmen',
  assetPrefix: '/Karl-Buck-GmbH-Bauunternehmen',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
