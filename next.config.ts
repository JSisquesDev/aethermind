import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  images: {
    remotePatterns: [
      {
        hostname: '**',
      },
    ],
  },
  webpack: config => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
      child_process: false,
      readline: false,
      stream: false,
      assert: false,
      util: false,
      punycode: false,
      url: false,
      http2: false,
      https: false,
      os: false,
      zlib: false,
      vm: false,
      crypto: false,
      dns: false,
    };
    return config;
  },
};

export default nextConfig;
