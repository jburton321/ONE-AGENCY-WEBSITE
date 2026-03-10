"use client";

import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Image from "next/image";
import Link from "next/link";

const Hero5 = () => {
	return (
		<section className="tj-hero-section-four">
			<div className="container">
				<div className="row">
					<div className="hero-wrapper-four">
						<div className="hero-content-four">
							<span
								className="hero-subtitle  wow fadeInRight"
								data-wow-delay="0s"
							>
								NUMBER <span>#1</span> SOLVER AGENCY
							</span>
							<h1 className="hero-title text-anim">
								Proven <span>consulting</span> for modern global enterprises
							</h1>
							<div className="desc wow fadeInUp" data-wow-delay="0.1s">
								<p>
									Transform your business with expert consultancy services our
									team of seasoned consultants unparalleled.
								</p>
							</div>
							<div className="wow fadeInUp" data-wow-delay="0.3s">
								<ButtonPrimary text={"Free consultation"} url={"/contact"} />
							</div>
						</div>
						<div className="hero-images-box-four">
							<div className="hero-images wow fadeInUp" data-wow-delay="0.5s">
								<Image
									src="/images/hero/h5-hero.webp"
									alt="Images"
									width={531}
									height={736}
									style={{ height: "auto" }}
								/>
							</div>
							<div className="client-experience move-anim">
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
								<span className="sub-title">
									<span>39K+</span> Happy clients all over world.
								</span>
							</div>
							<div className="hero-video-btn move-anim">
								<PopupVideo>
									<Link
										className="video-btn glightbox video-popup"
										data-autoplay="true"
										href="https://www.youtube.com/watch?v=MLpWrANjFbI"
									>
										<span className="play-btn">
											<i className="tji-play"></i>
										</span>
										<span className="video-text">Play our reels</span>
									</Link>
								</PopupVideo>
							</div>
						</div>
						<div className="hero-shapes-1 wow fadeInDown" data-wow-delay="0.6s">
							<img src="/images/shapes/h5-hero-shape-1.png" alt="Shapes" />
						</div>
					</div>
				</div>
			</div>
			<div className="hero-shapes-2 wow fadeInLeft" data-wow-delay="1s">
				<img src="/images/shapes/h5-hero-shape-2.png" alt="Shapes" />
			</div>
		</section>
	);
};

export default Hero5;
