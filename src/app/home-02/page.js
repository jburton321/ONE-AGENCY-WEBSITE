import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import About2 from "@/components/sections/About/About2";
import Blogs2 from "@/components/sections/blogs/Blogs2";
import Brands1 from "@/components/sections/brands/Brands1";
import Contact1 from "@/components/sections/contacts/Contact1";
import Cta1 from "@/components/sections/cta/Cta1";
import Hero2 from "@/components/sections/heros/Hero2";
import Portfolios2 from "@/components/sections/portfolios/Portfolios2";
import Progress1 from "@/components/sections/progress/Progress1";
import Services2 from "@/components/sections/services/Services2";
import Team1 from "@/components/sections/teams/Team1";
import Testimonials2 from "@/components/sections/testimonials/Testimonials2";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function Home2() {
	return (
		<div>
			<Header headerType={2} />
			<Header isStickyHeader={true} headerType={2} />
			<main>
				<Hero2 />
				<About2 />
				<Services2 />
				<Progress1 />
				<Team1 />
				<Brands1 />
				<Portfolios2 />
				<Testimonials2 />
				<Contact1 />
				<Blogs2 />
				<Cta1 />
			</main>
			<Footer2 />
			<ClientWrapper />
			<TjMagicCursor type={2} />
		</div>
	);
}
