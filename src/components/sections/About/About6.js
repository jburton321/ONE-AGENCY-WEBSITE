import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Link from "next/link";

const About6 = () => {
	return (
		<section className="h6-about-section section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="h6-about-content">
							<div className="sec-heading style-2">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
									// NUMBE #1 SOLVER
								</span>
								<h2 className="sec-title tj-text-invert">
									Expert on business transform dedicated to helping achieving
									long-term success and for sustainable growth with our business
									consulting.
								</h2>
							</div>
							<div
								className="about-btn-area wow fadeInUp"
								data-wow-delay="0.3s"
							>
								<ButtonPrimary text={"Know our mission"} url={"/about"} />
								<div className="client-experience">
									<ul className="images-thumb">
										<li>
											<img src="/images/about/thumb-1.png" alt="Images" />
										</li>
										<li>
											<img src="/images/about/thumb-2.png" alt="Images" />
										</li>
										<li>
											<img src="/images/about/thumb-3.png" alt="Images" />
										</li>
										<li className="plus">
											<i className="fa-sharp fa-solid fa-plus"></i>
										</li>
									</ul>
								</div>
							</div>
							<div className="shape move-anim">
								<img src="/images/shapes/h6-team-shape.svg" alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className="row flex-lg-row flex-column-reverse">
					<div className="col-xl-5 col-lg-4">
						<div className="h6-about-video">
							<div className="about-shape-1 wow fadeInUp" data-wow-delay="0.3s">
								<div className="video-inner">
									<img src="/images/about/h6-about-video-bg.webp" alt="Image" />
									<PopupVideo>
										<Link
											className="video-btn glightbox video-popup"
											href="https://www.youtube.com/watch?v=MLpWrANjFbI"
										>
											<i className="tji-play"></i>
										</Link>
									</PopupVideo>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-7 col-lg-8">
						<div className="h6-about-funfact ">
							<div className="h6-about-funfact-item">
								<div className="counter-item">
									<FunfactSingle currentValue={20} symbol={"M"} />
									<span className="sub-title">Reach worldwide</span>
								</div>
								<div className="desc">
									<p>
										Our mission is our empower businesses off our all size too
										thrive in an businesse changing marketplaces. Our mission.
									</p>
								</div>
							</div>
							<div className="h6-about-funfact-item">
								<div className="counter-item">
									<FunfactSingle currentValue={8} symbol={".5x"} />
									<span className="sub-title">Faster growth</span>
								</div>
								<div className="desc">
									<p>
										Our mission is our empower businesses off our all size too
										thrive in an businesse changing marketplaces. Our mission.
									</p>
								</div>
							</div>
							<div className="h6-about-funfact-item">
								<div className="counter-item">
									<FunfactSingle currentValue={100} isSup={"+"} />
									<span className="sub-title">Awards archived</span>
								</div>
								<div className="desc">
									<p>
										Our mission is our empower businesses off our all size too
										thrive in an businesse changing marketplaces. Our mission.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About6;
