import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';

const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID;
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;
const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME;
const R2_PUBLIC_BASE_URL = process.env.R2_PUBLIC_BASE_URL;

function getClient() {
  return new S3Client({
    region: 'auto',
    endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: R2_ACCESS_KEY_ID,
      secretAccessKey: R2_SECRET_ACCESS_KEY,
    },
  });
}

export async function uploadFileToR2(buffer, key, contentType) {
  const client = getClient();
  await client.send(new PutObjectCommand({
    Bucket: R2_BUCKET_NAME,
    Key: key,
    Body: buffer,
    ContentType: contentType,
  }));
  return `${R2_PUBLIC_BASE_URL}/${key}`;
}

export async function deleteFileFromR2(key) {
  if (!key) return;
  const client = getClient();
  try {
    await client.send(new DeleteObjectCommand({
      Bucket: R2_BUCKET_NAME,
      Key: key,
    }));
  } catch {
    // Ignore errors on delete (file may not exist)
  }
}

export function keyFromUrl(url) {
  if (!url || !R2_PUBLIC_BASE_URL) return null;
  if (url.startsWith(R2_PUBLIC_BASE_URL)) {
    return url.slice(R2_PUBLIC_BASE_URL.length + 1);
  }
  return null;
}
