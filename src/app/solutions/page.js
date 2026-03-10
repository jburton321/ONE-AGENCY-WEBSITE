import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import getSolutions from "@/libs/getSolutions";
import Link from "next/link";

export const metadata = {
	title: "Solutions | ONE Agency",
	description: "Outcome-focused solutions: Customer Acquisition, Performance Creative, Customer Engagement, Referral Engine, Data, Booking Engine, AI Solutions, Accelerated API Integrations.",
};

export default function SolutionsPage() {
	const solutions = getSolutions();
	return (
		<div>
			<Header isHeaderTop={true} />
			<Header isStickyHeader={true} />
			<main>
				<HeroInner title={"Solutions"} text={"Solutions"} />
				<section className="tj-services-section">
					<div className="container">
						<div className="row g-4">
							{solutions?.map((s) => (
								<div key={s.id} className="col-lg-3 col-md-4 col-6">
									<Link href={s.path || `/solutions/${s.slug}`} className="h6">
										{s.title}
									</Link>
								</div>
							))}
						</div>
					</div>
				</section>
				<Cta1 />
			</main>
			<Footer footerType={"inner"} />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
