
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      // Add other image hosts here if needed
    ],
  },
  async rewrites() {
    return [
      // Flask API proxy
      {
        source: '/api/:path*',
        destination: 'http://127.0.0.1:5328/api/:path*',
      },
      // Optional: Proxy static files if serving from Flask

      {
        source: '/static/:path*',
        destination: 'http://127.0.0.1:5328/static/:path*',
      }

    ]
  },
  // Optional: Add if using trailing slashes in Flask routes
  trailingSlash: true
}

export default nextConfig

