import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import ShopMain from "@/components/layout/main/ShopMain";
import Cta1 from "@/components/sections/cta/Cta1";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import CartContextProvider from "@/context_api/CartContext";
import WishlistContextProvider from "@/context_api/WshlistContext";

export default function Shop() {
	return (
		<div className="ecommerce">
			<Header isHeaderTop={true} />
			<Header isStickyHeader={true} />
			<main>
				<CartContextProvider>
					<WishlistContextProvider>
						<ShopMain />
					</WishlistContextProvider>
				</CartContextProvider>
				<Cta1 />
			</main>
			<Footer footerType={"inner"} />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
