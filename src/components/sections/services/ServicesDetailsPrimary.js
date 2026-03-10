"use client";
import Accordion from "@/components/shared/accordion/Accordion";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Image from "next/image";
import Link from "next/link";
import CtaSidebar from "../cta/CtaSidebar";

const ServicesDetailsPrimary = ({ option }) => {
	const { currentItem, items, currentId } = option || {};
	const { title, titleLarge, id, iconName, img, desc1, desc2 } = currentItem || {};

	return (
		<section className="tj-service-area section-space">
			<div className="container">
				<div className="row rg-50">
					<div className="col-lg-8">
						<div className="tj-post-wrapper">
							<div className="tj-post-single-post mb-0">
								<div
									className="tj-post-thumb hover:shine wow fadeInUp"
									data-wow-delay="0.1s"
								>
									<Image
										src="/images/service/tj-service-1.webp"
										alt="post-image"
										width={870}
										height={498}
										style={{ height: "auto" }}
									/>
								</div>
								<h3 className="tj-post-title text-anim">{titleLarge}</h3>
								<div className="tj-entry-content">
									{desc1 && (
										<p className="wow fadeInUp" data-wow-delay="0.1s">
											{desc1}
										</p>
									)}
									{desc2 && (
										<p className="wow fadeInUp" data-wow-delay="0.3s">
											{desc2}
										</p>
									)}
									<div className="tj-check-list">
										<h4 className="text-anim">Service overview</h4>
										<p className="wow fadeInUp" data-wow-delay="0.1s">
											We work backwards from your objectives: define goals and KPIs, audit your data and creative, then launch and optimize campaigns with real-time reporting in myONE Dash. Client-partners get quick wins and long-term growth.
										</p>
									</div>
									<div
										className="service-check-list mt-4 wow fadeInUp"
										data-wow-delay="0.3s"
									>
										<ul>
											<li>
												<i className="tji-double-check"></i>
												<span>
													Proprietary tech stack and integrations for speed to market.
												</span>
											</li>
											<li>
												<i className="tji-double-check"></i>
												<span>
													Persuasive creative and messaging that converts.
												</span>
											</li>
											<li>
												<i className="tji-double-check"></i>
												<span>
													Actionable data and targeting for measurable results.
												</span>
											</li>
											<li>
												<i className="tji-double-check"></i>
												<span>
													Ongoing optimization and scale with transparent reporting.
												</span>
											</li>
										</ul>
									</div>
									<div className="service-images-wrap">
										<div className="row">
											<div className="col-sm-6">
												<div
													className="image-wrap hover:shine wow fadeInUp"
													data-wow-delay="0.5s"
												>
													<Image
														src="/images/service/tj-service-3.webp"
														alt="service-image"
														width={420}
														height={395}
														style={{ height: "auto" }}
													/>
												</div>
											</div>
											<div className="col-sm-6">
												<div
													className="image-wrap hover:shine wow fadeInUp"
													data-wow-delay="0.7s"
												>
													<Image
														src="/images/service/tj-service-4.webp"
														alt="service-image"
														width={420}
														height={395}
														style={{ height: "auto" }}
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="check-list mb-40">
										<h4 className="text-anim">Key features</h4>
										<p className="wow fadeInUp" data-wow-delay="0.1s">
											ONE Agency combines tech, creative and data so you get hyperscale digital growth. We integrate with your stack, run campaigns that convert, and report in real time so you see leads, CPL, CPA and creative performance at a glance.
										</p>
										<p className="wow fadeInUp" data-wow-delay="0.3s">
											Whether you need customer acquisition, performance creative, or full-funnel campaigns, we work as an extension of your team to hit goals and scale with confidence.
										</p>
									</div>
									<div className="row rg-30 justify-content-center">
										<div className="col-md-4 col-sm-6">
											<div
												className="tj-feature wow fadeInUp"
												data-wow-delay="0.5s"
											>
												<div className="tj-feature-icon">
													<i className="tji-quick"></i>
												</div>
												<h5 className="tj-feature-title">Speed to market</h5>
												<div className="desc">
													<p>
														Get campaigns live quickly with our tech stack and integrations; no long implementation cycles.
													</p>
												</div>
											</div>
										</div>
										<div className="col-md-4 col-sm-6">
											<div
												className="tj-feature wow fadeInUp"
												data-wow-delay="0.7s"
											>
												<div className="tj-feature-icon">
													<i className="tji-results"></i>
												</div>
												<h5 className="tj-feature-title">Proven results</h5>
												<div className="desc">
													<p>
														Data-driven optimization and creative that converts; we focus on CPL, CPA and qualified leads.
													</p>
												</div>
											</div>
										</div>
										<div className="col-md-4 col-sm-6">
											<div
												className="tj-feature wow fadeInUp"
												data-wow-delay="0.9s"
											>
												<div className="tj-feature-icon">
													<i className="tji-personalization"></i>
												</div>
												<h5 className="tj-feature-title">Transparent reporting</h5>
												<div className="desc">
													<p>
														Real-time visibility in myONE Dash so you see performance and can scale with confidence.
													</p>
												</div>
											</div>
										</div>
									</div>

									<div
										className="tj-post-thumb mt-30 mb-0 hover:shine wow fadeInUp"
										data-wow-delay="0.1s"
									>
										<Image
											src="/images/service/tj-service-2.webp"
											alt="post-image"
											width={870}
											height={498}
											style={{ height: "auto" }}
										/>
										<PopupVideo>
											<Link
												className="play-btn glightbox video-popup"
												href="https://www.youtube.com/watch?v=eEzD-Y97ges"
											>
												<i className="fa-sharp fa-solid fa-play"></i>
											</Link>
										</PopupVideo>
									</div>
									<h4 className="text-anim">General questions</h4>
									<Accordion>
										<div className="tj-faq mt-30">
											<div
												className="accordion tj-faq-style"
												id="accordionExample"
											>
												<div
													className="accordion-item wow fadeInUp"
													data-wow-delay="0.1s"
												>
													<h2 className="accordion-header active">
														<button
															className="accordion-button collapsed"
															data-bs-toggle="collapse"
															data-bs-target="#collapseOne-1"
															aria-expanded="false"
														>
															How does ONE Agency work with client-partners?
														</button>
													</h2>
													<div
														id="collapseOne-1"
														className="accordion-collapse collapse"
														data-bs-parent="#accordionExample"
													>
														<div className="accordion-body">
															<p>
																We work backwards from your goals: we define KPIs, audit your data and creative, then launch and optimize campaigns. You get real-time visibility in myONE Dash and ongoing optimization so you can scale with confidence.
															</p>
														</div>
													</div>
												</div>
												<div
													className="accordion-item wow fadeInUp"
													data-wow-delay="0.3s"
												>
													<h2 className="accordion-header ">
														<button
															className="accordion-button collapsed"
															data-bs-toggle="collapse"
															data-bs-target="#collapseOne-2"
															aria-expanded="false"
														>
															What results can I expect?
														</button>
													</h2>
													<div
														id="collapseOne-2"
														className="accordion-collapse collapse"
														data-bs-parent="#accordionExample"
													>
														<div className="accordion-body">
															<p>
																We focus on measurable outcomes: qualified leads, CPL, CPA, and creative performance. Results depend on your goals, budget and timeline; we’ll align on targets up front and report in real time so you see progress and ROI.
															</p>
														</div>
													</div>
												</div>
												<div
													className="accordion-item wow fadeInUp"
													data-wow-delay="0.5s"
												>
													<h2 className="accordion-header ">
														<button
															className="accordion-button collapsed"
															data-bs-toggle="collapse"
															data-bs-target="#collapseOne-3"
															aria-expanded="false"
														>
															Do you integrate with our existing tools?
														</button>
													</h2>
													<div
														id="collapseOne-3"
														className="accordion-collapse collapse"
														data-bs-parent="#accordionExample"
													>
														<div className="accordion-body">
															<p>
																Yes. Our tech stack and integrations are built to connect with your CRM, ad platforms and analytics so campaigns go live quickly. We’ll work with your team to ensure a smooth setup and ongoing sync.
															</p>
														</div>
													</div>
												</div>
												<div
													className="accordion-item wow fadeInUp"
													data-wow-delay="0.7s"
												>
													<h2 className="accordion-header ">
														<button
															className="accordion-button collapsed"
															data-bs-toggle="collapse"
															data-bs-target="#collapseOne-4"
															aria-expanded="false"
														>
															How do I get started?
														</button>
													</h2>
													<div
														id="collapseOne-4"
														className="accordion-collapse collapse"
														data-bs-parent="#accordionExample"
													>
														<div className="accordion-body">
															<p>
																Request a demo from our site or contact us. We’ll discuss your objectives, current setup and timeline, then outline a plan and next steps. No long sales cycle—we focus on getting you to value fast.
															</p>
														</div>
													</div>
												</div>
												<div
													className="accordion-item wow fadeInUp"
													data-wow-delay="0.9s"
												>
													<h2 className="accordion-header ">
														<button
															className="accordion-button collapsed"
															data-bs-toggle="collapse"
															data-bs-target="#collapseOne-5"
															aria-expanded="false"
														>
															Where is ONE Agency based?
														</button>
													</h2>
													<div
														id="collapseOne-5"
														className="accordion-collapse collapse"
														data-bs-parent="#accordionExample"
													>
														<div className="accordion-body">
															<p>
																ONE Agency is headquartered in Orlando. We work with client-partners across the US and beyond, with a focus on hyperscale digital growth through tech, creative and data.
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</Accordion>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<aside className="tj-service-sidebar">
							{/* <!-- Service List --> */}
							<div
								className="tj-sidebar-widget wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<h5 className="tj-sidebar-widget-title">Related services</h5>
								<div className="service-category">
									<ul>
										{items?.length
											? items?.map(({ title, id }, idx) => (
													<li key={idx}>
														<Link
															className={`${currentId === id ? "active" : ""}`}
															href={`/services/${id}`}
														>
															{title}
															<i className="tji-angle-right"></i>
														</Link>
													</li>
											  ))
											: ""}
									</ul>
								</div>
							</div>
							{/* <!-- cta --> */}
							<div
								className="tj-sidebar-widget wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<CtaSidebar />
							</div>
						</aside>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesDetailsPrimary;
