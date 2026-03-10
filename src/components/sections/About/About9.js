import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";

const About9 = () => {
	return (
		<section className="tj-about-section-five h9-about">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="about-wrapper-four h9-about-wrapper">
							<div
								className="about-images-group-three hover:shine wow fadeInUp"
								data-wow-delay="0.3s"
							>
								<img src="/images/about/h9-about-banner.webp" alt="Images" />
							</div>
							<div className="about-content-five h9-about-content">
								<div className="sec-heading h9-section-heading style-4">
									<span
										className="sub-title wow fadeInUp"
										data-wow-delay="0.3s"
									>
										[ TRANSFORMATIVE SOLUTION ]
									</span>
									<h2 className="sec-title text-anim">
										Building new businesses through our strategic
									</h2>
								</div>
								<div className="desc wow fadeInUp" data-wow-delay="0.4s">
									<p>
										Our mission is to empowers businesses off our all size
										thrives an businesses changing marketplaces. In today
										dynamics business environment, the key to the success lies
										Our mission is to empower our mission
									</p>
								</div>

								<div
									className="h9-about-list wow fadeInUp"
									data-wow-delay="0.5s"
								>
									<div className="h9-about-list-item">
										<h5 className="h9-about-list-title">
											Efficient operations
										</h5>
										<p className="h9-about-list-desc">
											Our consultancy specializes in optimizing operational
										</p>
									</div>
									<div className="h9-about-list-item">
										<h5 className="h9-about-list-title">Strategic planning</h5>
										<p className="h9-about-list-desc">
											Our consultancy specializes in optimizing operational
										</p>
									</div>
								</div>
								<div className="btn-area wow fadeInUp" data-wow-delay="0.6s">
									<ButtonPrimary text="Know more us" href="/contact" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-12">
						<div className="h9-about-bottom">
							<div className="h9-about-bottom-left ">
								<div className="h9-counter-wrapper">
									<div className="h9-counter-item">
										<FunfactSingle currentValue={93} symbol={"%"} />

										<span className="sub-title">
											Completed project growth and innovation
										</span>
									</div>
									<div className="h9-counter-item">
										<FunfactSingle currentValue={100} isSup={"+"} />
										<span className="sub-title">
											Awards archived, shaping future success
										</span>
									</div>
									<div className="h9-counter-item">
										<FunfactSingle currentValue={20} symbol={"M"} />
										<span className="sub-title">
											Awards archived, shaping future success
										</span>
									</div>
								</div>
							</div>
							<div
								className="about-statistics h9-about-statistics wow fadeInUp"
								data-wow-delay=".9s"
							>
								<img src="/images/about/h9-funfact-banner.webp" alt="Images" />
								<div className="about-circle h7-process-circle h9-about-circle">
									<div className="circle-wrap">
										<img
											className="rotate-image"
											src="/images/shapes/h9-about-circle.png"
											alt="image"
										/>
										<span className="logo-icon">
											<img src="/images/icons/logo-icon.svg" alt="" />
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About9;
