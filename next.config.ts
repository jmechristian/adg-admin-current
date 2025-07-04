import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'localhost',
      'adg-projects.nyc3.digitaloceanspaces.com',
      'adgadmin170407-dev.s3.us-east-1.amazonaws.com',
    ],
  },
};

export default nextConfig;
