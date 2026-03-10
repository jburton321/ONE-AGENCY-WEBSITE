import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import CheckoutPrimary from "@/components/sections/checkout/CheckoutPrimary";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import CartContextProvider from "@/context_api/CartContext";
export default function Checkout() {
	return (
		<div className="ecommerce">
			<Header isHeaderTop={true} />
			<Header isStickyHeader={true} />
			<main>
				<HeroInner title={"Checkout"} text={"Checkout"} />
				<CartContextProvider>
					<CheckoutPrimary />
				</CartContextProvider>
				<Cta1 />
			</main>
			<Footer footerType={"inner"} />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
