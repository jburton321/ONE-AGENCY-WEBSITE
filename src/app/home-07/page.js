import Footer7 from "@/components/layout/footer/Footer7";
import Header from "@/components/layout/header/Header";
import About7 from "@/components/sections/About/About7";
import Blogs7 from "@/components/sections/blogs/Blogs7";
import Brands3 from "@/components/sections/brands/Brands3";
import Faq2 from "@/components/sections/faq/Faq2";
import Features5 from "@/components/sections/features/Features5";
import Hero7 from "@/components/sections/heros/Hero7";
import Portfolios7 from "@/components/sections/portfolios/Portfolios7";
import Process3 from "@/components/sections/process/Process3";
import Services7 from "@/components/sections/services/Services7";
import Testimonials6 from "@/components/sections/testimonials/Testimonials6";
import FeatureMarquee from "@/components/shared/marquee/FeatureMarquee";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export default function Home7() {
	return (
		<div>
			<Header headerType={7} />
			<Header isStickyHeader={true} headerType={7} />
			<main>
				<Hero7 />
				<Features5 />
				<About7 />
				<Services7 />
				<Brands3 />
				<Portfolios7 />
				<Process3 />
				<Testimonials6 />
				<FeatureMarquee />
				<Blogs7 />
				<Faq2 />
			</main>
			<Footer7 />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
