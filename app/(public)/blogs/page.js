import { getBlogPosts } from '@/lib/db';
import AnalyticsTracker from '@/app/components/AnalyticsTracker';
import Link from 'next/link';

export const metadata = {
  title: 'Blog | NFRG',
  description: 'Latest insights, market news, and real estate tips from Navy Fellas Realty Group.',
};

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export default async function BlogsPage() {
  let posts = [];
  try {
    posts = await getBlogPosts({ published: true });
  } catch {
    // DB unavailable — show empty state
  }

  return (
    <>
      <AnalyticsTracker page="/blogs" />

      {/* Page Title */}
      <section className="flat-title-page" style={{ backgroundImage: 'url(/images/page-title/page-title-2.jpg)' }}>
        <div className="container">
          <div className="breadcrumb-content">
            <ul className="breadcrumb">
              <li><a href="/" className="text-white">Home</a></li>
              <li className="text-white">/ Blog</li>
            </ul>
            <h1 className="text-center text-white title">Latest Insights</h1>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="flat-section">
        <div className="container">
          {posts.length === 0 ? (
            <div className="text-center py-60">
              <p className="text-variant-1">No blog posts published yet. Check back soon!</p>
            </div>
          ) : (
            <div className="row">
              {posts.map(post => (
                <div key={post._id} className="col-lg-4 col-md-6 mb-30">
                  <Link href={`/blogs/${post.slug || post._id}`} style={{ textDecoration: 'none' }}>
                    <div className="flat-blog-item hover-img h-full">
                      <div className="img-style round-16 o-hidden">
                        <img
                          className="lazyload"
                          src={post.image || '/images/blog/blog-10.jpg'}
                          alt={post.title}
                          style={{ width: '100%', height: 220, objectFit: 'cover' }}
                        />
                      </div>
                      <div className="content">
                        <ul className="meta-list">
                          <li className="item">
                            <span className="text-primary fw-6">{post.author}</span>
                          </li>
                          <li className="item">
                            <span className="text-variant-1">{post.category}</span>
                          </li>
                          <li className="item">
                            <span className="text-variant-1">{formatDate(post.date)}</span>
                          </li>
                        </ul>
                        <h6 className="title mt-8">{post.title}</h6>
                        {post.excerpt && (
                          <p className="text-variant-1 mt-8" style={{ fontSize: 14, lineHeight: 1.6 }}>
                            {post.excerpt}
                          </p>
                        )}
                        <span className="tf-btn-arrow mt-16">
                          Read more <i className="icon icon-arrow-right2" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
