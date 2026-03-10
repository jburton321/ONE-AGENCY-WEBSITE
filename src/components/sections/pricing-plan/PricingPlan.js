"use client";
import PricingPlanItems from "@/components/shared/pricing-plan/PricingPlanItems";
import { useState } from "react";

const PricingPlan = () => {
	const [isYearlyPlan, setIsYearlyPlan] = useState(false);
	return (
		<section className="pricing__area section-space">
			<div className="container">
				<div className="row align-items-end">
					<div className="col-md-6">
						<div className="sec-heading style-2">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								PRICING PLAN
							</span>
							<h2 className="sec-title text-anim">Our Pricing Tiers</h2>
						</div>
					</div>
					<div className="col-md-6">
						<div
							className="pricing-tab text-md-end wow fadeInUp"
							data-wow-delay="0.3s"
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
				<div className="row rg-30 rightSwipeWrap">
					<PricingPlanItems isYearlyPlan={isYearlyPlan} />
				</div>
			</div>
		</section>
	);
};

export default PricingPlan;
