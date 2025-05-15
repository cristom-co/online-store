import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'images.pexels.com'],  // Añade los dominios de tu CMS para optimizar imágenes
  },
  env: {
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    CMS_API_URL: process.env.CMS_API_URL,
    CMS_API_TOKEN: process.env.CMS_API_TOKEN,
  },
};

export default nextConfig;
