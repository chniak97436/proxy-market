/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['127.0.0.1'],
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'augusto-pizza.fr',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
