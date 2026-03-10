import Accordion from "@/components/shared/accordion/Accordion";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
const Process2 = () => {
	const process = [
		{
			id: 1,
			title: "Understand business",
			desc: "Our consultancy excels in providing quick solutions tailored to your business challenges",
		},
		{
			id: 1,
			title: "Custom strategy",
			desc: "Our consultancy excels in providing quick solutions tailored to your business challenges",
		},
		{
			id: 1,
			title: "Execute & optimize",
			desc: "Our consultancy excels in providing quick solutions tailored to your business challenges",
		},
	];

	return (
		<section className="h6-insight-section section-space">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="sec-heading style-2 ">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								// FROM INSIGHT TO IMPACT
							</span>
							<h2 className="sec-title text-anim">
								Three steps to business transformation
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
										<span className="title">Quick solutions</span>
									</button>
									<div
										id="collapseOne"
										className="accordion_desc collapse show"
										data-bs-parent="#insightAccordion"
									>
										<div className="accordion-body">
											Our consultant specialize in delivering rapid, actionable
											solutions that address your most pressing business on
											challenges. Whether you are facing operational
											inefficiencies, stalled growth.
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
										<span className="title">Strategic planning</span>
									</button>
									<div
										id="collapseTwo"
										className="accordion_desc collapse"
										data-bs-parent="#insightAccordion"
									>
										<div className="accordion-body">
											Our consultant specialize in delivering rapid, actionable
											solutions that address your most pressing business on
											challenges. Whether you are facing operational
											inefficiencies, stalled growth.
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
										<span className="title">Scalable growth</span>
									</button>
									<div
										id="collapseThree"
										className="accordion_desc collapse"
										data-bs-parent="#insightAccordion"
									>
										<div className="accordion-body">
											Our consultant specialize in delivering rapid, actionable
											solutions that address your most pressing business on
											challenges. Whether you are facing operational
											inefficiencies, stalled growth.
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
									From strategy to scalable business success
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
