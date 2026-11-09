/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    // Keep Vercel preview/development deployments out of the index so
    // only the production canonical URL is crawlable/indexable.
    if (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === 'production') {
      return [];
    }
    return [
      {
        source: '/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      },
    ];
  },
};

export default nextConfig;
