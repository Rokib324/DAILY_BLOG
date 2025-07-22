import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.axios.com',
      },
      {
        protocol: 'https',
        hostname: 'image.cnbcfm.com',
      },
      {
        protocol: 'https',
        hostname: 's.abcnews.com',
      },
      {
        protocol: 'https',
        hostname: 'www.al.com',
      },
      {
        protocol: 'https',
        hostname: 'www.hollywoodreporter.com',
      },
      {
        protocol: 'https',
        hostname: 'static.foxnews.com',
      },
      {
        protocol: 'https',
        hostname: 'a.espncdn.com',
      },
      {
        protocol: 'https',
        hostname: 'nypost.com',
      },
      {
        protocol: 'https',
        hostname: 'npr.brightspotcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'www.washingtonpost.com',
      },
      {
        protocol: 'https',
        hostname: 'thehill.com',
      },
      {
        protocol: 'https',
        hostname: 'wtop.com',
      },
      {
        protocol: 'https',
        hostname: 'fortune.com',
      },
      {
        protocol: 'https',
        hostname: 's.yimg.com',
      },
      {
        protocol: 'https',
        hostname: 'media.cnn.com',
      },
      {
        protocol: 'https',
        hostname: 'variety.com',
      },
      {
        protocol: 'https',
        hostname: 'deadline.com',
      },
      {
        protocol: 'https',
        hostname: 'ew.com',
      },
    ],
  },
};

export default nextConfig;
