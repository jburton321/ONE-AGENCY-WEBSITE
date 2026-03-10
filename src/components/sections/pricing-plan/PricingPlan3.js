"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import Link from "next/link";
import { useState } from "react";

const PricingPlan3 = () => {
	const [isYearlyPlan, setIsYearlyPlan] = useState(false);
	return (
		<section className="h8-price-section section-space">
			<BootstrapWrapper>
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="h8-price-header">
								<div className="sec-heading">
									<span
										className="sub-title wow fadeInUp"
										data-wow-delay="0.2s"
									>
										PRICING PLAN
									</span>
									<h2 className="sec-title text-anim">
										Flexible pricing, powerful tangible results
									</h2>
								</div>

								<div className="pricing-tab wow fadeInUp" data-wow-delay="0.4s">
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

							<div className="h8-price-wrapper d-none d-lg-flex">
								<div
									className="price_tabs flex-column nav-pills wow fadeInLeft"
									data-wow-delay="0.3s"
									role="tablist"
									aria-orientation="vertical"
								>
									<div
										className="tab_item active"
										data-bs-toggle="pill"
										data-bs-target="#priceTab-1"
										role="tab"
										aria-selected="true"
									>
										<span className="checkbox"></span>

										<div className="content">
											<h4 className="title">
												Basic <span>Save 20%</span>
											</h4>
											<div className="desc">Perfect for a small teams</div>
										</div>
										<div className="price">
											<span className="dollar">$</span>
											<span className="price-number">
												{isYearlyPlan ? 80 : 20}
											</span>
											<span className="period">
												/{isYearlyPlan ? "year" : "month"}
											</span>
										</div>
									</div>

									<div
										className="tab_item"
										data-bs-toggle="pill"
										data-bs-target="#priceTab-2"
										role="tab"
										aria-selected="false"
									>
										<span className="checkbox"></span>

										<div className="content">
											<h4 className="title">
												Business <span>Save 20%</span>
											</h4>
											<div className="desc">Perfect for a medium teams</div>
										</div>
										<div className="price">
											<span className="dollar">$</span>
											<span
												className="price-number"
												data-year-price="100"
												data-month-price="40"
											>
												{isYearlyPlan ? 100 : 40}
											</span>
											<span className="period">
												/{isYearlyPlan ? "year" : "month"}
											</span>
										</div>
									</div>

									<div
										className="tab_item"
										data-bs-toggle="pill"
										data-bs-target="#priceTab-3"
										role="tab"
										aria-selected="false"
									>
										<span className="checkbox"></span>

										<div className="content">
											<h4 className="title">
												Enterprise <span>Save 20%</span>
											</h4>
											<div className="desc">Perfect for a large teams</div>
										</div>
										<div className="price">
											<span className="dollar">$</span>
											<span className="price-number">
												{isYearlyPlan ? 120 : 80}
											</span>
											<span className="period">
												/{isYearlyPlan ? "year" : "month"}
											</span>
										</div>
									</div>
								</div>

								<div
									className="price_tab_contents tab-content wow fadeInRight"
									data-wow-delay="0.4s"
								>
									<div
										className="tab_content tab-pane show active"
										id="priceTab-1"
										role="tabpanel"
									>
										<div className="pricing-badge">Recommended</div>

										<ul className="features">
											<li className="active">
												<i className="tji-double-check"></i> Our in-depth
												consultation is more than just a conversation
											</li>
											<li className="active">
												<i className="tji-double-check"></i> Standard business
												performance package
											</li>
											<li className="active">
												<i className="tji-double-check"></i> Quick email support
												with priority access to our performance team
											</li>
											<li className="active">
												<i className="tji-double-check"></i> Monthly strategic
												check-In & progress review
											</li>
											<li className="active">
												<i className="tji-double-check"></i> Progress reviews &
												performance optimization
											</li>
											<li>
												<i className="tji-double-check"></i> Quick email support
												with priority access to our performance team
											</li>
											<li>
												<i className="tji-double-check"></i> 24/7 dedicated
												business support
											</li>
										</ul>

										<div className="buttons">
											<ButtonPrimary text={"Choose package"} url={"/contact"} />
											<Link className=" text-btn" href="/pricing-plan">
												Price comparison <i className="tji-angle-right"></i>
											</Link>
										</div>
									</div>

									<div
										className="tab_content tab-pane "
										id="priceTab-2"
										role="tabpanel"
									>
										<div className="pricing-badge">Recommended</div>

										<ul className="features">
											<li className="active">
												<i className="tji-double-check"></i> Our in-depth
												consultation is more than just a conversation
											</li>
											<li className="active">
												<i className="tji-double-check"></i> Standard business
												performance package
											</li>
											<li className="active">
												<i className="tji-double-check"></i> Quick email support
												with priority access to our performance team
											</li>
											<li className="active">
												<i className="tji-double-check"></i> Monthly strategic
												check-In & progress review
											</li>
											<li className="active">
												<i className="tji-double-check"></i> Progress reviews &
												performance optimization
											</li>
											<li className="active">
												<i className="tji-double-check"></i> Quick email support
												with priority access to our performance team
											</li>
											<li>
												<i className="tji-double-check"></i> 24/7 dedicated
												business support
											</li>
										</ul>

										<div className="buttons">
											<ButtonPrimary text={"Choose package"} url={"/contact"} />

											<Link className=" text-btn" href="/pricing-plan">
												Price comparison <i className="tji-angle-right"></i>
											</Link>
										</div>
									</div>

									<div
										className="tab_content tab-pane "
										id="priceTab-3"
										role="tabpanel"
									>
										<div className="pricing-badge">Recommended</div>

										<ul className="features">
											<li className="active">
												<i className="tji-double-check"></i> Our in-depth
												consultation is more than just a conversation
											</li>
											<li className="active">
												<i className="tji-double-check"></i> Standard business
												performance package
											</li>
											<li className="active">
												<i className="tji-double-check"></i> Quick email support
												with priority access to our performance team
											</li>
											<li className="active">
												<i className="tji-double-check"></i> Monthly strategic
												check-In & progress review
											</li>
											<li className="active">
												<i className="tji-double-check"></i> Progress reviews &
												performance optimization
											</li>
											<li className="active">
												<i className="tji-double-check"></i> Quick email support
												with priority access to our performance team
											</li>
											<li className="active">
												<i className="tji-double-check"></i> 24/7 dedicated
												business support
											</li>
										</ul>

										<div className="buttons">
											<ButtonPrimary text={"Choose package"} url={"/contact"} />

											<Link className=" text-btn" href="/pricing-plan">
												Price comparison <i className="tji-angle-right"></i>
											</Link>
										</div>
									</div>
								</div>
							</div>

							<div
								className="h8-price-mobile-wrapper d-lg-none"
								id="pricingAccordion"
							>
								<div className="pricing_a_item">
									<div
										className="tab_item"
										data-bs-toggle="collapse"
										data-bs-target="#priceA-1"
										aria-expanded="true"
										role="tablist"
									>
										<div className="check_wrap">
											<span className="checkbox"></span>
										</div>

										<div className="content">
											<h4 className="title">
												Basic <span>Save 20%</span>
											</h4>
											<div className="desc">Perfect for a small teams</div>
										</div>
										<div className="price">
											<div>
												<span className="dollar">$</span>
												<span className="price-number">
													{isYearlyPlan ? 80 : 20}
												</span>
											</div>
											<span className="period">
												/{isYearlyPlan ? "year" : "month"}
											</span>
										</div>
									</div>

									<div
										id="priceA-1"
										className="pricing_a_content collapse show"
										data-bs-parent="#pricingAccordion"
									>
										<div className="tab_content accordion-body">
											<div className="pricing-badge">Recommended</div>

											<ul className="features">
												<li className="active">
													<i className="tji-double-check"></i> Our in-depth
													consultation is more than just a conversation
												</li>
												<li className="active">
													<i className="tji-double-check"></i> Standard business
													performance package
												</li>
												<li className="active">
													<i className="tji-double-check"></i> Quick email
													support with priority access to our performance team
												</li>
												<li className="active">
													<i className="tji-double-check"></i> Monthly strategic
													check-In & progress review
												</li>
												<li className="active">
													<i className="tji-double-check"></i> Progress reviews
													& performance optimization
												</li>
												<li className="active">
													<i className="tji-double-check"></i> Quick email
													support with priority access to our performance team
												</li>
												<li>
													<i className="tji-double-check"></i> 24/7 dedicated
													business support
												</li>
											</ul>

											<div className="buttons">
												<ButtonPrimary
													text={"Choose package"}
													url={"/contact"}
												/>

												<Link className=" text-btn" href="/pricing-plan">
													Price comparison <i className="tji-angle-right"></i>
												</Link>
											</div>
										</div>
									</div>
								</div>

								<div className="pricing_a_item">
									<div
										className="tab_item collapsed"
										data-bs-toggle="collapse"
										data-bs-target="#priceA-2"
										aria-expanded="false"
										role="tablist"
									>
										<div className="check_wrap">
											<span className="checkbox"></span>
										</div>

										<div className="content">
											<h4 className="title">
												Business <span>Save 20%</span>
											</h4>
											<div className="desc">Perfect for a medium teams</div>
										</div>
										<div className="price">
											<div>
												<span className="dollar">$</span>
												<span className="price-number">
													{isYearlyPlan ? 100 : 40}
												</span>
											</div>
											<span className="period">
												/{isYearlyPlan ? "year" : "month"}
											</span>
										</div>
									</div>

									<div
										id="priceA-2"
										className="pricing_a_content collapse"
										data-bs-parent="#pricingAccordion"
									>
										<div className="tab_content accordion-body">
											<div className="pricing-badge">Recommended</div>

											<ul className="features">
												<li className="active">
													<i className="tji-double-check"></i> Our in-depth
													consultation is more than just a conversation
												</li>
												<li className="active">
													<i className="tji-double-check"></i> Standard business
													performance package
												</li>
												<li className="active">
													<i className="tji-double-check"></i> Quick email
													support with priority access to our performance team
												</li>
												<li className="active">
													<i className="tji-double-check"></i> Monthly strategic
													check-In & progress review
												</li>
												<li className="active">
													<i className="tji-double-check"></i> Progress reviews
													& performance optimization
												</li>
												<li className="active">
													<i className="tji-double-check"></i> Quick email
													support with priority access to our performance team
												</li>
												<li>
													<i className="tji-double-check"></i> 24/7 dedicated
													business support
												</li>
											</ul>

											<div className="buttons">
												<ButtonPrimary
													text={"Choose package"}
													url={"/contact"}
												/>

												<Link className=" text-btn" href="/pricing-plan">
													Price comparison <i className="tji-angle-right"></i>
												</Link>
											</div>
										</div>
									</div>
								</div>

								<div className="pricing_a_item">
									<div
										className="tab_item collapsed"
										data-bs-toggle="collapse"
										data-bs-target="#priceA-3"
										aria-expanded="false"
										role="tablist"
									>
										<div className="check_wrap">
											<span className="checkbox"></span>
										</div>

										<div className="content">
											<h4 className="title">
												Enterprise <span>Save 20%</span>
											</h4>
											<div className="desc">Perfect for a large teams</div>
										</div>
										<div className="price">
											<div>
												<span className="dollar">$</span>
												<span className="price-number">
													{isYearlyPlan ? 120 : 80}
												</span>
											</div>
											<span className="period">
												/{isYearlyPlan ? "year" : "month"}
											</span>
										</div>
									</div>

									<div
										id="priceA-3"
										className="pricing_a_content collapse"
										data-bs-parent="#pricingAccordion"
									>
										<div className="tab_content accordion-body">
											<div className="pricing-badge">Recommended</div>

											<ul className="features">
												<li className="active">
													<i className="tji-double-check"></i> Our in-depth
													consultation is more than just a conversation
												</li>
												<li className="active">
													<i className="tji-double-check"></i> Standard business
													performance package
												</li>
												<li className="active">
													<i className="tji-double-check"></i> Quick email
													support with priority access to our performance team
												</li>
												<li className="active">
													<i className="tji-double-check"></i> Monthly strategic
													check-In & progress review
												</li>
												<li className="active">
													<i className="tji-double-check"></i> Progress reviews
													& performance optimization
												</li>
												<li className="active">
													<i className="tji-double-check"></i> Quick email
													support with priority access to our performance team
												</li>
												<li>
													<i className="tji-double-check"></i> 24/7 dedicated
													business support
												</li>
											</ul>

											<div className="buttons">
												<ButtonPrimary
													text={"Choose package"}
													url={"/contact"}
												/>

												<Link className=" text-btn" href="/pricing-plan">
													Price comparison <i className="tji-angle-right"></i>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</BootstrapWrapper>
		</section>
	);
};

export default PricingPlan3;
