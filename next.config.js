/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        deviceSizes: [640, 750, 828, 1080, 1200, 2048],
        imageSizes: [64, 384],
        loader: 'custom',
        loaderFile: './src/lib/image-loader.ts',
    }
}

module.exports = nextConfig
