/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'www.gamephd.com'
      }
    ]
  }
}

module.exports = nextConfig
