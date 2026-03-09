export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://nilebridge.vercel.app/sitemap.xml',
  };
}