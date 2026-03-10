"use client";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";

const Hero2 = () => {
	const heroSlides = [
		{
			subtitle: "number #1 solver agency",
			title: "Transform your business with expert consultation",
			img: "/images/slider/slider-1.webp",
		},
		{
			subtitle: "number #1 solver agency",
			title: "Transform your business with expert consultation",
			img: "/images/slider/slider-2.webp",
		},
		{
			subtitle: "number #1 solver agency",
			title: "Transform your business with expert consultation",
			img: "/images/slider/slider-3.webp",
		},
	];

	function updateDashWidth(swiper) {
		const dashInner = swiper.el.querySelector(".dash-inner");

		if (dashInner) {
			const realIndex = swiper.realIndex;
			const totalSlides = swiper.slides.length;
			const progressPercent = ((realIndex + 1) / totalSlides) * 100;
			dashInner.style.width = progressPercent + "%";
		}
	}

	return (
		<section className="tj-hero-slider style-1">
			<Swiper
				speed={2000}
				loop={true}
				effect="fade"
				modules={[Pagination, Autoplay, Navigation, EffectFade]}
				pagination={{
					el: ".tj-sw-pagination",
					type: "fraction",
					clickable: true,
					renderFraction: (currentClass, totalClass) =>
						`<span class="${currentClass}"></span>` +
						` <span class="dash"><span class="dash-inner"></span></span> ` +
						`<span class="${totalClass}"></span>`,
				}}
				navigation={{ prevEl: ".tj-btn-prev", nextEl: ".tj-btn-next" }}
				autoplay={{ delay: 5000 }}
				onInit={swiper => updateDashWidth(swiper)}
				onSlideChange={swiper => updateDashWidth(swiper)}
				className="full-slider-active"
			>
				{heroSlides.map(({ img, title, subtitle }, idx) => (
					<SwiperSlide key={idx}>
						<section
							className="tj-slider-section"
							style={{ backgroundImage: `url(${img})` }}
						>
							<div className="container">
								<div className="row">
									<div className="slider-wrapper">
										<div className="slider-content">
											<span className="sub-title">{subtitle}</span>
											<h1 className="slider-title">{title}</h1>
											<ButtonPrimary
												text={"Free consultation"}
												url={"/contact"}
												className={"slider-button"}
											/>
										</div>

										<div className="slider-feature-box">
											<div className="slider-logo">
												<Image
													src="/images/icons/slider-award.svg"
													alt="Icons"
													width={80}
													height={68}
												/>
											</div>
											<div className="desc">
												<p>
													Transform your business growth with expert consultancy
													services by our team of seasoned consultants
													unparalleled.
												</p>
											</div>
											<div className="slider-shape">
												<Image
													src="/images/shapes/slider-shapes.png"
													alt="Shapes"
													width={239}
													height={255}
													style={{ height: "100%", width: "auto" }}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					</SwiperSlide>
				))}

				<div className="tj-navigation">
					<div className="tj-btn tj-btn-prev">
						<i className="tji-angle-left"></i>
					</div>
					<div className="tj-sw-pagination"></div>
					<div className="tj-btn tj-btn-next">
						<i className="tji-angle-right"></i>
					</div>
				</div>
			</Swiper>
		</section>
	);
};

export default Hero2;
