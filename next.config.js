/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'youtube', 'rendezvouscorp', 'panel.rendezvouscorp.com'],
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
        port: '',
        pathname: '/media/*'
      }
    ],
    minimumCacheTTL: 60,
  }
}

module.exports = nextConfig
