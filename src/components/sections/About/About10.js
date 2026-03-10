import Accordion from "@/components/shared/accordion/Accordion";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import { aboutCopy } from "@/data/home-copy";
const copy = aboutCopy[10];

const About10 = () => {
	return (
		<section className="h10-about-section section-space">
			<div className="container">
				<div className="row align-items-xxl-center">
					<div className="col-lg-6 order-lg-1 order-2">
						<div className="overview-img wow fadeInUp" data-wow-delay="0.3s">
							<img src="/images/about/h10-about.webp" alt="" />
						</div>
					</div>
					<div className="col-lg-6 order-lg-2 order-1">
						<div className="h10-about-content-wrap">
							<div className="sec-heading style-2 ">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.2s">
									[ ONE AGENCY ]
								</span>
								<h2 className="sec-title text-anim">
									{copy.secTitle}
								</h2>
							</div>
							<Accordion>
								<div
									className="h6-insight_accordion h10-about-accordion wow fadeInUp"
									data-wow-delay="0.3s"
									id="about10Accordion"
								>
									<div className="accordion_item">
										<button
											className="accordion_title"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapseOne"
											aria-expanded="true"
										>
											<span className="subtitle">01.</span>
											<span className="title">
												Define goals & KPIs
											</span>
										</button>
										<div
											id="collapseOne"
											className="accordion_desc collapse show"
											data-bs-parent="#about10Accordion"
										>
											<div className="accordion-body">
												{copy.desc}
											</div>
										</div>
									</div>

									<div className="accordion_item">
										<button
											className="accordion_title collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapseTwo"
											aria-expanded="false"
										>
											<span className="subtitle">02.</span>
											<span className="title">
												Launch & optimize
											</span>
										</button>
										<div
											id="collapseTwo"
											className="accordion_desc collapse"
											data-bs-parent="#about10Accordion"
										>
											<div className="accordion-body">
												We launch campaigns and optimize with real-time data in myONE Dash. We work backwards from your objectives to deliver results.
											</div>
										</div>
									</div>

									<div className="accordion_item">
										<button
											className="accordion_title collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapseThree"
											aria-expanded="false"
										>
											<span className="subtitle">03.</span>
											<span className="title">
												Scale with confidence
											</span>
										</button>
										<div
											id="collapseThree"
											className="accordion_desc collapse"
											data-bs-parent="#about10Accordion"
										>
											<div className="accordion-body">
												We iterate for scale and deliver ongoing optimization. Transparent reporting so you see performance and can grow with ONE Agency.
											</div>
										</div>
									</div>
								</div>
							</Accordion>

							<div className="btn-area wow fadeInUp" data-wow-delay="0.5s">
								<ButtonPrimary text={copy.cta} url={"/about"} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About10;
