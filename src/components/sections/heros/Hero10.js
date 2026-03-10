"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import DoughnutChart from "@/components/shared/charts/DoughnutChart";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
const Hero10 = () => {
	const marqueeItems = [
		"Expertise",
		"Consulting",
		"Business",
		"Growth",
		"Expertise",
		"Consulting",
		"Business",
		"Growth",
		"Expertise",
		"Consulting",
		"Business",
		"Growth",
		"Expertise",
		"Consulting",
		"Business",
		"Growth",
	];
	return (
		<section className="h10-hero style-1">
			<div
				className="tj-slider-section h10-hero-inner"
				style={{ backgroundImage: "url('/images/hero/h10-hero-bg.webp')" }}
			>
				<div className="container">
					<div className="row">
						<div className="slider-wrapper h10-hero-wrapper">
							<div className="h10-hero-content">
								<h1 className="hero-title hero-text-anim">
									Expert business
									<span>consulting</span>
								</h1>
								<div className="desc  wow fadeInUp" data-wow-delay="1.2s">
									<p>
										Transform your business with expert consultancy services our
										team of seasoned consultants unparalleled.
									</p>
								</div>

								<div
									className="h10-hero-sroll-down wow fadeInDown"
									data-wow-delay="1.4s"
								>
									<div className="h10-hero-sroll-down-icon">
										<img src="/images/icons/down-arro.svg" alt="" />
									</div>
								</div>
								<div className="h10-hero-stat  d-xl-none">
									<div className="h10-hero-stat-inner">
										<div className="h10-hero-stat-chart">
											<DoughnutChart />
											<p className="h10-hero-stat-chart-text">Statics</p>
										</div>
										<div className="h10-hero-stat-counter">
											<div className="h10-hero-counter-item">
												<FunfactSingle currentValue={810} isSup={"+"} />
												<span className="sub-title">
													Helping ambitious our brand turn into a success
												</span>
											</div>
										</div>
									</div>
									<div className="h10-hero-stat-action">
										<ButtonPrimary
											text={"Get free consultation"}
											url={"/about"}
										/>
									</div>
								</div>
							</div>

							<div className="h10-hero-stat d-none d-xl-block ">
								<div className="h10-hero-stat-inner">
									<DoughnutChart />
									<div className="h10-hero-stat-counter">
										<div className="h10-hero-counter-item">
											<FunfactSingle currentValue={810} isSup={"+"} />
											<span className="sub-title">
												Helping ambitious our brand turn into a success
											</span>
										</div>
									</div>
								</div>

								<div className="h10-hero-stat-action">
									<ButtonPrimary
										text={"Get free consultation"}
										url={"/about"}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero10;
