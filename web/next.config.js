/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed output: 'export' to let Vercel handle Next.js natively
  // This provides better performance and features
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig

