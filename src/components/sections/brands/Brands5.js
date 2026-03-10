import getBrands from "@/libs/getBrands";
import Link from "next/link";

const Brands5 = () => {
	const brands = getBrands()?.slice(0, 7);
	return (
		<section
			className="h10-brands overflow-hidden wow fadeInUp"
			data-wow-delay="0.3s"
		>
			{brands?.length
				? brands?.map(({ img2 }, idx) => (
						<div
							key={idx}
							className="brand_item"
							style={{
								backgroundImage: "url('/images/brand/brand-bg-1.webp')",
							}}
						>
							<Link href="/contact">
								<div>
									<img
										src={img2 ? img2 : "/images/brand/brand-black-1.png"}
										alt=""
									/>
									<img
										src={img2 ? img2 : "/images/brand/brand-black-1.png"}
										alt=""
									/>
								</div>
							</Link>
						</div>
				  ))
				: ""}
		</section>
	);
};

export default Brands5;
