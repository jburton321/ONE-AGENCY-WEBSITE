"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import tjHeroStackAnimation from "@/libs/tjHeroStackAnimation";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";

import { useRef } from "react";
const Hero = () => {
	const animContainerRef = useRef();
	useGSAP(
		() => {
			tjHeroStackAnimation(".tj-hero-section", animContainerRef);
		},
		{
			scope: animContainerRef,
		}
	);

	return (
		<div ref={animContainerRef} className="heroStack">
			<div className="stackOverlay"></div>
			<section className="tj-hero-section">
				<div className="container">
					<div className="row">
						<div className="hero-wrapper">
							<div className="hero-content">
								<h1 className="hero-title text-anim">
									Transforming the future of{" "}
									<span className="active-color">intelligent marketing</span>
								</h1>
								<div className="desc wow fadeInUp" data-wow-delay="0.1s">
									<p>
										Hyperscale digital growth through your ultimate new customer
										acquisition, UX/CX & MarTech performance agency partner. We are ONE Agency.
									</p>
								</div>
								<div className="wow fadeInUp" data-wow-delay="0.3s">
									<ButtonPrimary
										text={"Request Demo"}
										url={"/contact"}
										className={"hero-button"}
									/>
								</div>
								<div className="hero-shapes-1 move-anim">
									<Image
										src="/images/shapes/hero-1.png"
										alt="Shapes"
										height={265}
										width={265}
										style={{ width: "100%", height: "auto" }}
									/>
								</div>
								<div className="hero-shapes-2 zoominout">
									<Image
										src="/images/shapes/hero-3.png"
										alt="Shapes"
										height={51}
										width={51}
									/>
								</div>
							</div>
							<div className="hero-images-box">
								<div className="hero-images">
									<Image
										src="/images/hero/h1-hero-1.webp"
										alt="Images"
										height={610}
										width={752}
										style={{ height: "auto", width: "100%" }}
									/>
								</div>
								<div className="images-shapes move-anim-2">
									<Image
										src="/images/shapes/hero-2.png"
										alt="Shapes"
										height={325}
										width={325}
									/>
								</div>
								<div className="hero-circle">
									<div className="circle-wrap">
										<Image
											className="rotate-image"
											src="/images/shapes/play-text.png"
											alt="image"
											height={100}
											width={100}
										/>
										<PopupVideo>
											<Link
												className="circle glightbox video-popup"
												href="https://www.youtube.com/watch?v=MLpWrANjFbI"
											>
												<i className="fa-sharp fa-solid fa-play"></i>
											</Link>
										</PopupVideo>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="hero_scroll d-none d-lg-block">
					<Link className="down" href="#scroll-hero">
						<span>
							<i className="tji-arrow-bown"></i>
						</span>
						Scroll
					</Link>
				</div>
			</section>
		</div>
	);
};

export default Hero;
