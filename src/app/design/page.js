import Link from "next/link";

const colorTokens = [
	{ name: "Common White", var: "--tj-color-common-white", value: "#f7f7f7" },
	{ name: "Common White 2", var: "--tj-color-common-white-2", value: "#a9b0b8" },
	{ name: "Common Black", var: "--tj-color-common-black", value: "#000000" },
	{ name: "Common Black 2", var: "--tj-color-common-black-2", value: "#676e7a" },
	{ name: "Common Black 3", var: "--tj-color-common-black-3", value: "#969ca5" },
	{ name: "Heading Primary", var: "--tj-color-heading-primary", value: "#051229" },
	{ name: "Text Body", var: "--tj-color-text-body", value: "#364052" },
	{ name: "Text Body 2", var: "--tj-color-text-body-2", value: "#7e8590" },
	{ name: "Theme Primary", var: "--tj-color-theme-primary", value: "#0075ff" },
	{ name: "Theme Dark", var: "--tj-color-theme-dark", value: "#051229" },
	{ name: "Theme Bg", var: "--tj-color-theme-bg", value: "#e1e8f0" },
	{ name: "Theme Bg 2", var: "--tj-color-theme-bg-2", value: "#dfecfd" },
	{ name: "Border 1", var: "--tj-color-border-1", value: "#27354d" },
	{ name: "Border 2", var: "--tj-color-border-2", value: "#ced7e0" },
	{ name: "Border 3", var: "--tj-color-border-3", value: "#d7d8db" },
	{ name: "Red 1", var: "--tj-color-red-1", value: "#ff0000" },
];

const fontWeights = [
	{ name: "Thin", var: "--tj-fw-thin", value: "100" },
	{ name: "Extra light", var: "--tj-fw-elight", value: "200" },
	{ name: "Light", var: "--tj-fw-light", value: "300" },
	{ name: "Regular", var: "--tj-fw-regular", value: "400" },
	{ name: "Medium", var: "--tj-fw-medium", value: "500" },
	{ name: "Semi bold", var: "--tj-fw-sbold", value: "600" },
	{ name: "Bold", var: "--tj-fw-bold", value: "700" },
	{ name: "Extra bold", var: "--tj-fw-ebold", value: "800" },
	{ name: "Black", var: "--tj-fw-black", value: "900" },
];

const breakpoints = [
	{ name: "xxxxl", query: "min-width: 1800px" },
	{ name: "xxxl", query: "1600px – 1799px" },
	{ name: "xxl", query: "1400px – 1599px" },
	{ name: "xl", query: "1200px – 1399px" },
	{ name: "lg", query: "992px – 1199px" },
	{ name: "md", query: "768px – 991px" },
	{ name: "sm", query: "576px – 767px" },
	{ name: "xs", query: "max-width: 575px" },
	{ name: "xxs", query: "max-width: 390px" },
];

export const metadata = {
	title: "Design system — ONE Agency",
	description: "Colors, typography, spacing and breakpoints for ONE Agency.",
};

export default function DesignPage() {
	return (
		<div className="design-system">
			<header
				className="design-system-header"
				style={{
					padding: "2rem 1.5rem",
					borderBottom: "1px solid var(--tj-color-border-2)",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					flexWrap: "wrap",
					gap: "1rem",
				}}
			>
				<h1 style={{ margin: 0, fontSize: "var(--tj-fs-h4)" }}>
					ONE Agency design system
				</h1>
				<Link
					href="/"
					style={{
						color: "var(--tj-color-theme-primary)",
						fontSize: "var(--tj-fs-body)",
					}}
				>
					← Back to site
				</Link>
			</header>

			<main style={{ padding: "3rem 1.5rem", maxWidth: 1200, margin: "0 auto" }}>
				{/* Colors */}
				<section style={{ marginBottom: "4rem" }}>
					<h2 style={{ marginBottom: "1.5rem", fontSize: "var(--tj-fs-h3)" }}>
						Colors
					</h2>
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
							gap: "1rem",
						}}
					>
						{colorTokens.map((token) => (
							<div
								key={token.var}
								style={{
									border: "1px solid var(--tj-color-border-2)",
									borderRadius: 8,
									overflow: "hidden",
								}}
							>
								<div
									style={{
										height: 80,
										backgroundColor: `var(${token.var})`,
										borderBottom: "1px solid var(--tj-color-border-2)",
									}}
								/>
								<div style={{ padding: "0.75rem", fontSize: 14 }}>
									<div style={{ fontWeight: 600, marginBottom: 4 }}>
										{token.name}
									</div>
									<code
										style={{
											display: "block",
											fontSize: 12,
											color: "var(--tj-color-text-body-2)",
											wordBreak: "break-all",
										}}
									>
										{token.var}
									</code>
									<div
										style={{
											fontSize: 12,
											color: "var(--tj-color-text-body-2)",
											marginTop: 4,
										}}
									>
										{token.value}
									</div>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Typography */}
				<section style={{ marginBottom: "4rem" }}>
					<h2 style={{ marginBottom: "1.5rem", fontSize: "var(--tj-fs-h3)" }}>
						Typography
					</h2>
					<div style={{ marginBottom: "2rem" }}>
						<p style={{ marginBottom: "0.5rem", color: "var(--tj-color-text-body-2)" }}>
							Headings use <code>var(--tj-ff-heading)</code> (Libre Franklin). Body uses{" "}
							<code>var(--tj-ff-body)</code> (Lato).
						</p>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "1rem",
							marginBottom: "2rem",
						}}
					>
						<h1>Heading 1 — 72px</h1>
						<h2>Heading 2 — 48px</h2>
						<h3>Heading 3 — 32px</h3>
						<h4>Heading 4 — 24px</h4>
						<h5>Heading 5 — 20px</h5>
						<h6>Heading 6 — 18px</h6>
						<p style={{ fontSize: "var(--tj-fs-body)" }}>
							Body text — 16px. The quick brown fox jumps over the lazy dog.
						</p>
					</div>
					<h3 style={{ marginBottom: "1rem" }}>Font weights</h3>
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
							gap: "0.5rem",
						}}
					>
						{fontWeights.map((w) => (
							<div
								key={w.var}
								style={{
									padding: "0.5rem",
									border: "1px solid var(--tj-color-border-2)",
									borderRadius: 6,
									fontWeight: `var(${w.var})`,
								}}
							>
								{w.name} ({w.value})
							</div>
						))}
					</div>
				</section>

				{/* Spacing */}
				<section style={{ marginBottom: "4rem" }}>
					<h2 style={{ marginBottom: "1.5rem", fontSize: "var(--tj-fs-h3)" }}>
						Spacing
					</h2>
					<table
						style={{
							width: "100%",
							borderCollapse: "collapse",
							fontSize: "var(--tj-fs-body)",
						}}
					>
						<thead>
							<tr style={{ borderBottom: "2px solid var(--tj-color-border-2)" }}>
								<th style={{ textAlign: "left", padding: "0.75rem" }}>Class</th>
								<th style={{ textAlign: "left", padding: "0.75rem" }}>Usage</th>
							</tr>
						</thead>
						<tbody>
							<tr style={{ borderBottom: "1px solid var(--tj-color-border-2)" }}>
								<td style={{ padding: "0.75rem" }}>
									<code>.section-space</code>
								</td>
								<td style={{ padding: "0.75rem" }}>
									120px vertical (100px lg, 80px md/sm/xs)
								</td>
							</tr>
							<tr style={{ borderBottom: "1px solid var(--tj-color-border-2)" }}>
								<td style={{ padding: "0.75rem" }}>
									<code>.rg-30</code> … <code>.rg-80</code>
								</td>
								<td style={{ padding: "0.75rem" }}>Row gap 30px–80px</td>
							</tr>
							<tr style={{ borderBottom: "1px solid var(--tj-color-border-2)" }}>
								<td style={{ padding: "0.75rem" }}>
									<code>.mt-30</code> / <code>.mb-30</code> etc.
								</td>
								<td style={{ padding: "0.75rem" }}>Margin 30px, 40px, 50px, 60px</td>
							</tr>
						</tbody>
					</table>
				</section>

				{/* Breakpoints */}
				<section style={{ marginBottom: "4rem" }}>
					<h2 style={{ marginBottom: "1.5rem", fontSize: "var(--tj-fs-h3)" }}>
						Breakpoints
					</h2>
					<table
						style={{
							width: "100%",
							borderCollapse: "collapse",
							fontSize: "var(--tj-fs-body)",
						}}
					>
						<thead>
							<tr style={{ borderBottom: "2px solid var(--tj-color-border-2)" }}>
								<th style={{ textAlign: "left", padding: "0.75rem" }}>Name</th>
								<th style={{ textAlign: "left", padding: "0.75rem" }}>Media query</th>
							</tr>
						</thead>
						<tbody>
							{breakpoints.map((bp) => (
								<tr
									key={bp.name}
									style={{ borderBottom: "1px solid var(--tj-color-border-2)" }}
								>
									<td style={{ padding: "0.75rem" }}>
										<code>${bp.name}</code>
									</td>
									<td style={{ padding: "0.75rem", color: "var(--tj-color-text-body-2)" }}>
										{bp.query}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</section>

				<p style={{ color: "var(--tj-color-text-body-2)", fontSize: 14 }}>
					Full token reference: <code>DESIGN.md</code> in the project root.
				</p>
			</main>
		</div>
	);
}
