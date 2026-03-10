import Footer6 from "@/components/layout/footer/Footer6";
import Header from "@/components/layout/header/Header";
import About6 from "@/components/sections/About/About6";
import Blogs6 from "@/components/sections/blogs/Blogs6";
import Cta5 from "@/components/sections/cta/Cta5";
import Hero6 from "@/components/sections/heros/Hero6";
import Portfolios6 from "@/components/sections/portfolios/Portfolios6";
import Process2 from "@/components/sections/process/Process2";
import Services6 from "@/components/sections/services/Services6";
import Team4 from "@/components/sections/teams/Team4";
import Testimonials5 from "@/components/sections/testimonials/Testimonials5";
import FeatureMarquee2 from "@/components/shared/marquee/FeatureMarquee2";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export default function Home6() {
	return (
		<div>
			<Header headerType={6} />
			<Header isStickyHeader={true} headerType={6} />
			<main>
				<Hero6 />
				<About6 />
				<Services6 />
				<Process2 />
				<FeatureMarquee2 />
				<Portfolios6 />
				<Testimonials5 />
				<Team4 />
				<Cta5 />
				<Blogs6 />
			</main>
			<Footer6 />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
