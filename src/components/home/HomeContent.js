import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import About1 from "@/components/sections/About/About1";
import PlatformBento from "@/components/sections/platform-bento/PlatformBento";
import Blogs1 from "@/components/sections/blogs/Blogs1";
import BentoGrid from "@/components/sections/bento-grid/BentoGrid";
import ContrastSection from "@/components/sections/contrast/ContrastSection";
import Cta1 from "@/components/sections/cta/Cta1";
import Ecosystem from "@/components/sections/ecosystem/Ecosystem";
import Features from "@/components/sections/features/Features";
import FoundersReveal from "@/components/sections/founders/FoundersReveal";
import Funfact2 from "@/components/sections/funfacts/Funfact2";
import GrowthStack from "@/components/sections/growth-stack/GrowthStack";
import CIQHero from "@/components/sections/ciq-hero/CIQHero";
import LiveStats from "@/components/sections/live-stats/LiveStats";
import Portfolios1 from "@/components/sections/portfolios/Portfolios1";
import Services1 from "@/components/sections/services/Services1";
import Skills1 from "@/components/sections/Skills/Skills1";
import Team1 from "@/components/sections/teams/Team1";
import Testimonials1 from "@/components/sections/testimonials/Testimonials1";
import Video from "@/components/sections/videos/Video";
import Hero from "@/components/sections/heros/Hero";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import FooterStack from "@/components/shared/wrappers/FooterStack";

export default function HomeContent() {
	return (
		<div dir="ltr" className="home-1-global">
			<Header isHeaderTop={true} />
			<Header isStickyHeader={true} />
			<main dir="ltr">
				<Hero />
				<LiveStats />
				<Features />
				<BentoGrid />
				<About1 />
				<PlatformBento />
				<Services1 />
				<ContrastSection />
				<FoundersReveal />
				<Skills1 />
				<Ecosystem />
				<CIQHero />
				<GrowthStack />
				<Team1 />
				<Funfact2 />
				<Video />
				<Testimonials1 />
				<Portfolios1 />
				<Blogs1 />
				<Cta1 />
			</main>
			<FooterStack>
				<Footer />
			</FooterStack>
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
