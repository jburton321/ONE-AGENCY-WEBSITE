import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import ProductDetailsMain from "@/components/layout/main/ProductDetailsMain";
import Cta1 from "@/components/sections/cta/Cta1";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import CartContextProvider from "@/context_api/CartContext";
import WishlistContextProvider from "@/context_api/WshlistContext";
import getProducts from "@/libs/getProducts";
import { notFound } from "next/navigation";
const items = getProducts();
export default async function ProductDetails({ params }) {
	const { id } = await params;
	const isExistItem = items?.find(({ id: id1 }) => id1 === parseInt(id));
	if (!isExistItem) {
		notFound();
	}
	return (
		<div className="ecommerce">
			<Header isHeaderTop={true} />
			<Header isStickyHeader={true} />
			<main>
				<CartContextProvider>
					<WishlistContextProvider>
						<ProductDetailsMain currentItemId={parseInt(id)} />
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

export async function generateStaticParams() {
	return items?.map(({ id }) => ({ id: id.toString() }));
}
