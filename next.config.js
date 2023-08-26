/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  eslint: {
    // dirs: ['utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  images:{
    domains: ['jexluficpazfxobksszu.supabase.co'],
  }
}

module.exports = nextConfig
