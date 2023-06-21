/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'youtube', 'panel.rendezvouscorp.com'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/media/*'
      },
      {
        protocol: 'https',
        hostname: 'panel.rendezvouscorp.com',
        port: '443',
        pathname: '/*'
      }
    ],
    minimumCacheTTL: 60,
  }
}

module.exports = nextConfig
