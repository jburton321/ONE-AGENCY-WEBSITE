import getBrands from "@/libs/getBrands";
import Link from "next/link";

const Brands3 = () => {
	const brands = getBrands()?.slice(0, 6);
	return (
		<section
			className="tj-brand section-space"
			style={{ backgroundImage: "url('/images/brand/h7-brand-bg.png')" }}
		>
			<div className="container">
				<div className="row">
					<div className="col-12"></div>
				</div>
				<div className="row align-items-center flex-column-reverse flex-lg-row ">
					<div className="col-12 col-lg-6 col-xl-8">
						<div className="tj-brand-inner wow fadeInUp" data-wow-delay="0.3s">
							{brands?.length
								? brands?.map(({ img }, idx) => (
										<div key={idx} className="brand-logo">
											<Link href="#">
												<img
													src={img ? img : "/images/brand/brand-thumb-1.png"}
													alt="Brand"
												/>
											</Link>
										</div>
								  ))
								: ""}
						</div>
					</div>
					<div className="col-12 col-lg-6 col-xl-4">
						<div className="sec-heading h7-section-heading ">
							<h2 className="sec-title text-anim">
								Join over <span>1000+</span> companies with ONE Agency
							</h2>

							<Link className="service-button text-btn" href="/contact">
								Join us now <i className="tji-angle-right"></i>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Brands3;
