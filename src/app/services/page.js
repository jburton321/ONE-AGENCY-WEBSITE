import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Cta1 from "@/components/sections/cta/Cta1";

export const metadata = {
	title: "Services | Software Development & Integration | ONE Agency",
	description: "Custom software and integration services. myONE Dash, DataCloud, CRM, automations and more. Integrate seamlessly with every major platform.",
};

import HeroInner from "@/components/sections/heros/HeroInner";
import ServicesPrimary from "@/components/sections/services/ServicesPrimary";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export default function Services() {
	return (
		<div>
			<Header isHeaderTop={true} />
			<Header isStickyHeader={true} />
			<main>
				<HeroInner title={"Services"} text={"Services"} />
				<ServicesPrimary />
				<Cta1 />
			</main>
			<Footer footerType={"inner"} />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
