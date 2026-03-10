import Footer10 from "@/components/layout/footer/Footer10";
import Header from "@/components/layout/header/Header";
import About10 from "@/components/sections/About/About10";
import Blogs10 from "@/components/sections/blogs/Blogs10";
import Brands5 from "@/components/sections/brands/Brands5";
import Features7 from "@/components/sections/features/Features7";
import Funfact2 from "@/components/sections/funfacts/Funfact2";
import Hero10 from "@/components/sections/heros/Hero10";
import Portfolios10 from "@/components/sections/portfolios/Portfolios10";
import Services10 from "@/components/sections/services/Services10";
import Team7 from "@/components/sections/teams/Team7";
import Testimonials9 from "@/components/sections/testimonials/Testimonials9";
import Video from "@/components/sections/videos/Video";
import FeatureMarquee from "@/components/shared/marquee/FeatureMarquee";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export default function Home10() {
	return (
		<div>
			<Header headerType={10} isHeaderTop={true} topbarType={3} />
			<Header isStickyHeader={true} headerType={10} />
			<main>
				<Hero10 />
				<Features7 />
				<About10 />
				<Funfact2 />
				<Services10 />
				<Video />
				<FeatureMarquee />
				<Team7 />
				<Portfolios10 />
				<Testimonials9 />
				<Blogs10 />
				<Brands5 />
			</main>
			<Footer10 />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
