import Image from "next/image";
import Link from "next/link";

const Hero3 = () => {
	return (
		<section className="tj-hero-section-two">
			<div className="container">
				<div className="row">
					<div className="hero-wrapper-two">
						<div className="hero-content-two">
							<h1 className="hero-title text-anim">
								Maximize business success with proven strategies &{" "}
								<span>Expert advice</span>
							</h1>
							<div className="desc wow fadeInUp" data-wow-delay="0.1s">
								<p>
									<span>
										<Image
											src="/images/icons/hero-icons.svg"
											alt="Icons"
											width={12}
											height={12}
											style={{ height: "auto" }}
										/>
									</span>
									Establish your business growth with our expert consultancy.
								</p>
							</div>
						</div>
						<span className="shape-1 zoominout">
							<Image
								src="/images/icons/h3-shape-1.svg"
								alt="Shapes"
								width={29}
								height={32}
								style={{ height: "auto" }}
							/>
						</span>
					</div>
				</div>
			</div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<div
							className="hero-images-box-two wow fadeInUp"
							data-wow-delay="0.3s"
						>
							<Image
								src="/images/hero/hero-banner.webp"
								alt="Images"
								width={1802}
								height={1210}
							/>
							<div className="hero-button">
								<Link className="hero-btn" href="#about">
									<span className="blue">
										<span>
											<i className="tji-arrow-bown"></i>
											<i className="tji-arrow-bown"></i>
										</span>
									</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="hero_shapes">
				<Image
					src="/images/shapes/h2-hero-shapes.png"
					alt="Shapes"
					width={300}
					height={288}
					style={{ height: "auto" }}
				/>
			</div>
		</section>
	);
};

export default Hero3;
