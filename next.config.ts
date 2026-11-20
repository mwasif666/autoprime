import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Static export: `next build` writes a plain HTML/CSS/JS site to ./out
  output: 'export',
  // Exports /pricing/index.html instead of /pricing.html (works on any static host)
  trailingSlash: true,
  // The default image optimizer needs a Node server, which a static export doesn't have
  images: { unoptimized: true },
};

export default nextConfig;
