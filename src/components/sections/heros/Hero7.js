"use client";

import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Link from "next/link";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero7 = () => {
	const heroSlides = [
		{
			img: "/images/slider/h7-slider-1.webp",
			subtitle: "NUMBER #1 SOLVER AGENCY",
			title: "Smartest solutions for agile companies",
			desc: "Transform your business with expert consultancy services our team of seasoned consultants unparalleled.",
		},
		{
			img: "/images/slider/h7-slider-2.webp",
			subtitle: "NUMBER #1 SOLVER AGENCY",
			title: "Cutting-Edge solution for businesses",
			desc: "Transform your business with expert consultancy services our team of seasoned consultants unparalleled.",
		},
		{
			img: "/images/slider/h7-slider-3.webp",
			subtitle: "NUMBER #1 SOLVER AGENCY",
			title: "Intelligent solutions for modern business",
			desc: "Transform your business with expert consultancy services our team of seasoned consultants unparalleled.",
		},
	];
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
													text={"Free consultation"}
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
