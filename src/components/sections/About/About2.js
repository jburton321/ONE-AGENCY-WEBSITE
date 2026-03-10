import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import Image from "next/image";

const About2 = () => {
	return (
		<section className="tj-about-section-two section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="about-wrapper">
							<div className="about-images-group-one hover:shine wow fadeInUp">
								<Image
									src="/images/about/h2-about-1.webp"
									alt="Images"
									width={399}
									height={532}
									style={{ width: "100%", height: "auto" }}
								/>
								<div className="about-author">
									<div className="signature">
										<Image
											src="/images/about/signature.png"
											alt="Images"
											width={93}
											height={61}
											style={{ width: "auto", height: "auto" }}
										/>
									</div>
									<div className="author-name">
										<h5 className="title">Burdee Nicolas</h5>
										<span className="sub-title">Co. Founder</span>
									</div>
								</div>
							</div>
							<div className="about-content-two">
								<div className="sec-heading style-2">
									<span
										className="sub-title wow fadeInUp"
										data-wow-delay="0.1s"
									>
										// Number #1 solver agency
									</span>
									<h2 className="sec-title text-anim">
										Empowering your business vision
									</h2>
									<div className="desc wow fadeInUp" data-wow-delay="0.3s">
										<p>
											Our mission is to empower on businesses off all sizes to
											thrive business ever changes is marketplaces. We are all
											committee the delivering in exceptional value markets
											strategic innovative.
										</p>
									</div>
									<div
										className="about-feature-item wow fadeInUp"
										data-wow-delay="0.5s"
									>
										<div className="feature-box">
											<div className="feature-left">
												<div className="check-list-one">
													<ul>
														<li>
															<i className="tji-double-check"></i>Expertise and
															experience
														</li>
														<li>
															<i className="tji-double-check"></i>Client Centric
															approach
														</li>
														<li>
															<i className="tji-double-check"></i>Commitment
															excellences
														</li>
													</ul>
												</div>
												<div className="about-button">
													<ButtonPrimary
														text={"Free consultation"}
														url={"/about"}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="funfact-item-two">
								<div className="funfact-box">
									<FunfactSingle currentValue={20} symbol={"+"} />
									<span className="sub-title">
										Years more of business consulting experiences we have.
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About2;
