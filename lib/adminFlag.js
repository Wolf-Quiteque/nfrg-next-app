// Non-secret cookie set next to the HttpOnly admin token. It only tells the browser
// "an admin may be signed in", so public pages skip /api/auth/check for regular visitors.
// Access is still decided by the token alone.
export const ADMIN_FLAG_COOKIE = 'nfrg_admin';
export const ADMIN_FLAG_OPTIONS = { sameSite: 'lax', maxAge: 60 * 60 * 24 * 7, path: '/' };
