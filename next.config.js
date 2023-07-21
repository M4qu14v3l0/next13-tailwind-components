/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: 'www.gamephd.com'
      }
    ]
  }
}

module.exports = nextConfig
