import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import HeroInner from "@/components/sections/heros/HeroInner";
import searchSite from "@/libs/searchSite";
import Link from "next/link";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
	title: "Search | ONE Agency",
	description: "Search blogs, services, solutions, portfolios, and pages across ONE Agency.",
};

export default async function SearchPage({ searchParams }) {
	const params = await searchParams;
	const q = typeof params?.q === "string" ? params.q.trim() : "";
	const results = q ? searchSite(q) : [];

	return (
		<div>
			<Header isHeaderTop={true} />
			<Header isStickyHeader={true} />
			<main>
				<HeroInner
					title="Search"
					text={q ? `Results for "${q}"` : "Search the site"}
				/>
				<section className="tj-search-results section-space section-px">
					<div className="container">
						{q ? (
							<>
								<p className="mb-5" style={{ color: "var(--tj-color-text-body)" }}>
									{results.length} {results.length === 1 ? "result" : "results"} found
								</p>
								{results.length > 0 ? (
									<ul className="list-unstyled mb-0">
										{results.map((item, idx) => (
											<li key={`${item.type}-${item.path}-${idx}`} className="mb-4">
												<Link
													href={item.path}
													className="d-flex align-items-start gap-3 p-4 rounded-3 text-decoration-none"
													style={{
														background: "var(--tj-color-common-white)",
														border: "1px solid var(--tj-color-border-1)",
														color: "var(--tj-color-heading-primary)",
													}}
												>
													<span
														className="badge rounded-pill px-3 py-2 text-uppercase"
														style={{
															background: "var(--tj-color-theme-primary)",
															color: "white",
															fontSize: "11px",
															fontWeight: 600,
														}}
													>
														{item.type}
													</span>
													<div>
														<span className="fw-bold d-block">{item.title}</span>
														{item.subtitle && (
															<span
																className="small mt-1 d-block"
																style={{
																	color: "var(--tj-color-text-body)",
																	opacity: 0.9,
																}}
															>
																{typeof item.subtitle === "string"
																	? (item.subtitle.length > 120
																			? item.subtitle.slice(0, 120) + "…"
																			: item.subtitle)
																	: String(item.subtitle)}
															</span>
														)}
													</div>
												</Link>
											</li>
										))}
									</ul>
								) : (
									<p style={{ color: "var(--tj-color-text-body)" }}>
										No results found. Try different keywords.
									</p>
								)}
							</>
						) : (
							<p style={{ color: "var(--tj-color-text-body)" }}>
								Use the Explore search in the header to search across blogs, services, solutions,
								portfolios, and pages.
							</p>
						)}
					</div>
				</section>
			</main>
			<Footer footerType="inner" />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
