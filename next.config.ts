import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    // Add rule for handling .mp4 files using file-loader
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash].[ext]', // Customize the output file name
        },
      },
    })

    return config
  },
}

export default nextConfig
