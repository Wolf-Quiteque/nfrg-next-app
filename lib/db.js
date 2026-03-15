import clientPromise from './mongodb';
import { ObjectId } from 'mongodb';

const DB_NAME = process.env.MONGODB_DB_NAME || 'nfrg';

async function getDb() {
  const client = await clientPromise;
  return client.db(DB_NAME);
}

// ─── Blog ────────────────────────────────────────────────────────────────────

export async function getBlogPosts({ limit = 0, skip = 0, published } = {}) {
  const db = await getDb();
  const query = {};
  if (published !== undefined) query.published = published;
  let cursor = db.collection('blogs').find(query).sort({ date: -1 });
  if (skip) cursor = cursor.skip(skip);
  if (limit) cursor = cursor.limit(limit);
  const posts = await cursor.toArray();
  return posts.map(serializeBlog);
}

export async function getBlogPost(idOrSlug) {
  const db = await getDb();
  let post = null;
  // Try by slug first
  post = await db.collection('blogs').findOne({ slug: idOrSlug });
  if (!post && ObjectId.isValid(idOrSlug)) {
    post = await db.collection('blogs').findOne({ _id: new ObjectId(idOrSlug) });
  }
  return post ? serializeBlog(post) : null;
}

export async function createBlogPost(data) {
  const db = await getDb();
  const now = new Date();
  const doc = {
    ...data,
    date: data.date ? new Date(data.date) : now,
    published: data.published ?? false,
    createdAt: now,
    updatedAt: now,
  };
  const result = await db.collection('blogs').insertOne(doc);
  return serializeBlog({ ...doc, _id: result.insertedId });
}

export async function updateBlogPost(id, data) {
  const db = await getDb();
  const update = { ...data, updatedAt: new Date() };
  if (update.date) update.date = new Date(update.date);
  delete update._id;
  await db.collection('blogs').updateOne(
    { _id: new ObjectId(id) },
    { $set: update }
  );
  return getBlogPost(id);
}

export async function deleteBlogPost(id) {
  const db = await getDb();
  const post = await db.collection('blogs').findOne({ _id: new ObjectId(id) });
  await db.collection('blogs').deleteOne({ _id: new ObjectId(id) });
  return post ? serializeBlog(post) : null;
}

function serializeBlog(post) {
  return {
    ...post,
    _id: post._id.toString(),
    date: post.date ? post.date.toISOString() : null,
    createdAt: post.createdAt ? post.createdAt.toISOString() : null,
    updatedAt: post.updatedAt ? post.updatedAt.toISOString() : null,
  };
}

// ─── Site Content ─────────────────────────────────────────────────────────────

export async function getSiteContent(keys) {
  if (!keys || keys.length === 0) return {};
  const db = await getDb();
  const docs = await db.collection('siteContent').find({ key: { $in: keys } }).toArray();
  const result = {};
  for (const doc of docs) {
    result[doc.key] = doc.value;
  }
  return result;
}

export async function getSiteContentItem(key) {
  const db = await getDb();
  return db.collection('siteContent').findOne({ key });
}

export async function upsertSiteContent(key, value, type = 'text') {
  const db = await getDb();
  await db.collection('siteContent').updateOne(
    { key },
    { $set: { value, type, updatedAt: new Date() }, $setOnInsert: { key } },
    { upsert: true }
  );
}

// ─── Analytics ───────────────────────────────────────────────────────────────

export async function trackPageView(page, ip) {
  const db = await getDb();
  const date = new Date();
  date.setUTCHours(0, 0, 0, 0); // truncate to day
  await db.collection('analytics').updateOne(
    { page, date },
    {
      $inc: { count: 1 },
      $addToSet: { ips: ip || 'unknown' },
    },
    { upsert: true }
  );
}

export async function getAnalyticsSummary() {
  const db = await getDb();
  const docs = await db.collection('analytics').find({}).toArray();

  let totalViews = 0;
  const allIps = new Set();
  const byPageMap = {};

  for (const doc of docs) {
    totalViews += doc.count || 0;
    const ips = doc.ips || [];
    for (const ip of ips) allIps.add(ip);

    if (!byPageMap[doc.page]) {
      byPageMap[doc.page] = { views: 0, ips: new Set() };
    }
    byPageMap[doc.page].views += doc.count || 0;
    for (const ip of ips) byPageMap[doc.page].ips.add(ip);
  }

  const byPage = Object.entries(byPageMap).map(([page, data]) => ({
    page,
    views: data.views,
    uniqueVisitors: data.ips.size,
  })).sort((a, b) => b.views - a.views);

  return {
    totalViews,
    uniqueVisitors: allIps.size,
    byPage,
  };
}

// ─── Listings ─────────────────────────────────────────────────────────────────

export async function getListings({ activeOnly = true } = {}) {
  const db = await getDb();
  const query = activeOnly ? { active: true } : {};
  return db.collection('listings').find(query).sort({ displayOrder: 1, createdAt: 1 }).toArray()
    .then(docs => docs.map(serializeListing));
}

export async function getListing(id) {
  const db = await getDb();
  if (!ObjectId.isValid(id)) return null;
  const doc = await db.collection('listings').findOne({ _id: new ObjectId(id) });
  return doc ? serializeListing(doc) : null;
}

export async function createListing(data) {
  const db = await getDb();
  const now = new Date();
  const count = await db.collection('listings').countDocuments();
  const doc = { ...data, active: data.active ?? true, displayOrder: data.displayOrder ?? count, createdAt: now, updatedAt: now };
  const result = await db.collection('listings').insertOne(doc);
  return serializeListing({ ...doc, _id: result.insertedId });
}

export async function updateListing(id, data) {
  const db = await getDb();
  const update = { ...data, updatedAt: new Date() };
  delete update._id;
  await db.collection('listings').updateOne({ _id: new ObjectId(id) }, { $set: update });
  return getListing(id);
}

export async function deleteListing(id) {
  const db = await getDb();
  const doc = await db.collection('listings').findOne({ _id: new ObjectId(id) });
  await db.collection('listings').deleteOne({ _id: new ObjectId(id) });
  return doc ? serializeListing(doc) : null;
}

function serializeListing(doc) {
  return {
    ...doc,
    _id: doc._id.toString(),
    createdAt: doc.createdAt?.toISOString() ?? null,
    updatedAt: doc.updatedAt?.toISOString() ?? null,
  };
}
