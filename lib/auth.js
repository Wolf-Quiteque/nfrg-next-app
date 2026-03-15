import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;
const COOKIE_NAME = 'nfrg_admin_token';

export { COOKIE_NAME };

export function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

export async function verifyAdminPassword(plaintext) {
  return plaintext === process.env.ADMIN_PASSWORD;
}

export function cookieOptions(maxAge = 60 * 60 * 24 * 7) {
  return `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=${maxAge}`;
}
