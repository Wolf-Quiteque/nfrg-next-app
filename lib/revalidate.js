import { revalidatePath } from 'next/cache';

// Public pages (home, /blogs, each post) are cached. Call this after any admin write
// so the change shows on the next visit instead of waiting for a redeploy.
export function refreshPublicPages() {
  revalidatePath('/', 'layout');
}
