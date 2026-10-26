// Prefixes root-relative paths (e.g. "/favicon.svg") with the configured base,
// so assets resolve when the site is served from a subpath like GitHub Pages.
export function withBase(path: string): string {
  if (!path.startsWith('/')) return path;
  return import.meta.env.BASE_URL.replace(/\/$/, '') + path;
}
