import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import CartPrimary from "@/components/sections/cart/CartPrimary";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import CartContextProvider from "@/context_api/CartContext";
const Cart = () => {
	return (
		<div className="ecommerce">
			<Header isHeaderTop={true} />
			<Header isStickyHeader={true} />
			<main>
				<HeroInner title={"Cart"} text={"Cart"} />
				<CartContextProvider>
					<CartPrimary />
				</CartContextProvider>
				<Cta1 />
			</main>
			<Footer footerType={"inner"} />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
};

export default Cart;
