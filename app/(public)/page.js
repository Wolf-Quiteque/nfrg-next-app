import HomeClient from './HomeClient';
import { getAllSiteContent, getBlogPosts, getListings } from '@/lib/db';

// The homepage is rendered once and served from Vercel's cache. Admin saves call
// refreshPublicPages() (lib/revalidate.js), so edits show on the next visit.
// The timer is only a safety net for changes made directly in the database.
export const revalidate = 600;

async function loadHomeData() {
  try {
    const [content, posts, listings] = await Promise.all([
      getAllSiteContent(),
      getBlogPosts({ published: true, limit: 3 }),
      getListings(),
    ]);
    return { content, posts, listings };
  } catch (err) {
    // During a build, fall back to the built-in defaults so a database hiccup can't block a deploy.
    // At runtime, rethrow: Next then keeps serving the last good copy instead of caching defaults.
    if (process.env.NEXT_PHASE === 'phase-production-build') {
      console.error('Homepage data unavailable at build time, using defaults:', err.message);
      return { content: {}, posts: [], listings: [] };
    }
    throw err;
  }
}

export default async function Home() {
  const { content, posts, listings } = await loadHomeData();

  // Only the fields the cards show, so full post bodies don't end up in the page.
  const blogPosts = posts.map(({ _id, slug, title, image, date, author, category, excerpt }) => ({
    _id, slug, title, image, date, author, category, excerpt,
  }));

  return <HomeClient initialContent={content} blogPosts={blogPosts} listings={listings} />;
}
