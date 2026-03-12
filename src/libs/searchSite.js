import buildSearchIndex from "./buildSearchIndex";

/**
 * Site-wide search. Returns items matching the query (case-insensitive).
 * Searches title and subtitle.
 */
export default function searchSite(query) {
	if (!query || typeof query !== "string") return [];
	const q = query.trim().toLowerCase();
	if (!q) return [];

	const index = buildSearchIndex();
	const regex = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");

	return index.filter((item) => {
		const titleMatch = item.title && regex.test(item.title);
		const subtitleMatch =
			item.subtitle && (typeof item.subtitle === "string" ? regex.test(item.subtitle) : false);
		return titleMatch || subtitleMatch;
	});
}
