"use client";

import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Link from "next/link";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { heroCopy } from "@/data/home-copy";
const copy = heroCopy[7];

const Hero7 = () => {
	const heroSlides = copy.slides.map((slide, i) => ({
		img: ["/images/slider/h7-slider-1.webp", "/images/slider/h7-slider-2.webp", "/images/slider/h7-slider-3.webp"][i],
		subtitle: copy.subtitle,
		title: slide.title,
		desc: slide.desc,
	}));
	return (
		<section className="tj-hero-slider h7-hero-slider style-1">
			<Swiper
				speed={2000}
				loop={true}
				effect="fade"
				modules={[Autoplay, Navigation, EffectFade]}
				navigation={{ prevEl: ".tj-btn-prev", nextEl: ".tj-btn-next" }}
				autoplay={{ delay: 5000 }}
				className="full-slider-active"
			>
				{heroSlides.map(({ img, title, subtitle, desc }, idx) => (
					<SwiperSlide key={idx}>
						<div
							className="tj-slider-section"
							style={{
								backgroundImage: `url('${
									img ? img : "/images/slider/h7-slider-1.webp"
								}')`,
							}}
						>
							<div className="container">
								<div className="row">
									<div className="slider-wrapper">
										<div className="slider-content">
											<span className="sub-title">
												<img src="/images/icons/badge.svg" alt="" /> {subtitle}
											</span>
											<h1 className="slider-title">{title}</h1>
											<div className="desc ">
												<p>{desc}</p>
											</div>
											<div className="hero-action">
												<ButtonPrimary
													text={copy.cta}
													url={"/contact"}
													className={"slider-button"}
												/>
												<Link
													className="call-btn-style-2  slider-button"
													href="tel:18884521505"
												>
													<span className="icon">
														<i className="tji-phone"></i>
													</span>
													<span className="text">1-888-452-1505</span>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}

				<div className="tj-navigation">
					<div className="tj-btn tj-btn-prev">
						{" "}
						<svg viewBox="0 0 48 48">
							<circle cx="24" cy="24" r="20"></circle>
						</svg>
						<svg viewBox="0 0 48 48">
							<circle cx="24" cy="24" r="20"></circle>
						</svg>
						<i className="tji-arrow-left"></i>
					</div>

					<div className="tj-btn tj-btn-next">
						{" "}
						<svg viewBox="0 0 48 48">
							<circle cx="24" cy="24" r="20"></circle>
						</svg>
						<svg viewBox="0 0 48 48">
							<circle cx="24" cy="24" r="20"></circle>
						</svg>{" "}
						<i className="tji-arrow-right"></i>
					</div>
				</div>
			</Swiper>

			<div className="tj-hero-shape"></div>
		</section>
	);
};

export default Hero7;
