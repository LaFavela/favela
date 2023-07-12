/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    // dirs: ['utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
    ignoreDuringBuilds: true, // Only run ESLint on the 'pages' and 'utils' directories during development builds (next dev)
  },
}

module.exports = nextConfig
