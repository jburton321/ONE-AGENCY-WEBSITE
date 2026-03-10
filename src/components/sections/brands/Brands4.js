import getBrands from "@/libs/getBrands";
import Link from "next/link";

const Brands4 = () => {
	const brands = getBrands()?.slice(0, 7);
	return (
		<section
			className="h9-brands overflow-hidden wow fadeInUp"
			data-wow-delay="0.3s"
		>
			{brands?.length
				? brands?.map(({ img2 }, idx) => (
						<div className="brand_item" key={idx}>
							<Link href="#">
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

export default Brands4;
