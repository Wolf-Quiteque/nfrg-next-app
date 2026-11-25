// Served as /robots.txt. Bytespider and Baiduspider are also blocked by a Vercel Firewall
// rule; listing them here covers the case where that rule is ever removed.
export default function robots() {
  return {
    rules: [
      { userAgent: ['Bytespider', 'Baiduspider'], disallow: '/' },
      { userAgent: '*', allow: '/', disallow: ['/admin', '/api/'] },
    ],
  };
}
