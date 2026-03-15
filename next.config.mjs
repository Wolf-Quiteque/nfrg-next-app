/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '*.r2.dev' },
      { protocol: 'https', hostname: 'pub-0404c492dee34b0d9cedfc2a81bc515f.r2.dev' },
    ],
  },
};

export default nextConfig;
