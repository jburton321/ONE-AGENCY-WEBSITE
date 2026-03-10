import Footer9 from "@/components/layout/footer/Footer9";
import Header from "@/components/layout/header/Header";
import About9 from "@/components/sections/About/About9";
import Blogs9 from "@/components/sections/blogs/Blogs9";
import Brands4 from "@/components/sections/brands/Brands4";
import Contact2 from "@/components/sections/contacts/Contact2";
import Cta8 from "@/components/sections/cta/Cta8";
import Hero9 from "@/components/sections/heros/Hero9";
import Portfolios9 from "@/components/sections/portfolios/Portfolios9";
import Process5 from "@/components/sections/process/Process5";
import Services9 from "@/components/sections/services/Services9";
import Team6 from "@/components/sections/teams/Team6";
import Testimonials8 from "@/components/sections/testimonials/Testimonials8";
import FeatureMarquee from "@/components/shared/marquee/FeatureMarquee";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export default function Home9() {
	return (
		<div>
			<Header headerType={9} isHeaderTop={true} topbarType={2} />
			<Header isStickyHeader={true} headerType={9} />
			<main>
				<Hero9 />
				<Services9 />
				<About9 />
				<FeatureMarquee />
				<Process5 />
				<Portfolios9 />
				<Testimonials8 />
				<Brands4 />
				<Team6 />
				<Contact2 />
				<Blogs9 />
				<Cta8 />
			</main>
			<Footer9 />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
