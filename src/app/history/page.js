import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import About12 from "@/components/sections/About/About12";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import History1 from "@/components/sections/history/History1";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
	title: "Our History | ONE Agency – Digital Performance Legacy",
	description: "Discover how ONE Agency has evolved into your ONE: from founding through global expansion, customer acquisition and intelligent marketing.",
};

export default function History() {
	return (
		<div>
			<Header isHeaderTop={true} />
			<Header isStickyHeader={true} />
			<main>
				<HeroInner title={"Our history"} text={"Our history"} />
				<About12 />
				<History1 />
				<Cta1 />
			</main>
			<Footer footerType={"inner"} />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
