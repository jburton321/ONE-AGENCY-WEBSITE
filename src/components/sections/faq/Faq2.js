import Accordion from "@/components/shared/accordion/Accordion";

const Faq2 = () => {
	return (
		<section className="h7-faq section-space">
			<div className="container">
				<div className="row flex-column-reverse flex-lg-row">
					<div className="col-12  col-lg-8">
						<Accordion>
							<div className="tj-faq ">
								<div
									className="accordion tj-faq-style h7-faq-style"
									id="accordionExample"
								>
									<div
										className="accordion-item wow fadeInUp"
										data-wow-delay="0.1s"
									>
										<h2 className="accordion-header ">
											{/* <!-- button --> */}
											<button
												className="accordion-button collapsed"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne-1"
												aria-expanded="false"
											>
												<span>01.</span> How does ONE Agency add value to
												digital growth?
											</button>
										</h2>
										{/* <!-- content --> */}
										<div
											id="collapseOne-1"
											className="accordion-collapse collapse "
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<p>
													ONE Agency combines a proprietary tech stack,
													persuasive creative and actionable data analytics to
													hyperscale customer acquisition and performance. We
													help if you face stagnating growth, conversion
													bottlenecks or lack in-house expertise in paid media
													and MarTech. We deliver exceptional value through
													strategic, data-driven campaigns.
												</p>
											</div>
										</div>
									</div>
									<div
										className="accordion-item wow fadeInUp"
										data-wow-delay="0.3s"
									>
										<h2 className="accordion-header ">
											{/* <!-- button --> */}
											<button
												className="accordion-button "
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne-2"
												aria-expanded="false"
											>
												<span>02.</span> How do I know if I need a performance
												marketing partner?
											</button>
										</h2>
										{/* <!-- content --> */}
										<div
											id="collapseOne-2"
											className="accordion-collapse collapse show"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<p>
													You might need a partner if you're facing specific
													challenges: stagnating lead gen, low conversion rates,
													operational gaps in paid search or social, or lack of
													expertise in MarTech. ONE Agency can provide an
													objective perspective on your digital strategy and
													deliver exceptional value through our strategic approach.
												</p>
											</div>
										</div>
									</div>
									<div
										className="accordion-item wow fadeInUp"
										data-wow-delay="0.5s"
									>
										<h2 className="accordion-header ">
											{/* <!-- button --> */}
											<button
												className="accordion-button collapsed"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne-3"
												aria-expanded="false"
											>
												<span>03.</span> How does ONE Agency charge for
												its services?
											</button>
										</h2>
										{/* <!-- content --> */}
										<div
											id="collapseOne-3"
											className="accordion-collapse collapse"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<p>
													We offer flexible engagement models aligned to your
													goals: media spend under management, project-based
													creative and integration work, or retainer partnerships.
													We begin with an objective view of your performance and
													market to identify quick wins. Contact us for a
													discussion and Request Demo to see our approach.
												</p>
											</div>
										</div>
									</div>
									<div
										className="accordion-item wow fadeInUp"
										data-wow-delay="0.7s"
									>
										<h2 className="accordion-header ">
											{/* <!-- button --> */}
											<button
												className="accordion-button collapsed"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne-4"
												aria-expanded="false"
											>
												<span>04.</span> Can ONE Agency guarantee
												results?
											</button>
										</h2>
										{/* <!-- content --> */}
										<div
											id="collapseOne-4"
											className="accordion-collapse collapse"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<p>
													We focus on outcomes and work backwards from your
													objectives: qualified leads, conversions, and scalable
													growth. While no agency can guarantee specific results,
													we deliver a symphony of digital performance with
													real-time visibility in myONE Dash and proven methodology
													for customer acquisition and performance creative.
												</p>
											</div>
										</div>
									</div>
									<div
										className="accordion-item wow fadeInUp"
										data-wow-delay="0.9s"
									>
										<h2 className="accordion-header ">
											{/* <!-- button --> */}
											<button
												className="accordion-button collapsed"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne-5"
												aria-expanded="false"
											>
												<span>05.</span> How can I measure success of an
												engagement?
											</button>
										</h2>
										{/* <!-- content --> */}
										<div
											id="collapseOne-5"
											className="accordion-collapse collapse"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<p>
													We align to your KPIs: qualified leads generated, media
													spend under management, impressions delivered,
													e-commerce transactions and conversion rates. Real-time
													visibility into leads, CPL, CPA and creative performance
													is available in myONE Dash. We work with you to define
													clear, actionable metrics from day one.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Accordion>
					</div>
					<div className="col-12  col-lg-4">
						<div className="faq-banner">
							<img src="/images/faq/h7-faq-banner.png" alt="" />

							<div className="sec-heading h7-section-heading style-4">
								<h2 className="sec-title text-anim">
									Digital growth questions and answers.
								</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq2;
