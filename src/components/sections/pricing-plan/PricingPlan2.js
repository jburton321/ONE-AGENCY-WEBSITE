"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import { useState } from "react";

const PricingPlan2 = () => {
	const [isYearlyPlan, setIsYearlyPlan] = useState(false);
	return (
		<div className="h5-price-section section-space">
			<div className="container">
				<div className="row rg-50">
					<div className="col-xl-5 col-lg-5">
						<div className="pricing-left-content tj-sticky-top">
							<div className="sec-heading style-4 mb-0">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.2s">
									PRICING PLAN
								</span>
								<h2 className="sec-title text-anim">
									Flexible pricing, powerful tangible results
								</h2>
								<div className="desc wow fadeInUp" data-wow-delay="0.4s">
									<p>
										In today's dynamic business environment, the key to success
										strategics..
									</p>
								</div>
							</div>
							<div
								className="pricing-tab mt-30 mb-0 wow fadeInUp"
								data-wow-delay="0.6s"
							>
								<ul>
									<li>
										<button
											className={`nav-link monthly ${
												isYearlyPlan ? "" : "active"
											}`}
											onClick={() => setIsYearlyPlan(false)}
										>
											monthly
										</button>
									</li>
									<li>
										<button
											className={`nav-link yearly ${
												isYearlyPlan ? "active" : ""
											}`}
											onClick={() => setIsYearlyPlan(true)}
										>
											yearly
										</button>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-xl-7 col-lg-7">
						<div className="h5-price">
							<div className="pricing-card wow fadeInUp" data-wow-delay="0.2s">
								<div className="pricing-left">
									<h6 className="title">Basic</h6>
									<div className="price">
										<span className="dollar">$</span>
										<span className="price-number">
											{isYearlyPlan ? 79 : 39}
										</span>
										<span className="period">
											/{isYearlyPlan ? "year" : "month"}
										</span>
									</div>
									<p className="offer">
										Save <strong>20% offer</strong> on performance marketing for
										our <strong>93K clients</strong> worldwide.
									</p>
									<ButtonPrimary text={"Choose package"} url={"/contact"} />
								</div>
								<div className="pricing-right">
									<h4>Includes</h4>
									<ul className="features">
										<li className="active">
											<i className="tji-double-check"></i> In-Depth consultation
										</li>
										<li className="active">
											<i className="tji-double-check"></i> Standard business
										</li>
										<li className="active">
											<i className="tji-double-check"></i> Quick email support
										</li>
										<li className="active">
											<i className="tji-double-check"></i> Monthly check-In
										</li>
										<li className="active">
											<i className="tji-double-check"></i> Progress reviews
										</li>
										<li>
											<i className="tji-double-check"></i> Flexible support
										</li>
										<li>
											<i className="tji-double-check"></i> 24/7 support
										</li>
									</ul>
								</div>
							</div>
							<div
								className="pricing-card active wow fadeInUp"
								data-wow-delay="0.4s"
							>
								<div className="pricing-badge">Recommended</div>
								<div className="pricing-left">
									<h6 className="title">Business</h6>
									<div className="price">
										<span className="dollar">$</span>
										<span className="price-number">
											{isYearlyPlan ? 150 : 90}
										</span>
										<span
											className="period"
											data-year-period="/year"
											data-month-period="/month"
										>
											/{isYearlyPlan ? "year" : "month"}
										</span>
									</div>
									<p className="offer">
										Save <strong>20% offer</strong> on performance marketing for
										our <strong>93K clients</strong> worldwide.
									</p>
									<ButtonPrimary text={"Choose package"} url={"/contact"} />
								</div>
								<div className="pricing-right">
									<h4>Includes</h4>
									<ul className="features">
										<li className="active">
											<i className="tji-double-check"></i> In-Depth consultation
										</li>
										<li className="active">
											<i className="tji-double-check"></i> Standard business
										</li>
										<li className="active">
											<i className="tji-double-check"></i> Quick email support
										</li>
										<li className="active">
											<i className="tji-double-check"></i> Monthly check-In
										</li>
										<li className="active">
											<i className="tji-double-check"></i> Progress reviews
										</li>
										<li className="active">
											<i className="tji-double-check"></i> Flexible support
										</li>
										<li>
											<i className="tji-double-check"></i> 24/7 support
										</li>
									</ul>
								</div>
							</div>
							<div className="pricing-card wow fadeInUp" data-wow-delay="0.6s">
								<div className="pricing-left">
									<h6 className="title">Enterprise</h6>
									<div className="price">
										<span className="dollar">$</span>
										<span className="price-number">
											{isYearlyPlan ? 230 : 150}
										</span>
										<span className="period">
											/{isYearlyPlan ? "year" : "month"}
										</span>
									</div>
									<p className="offer">
										Save <strong>20% offer</strong> on performance marketing for
										our <strong>93K clients</strong> worldwide.
									</p>
									<ButtonPrimary text={"Choose package"} url={"/contact"} />
								</div>
								<div className="pricing-right">
									<h4>Includes</h4>
									<ul className="features">
										<li className="active">
											<i className="tji-double-check"></i> In-Depth consultation
										</li>
										<li className="active">
											<i className="tji-double-check"></i> Standard business
										</li>
										<li className="active">
											<i className="tji-double-check"></i> Quick email support
										</li>
										<li className="active">
											<i className="tji-double-check"></i> Monthly check-In
										</li>
										<li className="active">
											<i className="tji-double-check"></i> Progress reviews
										</li>
										<li className="active">
											<i className="tji-double-check"></i> Flexible support
										</li>
										<li className="active">
											<i className="tji-double-check"></i> 24/7 support
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PricingPlan2;
