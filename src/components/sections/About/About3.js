import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Image from "next/image";
import Link from "next/link";

const About3 = () => {
	return (
		<section id="about" className="tj-about-section-three section-bottom-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="about-wrapper-two">
							<div
								className="about-images-group-two hover:shine wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<Image
									src="/images/about/h3-images-1.webp"
									alt="Images"
									width={564}
									height={651}
									style={{ height: "auto" }}
								/>
								<div className="about-video-box">
									<div className="video-box">
										<PopupVideo>
											<Link
												className="circle glightbox video-popup"
												href="https://www.youtube.com/watch?v=GGf1JjSAKP4"
											>
												<i className="fa-sharp fa-solid fa-play"></i>
											</Link>
										</PopupVideo>
									</div>
									<span className="sub-title">Click for watch</span>
									<h5 className="title">See our latest video</h5>
								</div>
							</div>
							<div className="about-content-three">
								<div className="sec-heading style-2">
									<span
										className="sub-title wow fadeInUp"
										data-wow-delay="0.3s"
									>
										Transformative solution
									</span>
									<h2 className="sec-title  text-anim">
										Get to know expertise's and commitment to your business
									</h2>
									<div className="desc wow fadeInUp" data-wow-delay="0.7s">
										<p>
											Our mission is to empoiwers businesses off our all size
											too thrive in an businesses ever changing marketplaces. In
											today's dynamicis business environment, the key to the
											success lies Our mission is to empower on businesses off
											al size to thrive business ever
										</p>
									</div>
									<div
										className="check-list-one wow fadeInUp"
										data-wow-delay="0.9s"
									>
										<ul>
											<li>
												<i className="tji-double-check"></i>Discover our
												expertise, mission, and values
											</li>
											<li>
												<i className="tji-double-check"></i>Journey and
												commitment to explained
											</li>
											<li>
												<i className="tji-double-check"></i>Meet our team and
												learn our visions
											</li>
										</ul>
									</div>
									<div
										className="about-button wow fadeInUp"
										data-wow-delay="0.9s"
									>
										<ButtonPrimary
											text={"Free consultation"}
											url={"/contact"}
										/>
									</div>
								</div>
								<div className="about-shapes zoominout">
									<Image
										src="/images/shapes/about-shapes.svg"
										alt="Shapes"
										width={28}
										height={33}
										style={{ height: "auto" }}
									/>
								</div>
							</div>
							<div
								className="about_images hover:shine wow fadeInUp"
								data-wow-delay="0.11s"
							>
								<Image
									src="/images/about/h3-images-2.webp"
									alt="Images"
									width={200}
									height={232}
									style={{ height: "auto" }}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About3;
