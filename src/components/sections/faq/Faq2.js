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
												<span>01.</span> How do consultants add value to a
												business?
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
													You might need a consultant if you're facing specifics
													challenges, such as stagnating our growth, operational
													inefficiencies, strategic issues, or if you lack
													expertise in certain areas. Consultants can also help
													if you need an objective perspective on your business
													businesses ever changing marketplace. We are committed
													to the delivering exceptional the value through
													strategic.
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
												<span>02.</span> How do I know if my business needs a
												consultant?
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
													You might need a consultant if you're facing specifics
													challenges, such as stagnating our growth, operational
													inefficiencies, strategic issues, or if you lack
													expertise in certain areas. Consultants can also help
													if you need an objective perspective on your business
													businesses ever changing marketplace. We are committed
													to the delivering exceptional the value through
													strategic.
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
												<span>03.</span> How do business consultants charge for
												their services?
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
													You might need a consultant if you're facing specifics
													challenges, such as stagnating our growth, operational
													inefficiencies, strategic issues, or if you lack
													expertise in certain areas. Consultants can also help
													if you need an objective perspective on your business
													businesses ever changing marketplace. We are committed
													to the delivering exceptional the value through
													strategic.
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
												<span>04.</span> Can a business consultant guarantee
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
													You might need a consultant if you're facing specifics
													challenges, such as stagnating our growth, operational
													inefficiencies, strategic issues, or if you lack
													expertise in certain areas. Consultants can also help
													if you need an objective perspective on your business
													businesses ever changing marketplace. We are committed
													to the delivering exceptional the value through
													strategic.
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
												<span>05.</span> How can I measure the success of a
												consulting engagement?
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
													You might need a consultant if you're facing specifics
													challenges, such as stagnating our growth, operational
													inefficiencies, strategic issues, or if you lack
													expertise in certain areas. Consultants can also help
													if you need an objective perspective on your business
													businesses ever changing marketplace. We are committed
													to the delivering exceptional the value through
													strategic.
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
									Questions and answers...
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
