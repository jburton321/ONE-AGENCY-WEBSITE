"use client";
import PricingPlanItems from "@/components/shared/pricing-plan/PricingPlanItems";
import { useState } from "react";

const PricingPlan4 = () => {
	const [isYearlyPlan, setIsYearlyPlan] = useState(false);
	return (
		<section className="tj-pricing-area section-space">
			<div className="container">
				<div className="pricing-top mb-50">
					<div className="row align-items-end justify-content-between">
						<div className="col-xl-5 col-lg-6">
							<div className="pricing-left-content">
								<div className="sec-heading mb-0">
									<span
										className="sub-title wow fadeInUp"
										data-wow-delay="0.1s"
									>
										PRICING PLAN
									</span>
									<h2 className="sec-title text-anim">Our Pricing Tiers</h2>
									<div className="desc wow fadeInUp" data-wow-delay="0.3s">
										<p>
											ONE Agency hyperscales digital growth for brands of all
											sizes. Delivering a symphony of digital performance.
										</p>
									</div>
								</div>
								<div
									className="pricing-tab mt-30 mb-0 d-lg-block d-none wow fadeInUp"
									data-wow-delay="0.5s"
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
						<div className="col-xl-5 col-lg-6">
							<div className="pricing-right-content">
								<div className="desc mb-30 wow fadeInUp" data-wow-delay="0.1s">
									<p>
										ONE Agency hyperscales digital growth through customer
										acquisition and performance creative. We are committed to
										delivering exceptional value through our strategic insight
										and innovative approaches.
									</p>
								</div>
								<div
									className="tj-check-list mt-0 wow fadeInUp"
									data-wow-delay="0.3s"
								>
									<ul className="p-0">
										<li>
											<i className="tji-double-check"></i> Discover our
											expertise
										</li>
										<li>
											<i className="tji-double-check"></i> Journey and
											commitment to explained
										</li>
										<li>
											<i className="tji-double-check"></i> Meet our team and
											learn
										</li>
									</ul>
								</div>
								<div
									className="pricing-tab mt-30 mb-0 d-lg-none wow fadeInUp"
									data-wow-delay="0.5s"
								>
									<ul>
										<li>
											<button className="nav-link monthly active">
												monthly
											</button>
										</li>
										<li>
											<button className="nav-link yearly">yearly</button>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row rg-30 justify-content-center">
					<PricingPlanItems isYearlyPlan={isYearlyPlan} />
				</div>
			</div>
		</section>
	);
};

export default PricingPlan4;
