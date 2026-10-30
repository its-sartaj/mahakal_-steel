/**
 * Resolves any public asset path against the current base URL (supports local dev, Vercel root, and GitHub Pages subpath).
 */
export const asset = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // Avoid double prefixing if path already includes cleanBase
  if (path.startsWith(cleanBase)) {
    return path;
  }

  return `${cleanBase}${cleanPath}`;
};
