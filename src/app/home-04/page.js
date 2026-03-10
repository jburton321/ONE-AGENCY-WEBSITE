import Footer4 from "@/components/layout/footer/Footer4";
import Header from "@/components/layout/header/Header";
import About4 from "@/components/sections/About/About4";
import Blogs4 from "@/components/sections/blogs/Blogs4";
import Cta3 from "@/components/sections/cta/Cta3";
import Features3 from "@/components/sections/features/Features3";
import Hero4 from "@/components/sections/heros/Hero4";
import Portfolios4 from "@/components/sections/portfolios/Portfolios4";
import Progress2 from "@/components/sections/progress/Progress2";
import Services4 from "@/components/sections/services/Services4";
import Team2 from "@/components/sections/teams/Team2";
import Testimonials2 from "@/components/sections/testimonials/Testimonials2";
import FeatureMarquee from "@/components/shared/marquee/FeatureMarquee";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export default function Home4() {
	return (
		<div>
			<Header headerType={4} />
			<Header isStickyHeader={true} headerType={4} />
			<main>
				<Hero4 />
				<Features3 />
				<About4 />
				<Services4 />
				<FeatureMarquee />
				<Progress2 />
				<Portfolios4 />
				<Team2 />
				<Testimonials2 type={2} />
				<Blogs4 />
				<Cta3 />
			</main>
			<Footer4 />
			<ClientWrapper />
			<TjMagicCursor type={3} />
		</div>
	);
}
