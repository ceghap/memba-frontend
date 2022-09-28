/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/v1',
        destination: 'http://localhost:3001/',
      },
    ];
  },
};

module.exports = nextConfig;
