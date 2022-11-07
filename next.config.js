/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    IPIFY_API_KEY: process.env.IPIFY_API_KEY,
    MAPBOX_TOKEN: process.env.MAPBOX_TOKEN,
  }
}

module.exports = nextConfig
