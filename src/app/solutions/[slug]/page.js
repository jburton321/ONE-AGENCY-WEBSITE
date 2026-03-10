import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import SolutionDetailsMain from "@/components/layout/main/SolutionDetailsMain";
import Cta1 from "@/components/sections/cta/Cta1";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import getSolutions from "@/libs/getSolutions";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const solutions = getSolutions();
	const solution = solutions?.find((s) => s.slug === slug);
	if (!solution) return { title: "Solution | ONE Agency" };
	return {
		title: `${solution.title} | ONE Agency`,
		description: solution.desc || `${solution.title} – outcome-focused solution from ONE Agency.`,
	};
}

export default async function SolutionSlugPage({ params }) {
	const { slug } = await params;
	const solutions = getSolutions();
	const solution = solutions?.find((s) => s.slug === slug);
	if (!solution) notFound();
	return (
		<div>
			<Header isHeaderTop={true} />
			<Header isStickyHeader={true} />
			<main>
				<SolutionDetailsMain slug={slug} />
				<Cta1 />
			</main>
			<Footer footerType={"inner"} />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}

export async function generateStaticParams() {
	const solutions = getSolutions() || [];
	return solutions.map((s) => ({ slug: s.slug }));
}
