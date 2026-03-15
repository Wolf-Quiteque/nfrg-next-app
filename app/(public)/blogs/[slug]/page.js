import { getBlogPost, getBlogPosts } from '@/lib/db';
import AnalyticsTracker from '@/app/components/AnalyticsTracker';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const post = await getBlogPost(slug);
    if (!post) return { title: 'Post Not Found | NFRG' };
    return {
      title: `${post.title} | NFRG Blog`,
      description: post.excerpt || post.title,
    };
  } catch {
    return { title: 'Blog | NFRG' };
  }
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  let post = null;
  let recentPosts = [];

  try {
    post = await getBlogPost(slug);
    const allPosts = await getBlogPosts({ published: true, limit: 4 });
    recentPosts = allPosts.filter(p => p._id !== post?._id).slice(0, 3);
  } catch {
    // DB unavailable
  }

  if (!post) notFound();

  return (
    <>
      <AnalyticsTracker page={`/blogs/${slug}`} />

      {/* Page Title */}
      <section className="flat-title-page" style={{ backgroundImage: 'url(/images/page-title/page-title-2.jpg)' }}>
        <div className="container">
          <div className="breadcrumb-content">
            <ul className="breadcrumb">
              <li><a href="/" className="text-white">Home</a></li>
              <li className="text-white">/ <a href="/blogs" className="text-white">Blog</a></li>
              <li className="text-white">/ {post.title}</li>
            </ul>
            <h1 className="text-center text-white title">Latest Insights</h1>
          </div>
        </div>
      </section>

      {/* Blog Detail */}
      <section className="flat-section">
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8">
              <div className="flat-blog-detail">
                <div className="mb-30 pb-30 line-b">
                  <h3 className="title fw-8">{post.title}</h3>
                  <ul className="meta-blog">
                    <li className="item">
                      <svg className="icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9883 12.4831C11.5225 11.8664 10.9198 11.3662 10.2278 11.022C9.53575 10.6779 8.77324 10.4991 8.00033 10.4998C7.22743 10.4991 6.46492 10.6779 5.77288 11.022C5.08084 11.3662 4.47816 11.8664 4.01233 12.4831M11.9883 12.4831C12.8973 11.6746 13.5384 10.6088 13.8278 9.4272C14.1172 8.24555 14.0405 7.00386 13.608 5.86679C13.1754 4.72972 12.4075 3.75099 11.4059 3.0604C10.4044 2.36982 9.21656 2 8 2C6.78344 2 5.59562 2.36982 4.59407 3.0604C3.59252 3.75099 2.82455 4.72972 2.39202 5.86679C1.95949 7.00386 1.88284 8.24555 2.17221 9.4272C2.46159 10.6088 3.10333 11.6746 4.01233 12.4831M11.9883 12.4831C10.891 13.4619 9.47075 14.0019 8.00033 13.9998C6.52969 14.0021 5.10983 13.4621 4.01233 12.4831M10.0003 6.4998C10.0003 7.03024 9.78962 7.53894 9.41455 7.91402C9.03948 8.28909 8.53077 8.4998 8.00033 8.4998C7.4699 8.4998 6.96119 8.28909 6.58612 7.91402C6.21105 7.53894 6.00033 7.03024 6.00033 6.4998C6.00033 5.96937 6.21105 5.46066 6.58612 5.08559C6.96119 4.71052 7.4699 4.4998 8.00033 4.4998C8.53077 4.4998 9.03948 4.71052 9.41455 5.08559C9.78962 5.46066 10.0003 5.96937 10.0003 6.4998Z" stroke="#A3ABB0" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-primary fw-6">{post.author}</span>
                    </li>
                    <li className="item">
                      <svg className="icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.70667 4.20667L7.29333 2.79333C7.09402 2.59426 6.82918 2.48975 6.564 2.49H3C2.60218 2.49 2.22064 2.64804 1.93934 2.92934C1.65804 3.21064 1.5 3.59218 1.5 3.99V12C1.5 12.3978 1.65804 12.7794 1.93934 13.0607C2.22064 13.342 2.60218 13.5 3 13.5H13C13.3978 13.5 13.7794 13.342 14.0607 13.0607C14.342 12.7794 14.5 12.3978 14.5 12V6C14.5 5.60218 14.342 5.22064 14.0607 4.93934C13.7794 4.65804 13.3978 4.5 13 4.5H9.414C9.14887 4.49977 8.89402 4.39426 8.70667 4.20667Z" stroke="#A3ABB0" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-primary fw-6">{post.category}</span>
                    </li>
                    <li className="item">
                      <svg className="icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 2V3.5M11.5 2V3.5M2 12.5V5C2 4.60218 2.15804 4.22064 2.43934 3.93934C2.72064 3.65804 3.10218 3.5 3.5 3.5H12.5C12.8978 3.5 13.2794 3.65804 13.5607 3.93934C13.842 4.22064 14 4.60218 14 5V12.5M2 12.5C2 12.8978 2.15804 13.2794 2.43934 13.5607C2.72064 13.842 3.10218 14 3.5 14H12.5C12.8978 14 13.2794 13.842 13.5607 13.5607C13.842 13.2794 14 12.8978 14 12.5M2 12.5V7.5C2 7.10218 2.15804 6.72064 2.43934 6.43934C2.72064 6.15804 3.10218 6 3.5 6H12.5C12.8978 6 13.2794 6.15804 13.5607 6.43934C13.842 6.72064 14 7.10218 14 7.5V12.5" stroke="#A3ABB0" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-variant-1">{formatDate(post.date)}</span>
                    </li>
                  </ul>
                </div>

                {post.image && (
                  <div className="pb-30">
                    <div className="my-30 round-30 o-hidden">
                      <img
                        className="w-100"
                        src={post.image}
                        alt={post.title}
                        style={{ maxHeight: 450, objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                )}

                <div className="pb-30 line-b blog-content">
                  {post.content ? (
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  ) : (
                    <p className="text-variant-1">No content yet.</p>
                  )}
                </div>

              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="flat-sidebar">
                {recentPosts.length > 0 && (
                  <div className="widget-box">
                    <h6 className="title widget-title">Recent Posts</h6>
                    <ul className="recent-post-widget">
                      {recentPosts.map(p => (
                        <li key={p._id} className="item">
                          <Link href={`/blogs/${p.slug || p._id}`}>
                            <div className="d-flex gap-3 align-items-start">
                              {p.image && (
                                <img
                                  src={p.image}
                                  alt={p.title}
                                  style={{ width: 70, height: 60, objectFit: 'cover', borderRadius: 8, flexShrink: 0 }}
                                />
                              )}
                              <div>
                                <h6 className="title fs-14">{p.title}</h6>
                                <span className="text-variant-1 fs-12">{formatDate(p.date)}</span>
                              </div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="widget-box">
                  <h6 className="title widget-title">Browse All Posts</h6>
                  <a href="/blogs" className="tf-btn primary" style={{ display: 'inline-block', marginTop: 8 }}>
                    ← Back to Blog
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
