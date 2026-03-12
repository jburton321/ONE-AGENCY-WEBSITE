import getBlogs from "./getBlogs";
import getALlServices from "./getALlServices";
import getSolutions from "./getSolutions";
import getPortfolio from "./getPortfolio";

/**
 * Builds a flat search index from all site content.
 * Each item: { type, title, path, subtitle? }
 */
export default function buildSearchIndex() {
	const index = [];

	// Blogs
	try {
		const blogs = getBlogs() || [];
		blogs.forEach((item) => {
			index.push({
				type: "Blog",
				title: item.title || "",
				path: `/blogs/${item.id}`,
				subtitle: typeof item.category === "string" ? item.category : item.author?.name,
			});
		});
	} catch (_) {}

	// Services
	try {
		const services = getALlServices() || [];
		services.forEach((item) => {
			index.push({
				type: "Service",
				title: item.title || "",
				path: `/services/${item.id}`,
				subtitle: item.shortDesc || item.desc,
			});
		});
	} catch (_) {}

	// Solutions
	try {
		const solutions = getSolutions() || [];
		solutions.forEach((item) => {
			index.push({
				type: "Solution",
				title: item.title || "",
				path: `/solutions/${item.slug}`,
				subtitle: item.desc,
			});
		});
	} catch (_) {}

	// Portfolios
	try {
		const portfolios = getPortfolio() || [];
		portfolios.forEach((item) => {
			index.push({
				type: "Portfolio",
				title: item.title || "",
				path: `/portfolios/${item.id}`,
				subtitle: item.category || item.type,
			});
		});
	} catch (_) {}

	// Static pages
	const staticPages = [
		{ type: "Page", title: "About us", path: "/about" },
		{ type: "Page", title: "Our history", path: "/history" },
		{ type: "Page", title: "Team", path: "/team" },
		{ type: "Page", title: "Careers", path: "/careers" },
		{ type: "Page", title: "FAQ", path: "/faq" },
		{ type: "Page", title: "Contact", path: "/contact" },
		{ type: "Page", title: "Services", path: "/services" },
		{ type: "Page", title: "Portfolios", path: "/portfolios" },
		{ type: "Page", title: "Blog", path: "/blogs" },
		{ type: "Page", title: "Solutions", path: "/solutions" },
	];
	index.push(...staticPages);

	return index;
}
