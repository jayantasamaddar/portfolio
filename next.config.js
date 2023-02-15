/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.sanity.io',
      'fonts.googleapis.com',
      'fonts.cdnfonts.com',
      'via.placeholder.com',
      'ik.imagekit.io',
    ],
  },
};

module.exports = nextConfig;
