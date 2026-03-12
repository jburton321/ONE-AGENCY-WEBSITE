/**
 * Base URL for the site — works in localhost and Vercel.
 * Vercel auto-sets VERCEL_URL; use NEXT_PUBLIC_SITE_URL for custom domain.
 */
export function getSiteUrl() {
	if (typeof window !== "undefined") {
		return window.location.origin;
	}
	// Server: Vercel provides VERCEL_URL (e.g. solvior-xxx.vercel.app)
	if (process.env.VERCEL_URL) {
		return `https://${process.env.VERCEL_URL}`;
	}
	// Custom domain or local dev
	return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}
