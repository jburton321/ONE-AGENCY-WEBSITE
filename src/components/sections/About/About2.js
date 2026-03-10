import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import Image from "next/image";
import { aboutCopy } from "@/data/home-copy";
const copy = aboutCopy[2];

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
										// {copy.subTitle}
									</span>
									<h2 className="sec-title text-anim">
										{copy.secTitle}
									</h2>
									<div className="desc wow fadeInUp" data-wow-delay="0.3s">
										<p>{copy.desc}</p>
									</div>
									<div
										className="about-feature-item wow fadeInUp"
										data-wow-delay="0.5s"
									>
										<div className="feature-box">
											<div className="feature-left">
												<div className="check-list-one">
													<ul>
														{copy.list.map((item, i) => (
															<li key={i}>
																<i className="tji-double-check"></i> {item}
															</li>
														))}
													</ul>
												</div>
												<div className="about-button">
													<ButtonPrimary
														text={copy.cta}
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
										Years more of digital performance and growth expertise we have.
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
