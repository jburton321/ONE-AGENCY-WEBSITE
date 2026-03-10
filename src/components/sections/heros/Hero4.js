"use client";

import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import Image from "next/image";
import Link from "next/link";

const Hero4 = () => {
	return (
		<section className="tj-hero-section-three">
			<div className="container">
				<div className="row">
					<div className="hero-wrapper-three">
						<div className="hero-content-area">
							<div className="hero-content-three">
								<h1 className="hero-title text-anim">
									Tailored <span>consulting</span> for the modern business
								</h1>
								<div className="desc wow fadeInUp" data-wow-delay="0.1s">
									<p>
										Transform your business with expert consultancy services our
										team of seasoned consultants unparalleled.
									</p>
								</div>
								<div className="btn-area wow fadeInUp" data-wow-delay="0.3s">
									<ButtonPrimary
										text={"Free consultation"}
										url={"/contact"}
										className={"hero-button"}
									/>
									<div className="client-experience">
										<ul className="images-thumb">
											<li className="wow fadeInLeft" data-wow-delay="0.3s">
												<Image
													src="/images/about/thumb-1.png"
													alt="Images"
													width={109}
													height={108}
												/>
											</li>
											<li className="wow fadeInLeft" data-wow-delay="0.4s">
												<Image
													src="/images/about/thumb-2.png"
													alt="Images"
													width={109}
													height={108}
												/>
											</li>
											<li className="wow fadeInLeft" data-wow-delay="0.5s">
												<Image
													src="/images/about/thumb-3.png"
													alt="Images"
													width={109}
													height={108}
												/>
											</li>
											<li className="wow fadeInLeft" data-wow-delay="0.6s">
												<Image
													src="/images/about/thumb-4.png"
													alt="Images"
													width={109}
													height={108}
												/>
											</li>
										</ul>
									</div>
								</div>
								<span className="shape-1 zoominout">
									<Image
										src="/images/shapes/h4-hero-shape-2.svg"
										alt="Shapes"
										width={27}
										height={32}
										style={{ height: "auto" }}
									/>
								</span>
							</div>
							<div
								className="hero-funfact d-lg-flex d-none"
								style={{
									backgroundImage: "url('/images/hero/h4-hero-2.webp')",
								}}
							>
								<div className="counter-item">
									<FunfactSingle currentValue={8} symbol={".5x"} />

									<span className="sub-title">Faster growth</span>
								</div>
								<div className="counter-item">
									<FunfactSingle currentValue={20} symbol={"M"} />
									<span className="sub-title">Reach worldwide</span>
								</div>
								<div className="circle-wrap-item">
									<div className="circle-wrap">
										<Image
											className="rotate-image"
											src="/images/shapes/h4-circle.webp"
											alt="image"
											width={127}
											height={129}
											style={{ height: "auto" }}
										/>
										<Link className="circle" href="/about">
											<i className="tji-arrow-right"></i>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div
							className="hero-images-box-three wow fadeInRight"
							data-wow-delay="0.3s"
						>
							<Image
								src="/images/hero/h4-hero.webp"
								alt="Images"
								width={592}
								height={700}
								style={{ height: "auto" }}
							/>
						</div>
						<div
							className="hero-funfact d-lg-none"
							style={{
								backgroundImage: "url('/images/hero/h4-hero-2.webp')",
							}}
						>
							<div className="counter-item">
								<FunfactSingle currentValue={8} symbol={".5x"} />
								<span className="sub-title">Faster growth</span>
							</div>
							<div className="counter-item">
								<FunfactSingle currentValue={20} symbol={"M"} />
								<span className="sub-title">Reach worldwide</span>
							</div>
							<div className="circle-wrap-item">
								<div className="circle-wrap">
									<Image
										className="rotate-image"
										src="/images/shapes/h4-circle.webp"
										alt="image"
										width={127}
										height={129}
										style={{ height: "auto" }}
									/>
									<Link className="circle" href="/about">
										<i className="tji-arrow-right"></i>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className="hero-three-bg"
				style={{
					backgroundImage: "url('/images/hero/h4-hero-bg.webp')",
				}}
			></div>
			<div className="hero-shape move-anim">
				<Image
					src="/images/shapes/h4-hero-shape-1.svg"
					alt="Shapes"
					width={180}
					height={180}
					style={{ height: "auto" }}
				/>
			</div>
		</section>
	);
};

export default Hero4;
