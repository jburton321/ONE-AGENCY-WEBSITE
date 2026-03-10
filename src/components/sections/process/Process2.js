import Accordion from "@/components/shared/accordion/Accordion";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import { processCopy } from "@/data/home-copy";

const Process2 = () => {
	const copy = processCopy[2];
	const steps = copy.steps;

	return (
		<section className="h6-insight-section section-space">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="sec-heading style-2 ">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								// {copy.subTitle}
							</span>
							<h2 className="sec-title text-anim">
								{copy.secTitle}
							</h2>
						</div>

						<Accordion>
							<div
								className="h6-insight_accordion wow fadeInUp"
								data-wow-delay="0.3s"
								id="insightAccordion"
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
										<span className="title">{steps[0].title}</span>
									</button>
									<div
										id="collapseOne"
										className="accordion_desc collapse show"
										data-bs-parent="#insightAccordion"
									>
										<div className="accordion-body">
											{steps[0].desc}
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
										<span className="title">{steps[1].title}</span>
									</button>
									<div
										id="collapseTwo"
										className="accordion_desc collapse"
										data-bs-parent="#insightAccordion"
									>
										<div className="accordion-body">
											{steps[1].desc}
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
										<span className="title">{steps[2].title}</span>
									</button>
									<div
										id="collapseThree"
										className="accordion_desc collapse"
										data-bs-parent="#insightAccordion"
									>
										<div className="accordion-body">
											{steps[2].desc}
										</div>
									</div>
								</div>
							</div>
						</Accordion>
					</div>
					<div className="col-lg-6">
						<div
							className="h6-insight-chart wow fadeInUp"
							data-wow-delay="0.4s"
						>
							<div className="chart_content">
								<div className="title">
									From strategy to scalable growth with ONE Agency
								</div>
								<div className="counter">
									<FunfactSingle currentValue={8.2} />
									<span className="sufix">%</span>
									<span className="up">
										<i className="tji-arrow-up"></i>
									</span>
								</div>
								<div className="subtitle">CAGR achievement.</div>
							</div>

							<div className="chart_img">
								<img src="/images/insight/insight-chart.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Process2;
