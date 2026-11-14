const TRACKING_HOSTS = new Set(['donovanfamilydentistry.com', 'www.donovanfamilydentistry.com']);
const EXCLUDED_PATHS = ['/contact', '/forms', '/modern', '/review'];

export function shouldLoadPracticeAnalytics(hostname, pathname) {
  if (!TRACKING_HOSTS.has(hostname.toLowerCase())) return false;
  return !EXCLUDED_PATHS.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
}
