"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroSlider = () => {
	const sliderItems = [
		"/images/hero/h6-slider-1.webp",
		"/images/hero/h6-slider-2.webp",
		"/images/hero/h6-slider-3.webp",
		"/images/hero/h6-slider-4.webp",
		"/images/hero/h6-slider-1.webp",
		"/images/hero/h6-slider-2.webp",
		"/images/hero/h6-slider-3.webp",
		"/images/hero/h6-slider-4.webp",
	];
	return (
		<Swiper
			slidesPerView="auto"
			spaceBetween={20}
			loop={true}
			freeMode={true}
			centeredSlides={true}
			allowTouchMove={false}
			speed={8000}
			autoplay={{
				delay: 1,
			}}
			breakpoints={{
				1400: {
					spaceBetween: 30,
				},
			}}
			modules={[Autoplay]}
			className="swiper-container h6-hero-slider"
			wrapperClass="h6-slider-wrapper"
		>
			{sliderItems?.length
				? sliderItems?.map((img, idx) => (
						<SwiperSlide key={idx} className="h6-slider-item">
							<div className="slider-img">
								<Image
									src={img ? img : "/images/hero/h6-slider-1.webp"}
									alt="Images"
									width={442}
									height={525}
									style={{ height: "auto" }}
								/>
							</div>
						</SwiperSlide>
				  ))
				: ""}
		</Swiper>
	);
};

export default HeroSlider;
