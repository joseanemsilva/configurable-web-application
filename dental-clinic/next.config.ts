import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';
const withNextIntl = require('next-intl/plugin')('./i18n.ts');

const nextConfig: NextConfig = withNextIntl({
  "devIndicators": false,
  /* config options here */
  reactCompiler: true,

  /* Config images from Strapi domain */
  images: {
    dangerouslyAllowLocalIP: !isProduction, // Allow local IPs in development
    remotePatterns: [

      // Local development
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      // Strapi Cloud
      {
        protocol: 'https',
        hostname: '**.strapiapp.com',
        pathname: '/**',
      },
    ]
  },

  // i18n: {
  //   locales: ['en', 'pt'],
  //   defaultLocale: 'en',
  // },
});

export default nextConfig;
