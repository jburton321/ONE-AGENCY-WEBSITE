import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Image from "next/image";
import Link from "next/link";

const About4 = () => {
	return (
		<section className="tj-about-section-four">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="about-wrapper-three">
							<div
								className="about-image-wrap hover:shine wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<Image
									src="/images/about/h4-about-1.webp"
									alt="Images"
									width={423}
									height={570}
									style={{ height: "auto" }}
								/>
								<div className="circle-wrap">
									<Image
										className="rotate-image"
										src="/images/shapes/h4-circle.webp"
										alt="image"
										width={127}
										height={129}
									/>
									<PopupVideo>
										<Link
											className="circle glightbox  video-popup"
											href="https://www.youtube.com/watch?v=GGf1JjSAKP4"
										>
											<span>
												<i className="tji-play"></i>
											</span>
										</Link>
									</PopupVideo>
								</div>
							</div>
							<div className="about-content-four">
								<div className="sec-heading style-3">
									<span
										className="sub-title wow fadeInUp"
										data-wow-delay="0.3s"
									>
										// OUR COMOPANY
									</span>
									<h2 className="sec-title text-anim">
										Crafting in success tailored solution on ultimate business
										challenges.
									</h2>
								</div>
								<div className="about-feature-item">
									<div className="feature-box">
										<div className="desc wow fadeInUp" data-wow-delay="0.7s">
											<p>
												Our mission is to empoiwers businesses off our all size
												too thrive in an businesses changing marketplaces. In
												toda dynamicis business environment, the key to the
												success lies Our mission is to empower.
											</p>
										</div>
										<div
											className="about-button wow fadeInUp"
											data-wow-delay="0.9s"
										>
											<ButtonPrimary text={"Read more"} url={"/contact"} />
										</div>
									</div>
									<div className="feature-box">
										<div
											className="about-author wow fadeInUp"
											data-wow-delay="0.9s"
										>
											<div className="author-name">
												<div className="author-img">
													<Image
														src="/images/about/h4-author.webp"
														alt=""
														width={58}
														height={58}
													/>
												</div>
												<h5 className="title">Burdee Nicolas</h5>
												<span className="sub-title">Co. Founder</span>
											</div>
											<div className="signature">
												<Image
													src="/images/about/signature-2.png"
													alt="Images"
													width={95}
													height={61}
													style={{ height: "auto" }}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								className="about_images hover:shine wow fadeInUp"
								data-wow-delay="0.11s"
							>
								<Image
									src="/images/about/h4-about-2.webp"
									alt="Images"
									width={305}
									height={374}
									style={{ height: "auto" }}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="about-shapes move-anim">
				<Image
					src="/images/shapes/h4-hero-shape-1.svg"
					alt="Shapes"
					width={180}
					height={180}
					style={{ height: "auto" }}
				/>
			</div>
		</section>
	);
};

export default About4;
