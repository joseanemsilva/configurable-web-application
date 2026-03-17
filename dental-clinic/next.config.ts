import type { NextConfig } from "next";

// Get the Strapi URL from environment variables, defaulting to localhost for development
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const strapiHostName = new URL(STRAPI_URL).hostname;
const isProduction = process.env.NODE_ENV === 'production';


const nextConfig: NextConfig = {
  "devIndicators": false,
  /* config options here */
  reactCompiler: true,

  /* Config images from Strapi domain */
  images: {
    dangerouslyAllowLocalIP: !isProduction, // Allow local IPs in development
    remotePatterns: [
      {
        protocol: isProduction ? 'https' : 'http',
        hostname: isProduction ?  strapiHostName : 'localhost',
        port: isProduction ? '' : '1337',
        pathname: '/uploads/**',
      }
    ]
  }
};

export default nextConfig;
