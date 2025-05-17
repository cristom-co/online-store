import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'images.pexels.com', 'backend'],  // Añade los dominios de tu CMS para optimizar imágenes
  },
  env: {
    NEXT_PUBLIC_CMS_API_URL: process.env.NEXT_PUBLIC_CMS_API_URL,
    CMS_API_TOKEN: process.env.CMS_API_TOKEN,
  },
};

export default nextConfig;
