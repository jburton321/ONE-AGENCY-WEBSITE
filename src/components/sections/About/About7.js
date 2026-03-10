import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import Image from "next/image";

const About7 = () => {
	return (
		<section className="tj-about-section-five h7-about-section section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="about-wrapper-four">
							<div
								className="about-images-group-three hover:shine wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<Image
									src="/images/about/h7-about-1.webp"
									alt="Images"
									width={645}
									height={639}
									style={{ height: "auto" }}
								/>
							</div>
							<div className="about-content-five">
								<div className="sec-heading h7-section-heading style-4">
									<span
										className="sub-title wow fadeInUp"
										data-wow-delay="0.3s"
									>
										ABOUT OUR COMPANY
									</span>
									<h2 className="sec-title text-anim">
										Building new businesses through our strategic & expert
										guidance
									</h2>
								</div>
								<div className="desc wow fadeInUp" data-wow-delay="0.7s">
									<p>
										Our mission is to empowers businesses off our all size
										thrives an businesses changing marketplaces. In today
										dynamics business environment, the key to the success lies
										Our mission is to empower
									</p>
								</div>
								<div className="about-float-area">
									<div
										className="about-float-area-left wow fadeInUp"
										data-wow-delay="0.4s"
									>
										<div className="check-list-one ">
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
											<div className="vr-line"></div>
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
										<div
											className="btn-area wow fadeInUp"
											data-wow-delay="0.5s"
										>
											<ButtonPrimary text={"Know more"} url={"/about"} />
											<div className="client-experience">
												<ul className="images-thumb">
													<li className="wow fadeInLeft" data-wow-delay="0.6s">
														<img src="/images/about/thumb-1.png" alt="Images" />
													</li>
													<li className="wow fadeInLeft" data-wow-delay="0.7s">
														<img src="/images/about/thumb-2.png" alt="Images" />
													</li>
													<li className="wow fadeInLeft" data-wow-delay="0.8s">
														<img src="/images/about/thumb-3.png" alt="Images" />
													</li>
													<li
														className="plus wow fadeInLeft"
														data-wow-delay="0.9s"
													>
														<i className="fa-sharp fa-solid fa-plus"></i>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="about-statistics hover:shine ">
										<Image
											className="wow fadeInUp"
											data-wow-delay=".9s"
											src="/images/about/h7-about-2.webp"
											alt="Images"
											width={332}
											height={283}
										/>
										<div className="about-funfact">
											<div className="funfact-wrapper">
												<div className="counter-item">
													<FunfactSingle currentValue={8} symbol={".5x"} />
													<span className="sub-title">Faster growth</span>
												</div>
												<div>
													<img src="/images/icons/h7-line-chart.svg" alt="" />
												</div>
											</div>
										</div>
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

export default About7;
