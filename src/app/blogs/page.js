import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BlogMain from "@/components/layout/main/BlogMain";
import Cta1 from "@/components/sections/cta/Cta1";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import { Suspense } from "react";

export const metadata = {
	title: "Blog | ONE Agency – Insights and Updates",
	description: "Read the latest ONE Agency posts on digital growth, customer acquisition, performance creative and MarTech.",
};

export default function Blogs() {
	return (
		<div>
			<Header isHeaderTop={true} />
			<Header isStickyHeader={true} />
			<main>
				<Suspense fallback={<div className="section-space"><div className="container"><p className="text-center">Loading…</p></div></div>}>
					<BlogMain />
				</Suspense>
				<Cta1 />
			</main>

			<Footer footerType={"inner"} />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
