"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const FeatureMarquee2 = () => {
	const marqueeItems = [
		"LATEST PROJECT",
		"LATEST PROJECT",
		"LATEST PROJECT",
		"LATEST PROJECT",
		"LATEST PROJECT",
		"LATEST PROJECT",
		"LATEST PROJECT",
		"LATEST PROJECT",
		"LATEST PROJECT",
		"LATEST PROJECT",
		"LATEST PROJECT",
		"LATEST PROJECT",
	];

	return (
		<section className="h6-marquee-section">
			<Swiper
				spaceBetween={20}
				slidesPerView={"auto"}
				freeMode={true}
				centeredSlides={true}
				loop={true}
				speed={4000}
				allowTouchMove={false}
				autoplay={{
					delay: 1,
				}}
				modules={[Autoplay]}
				className="swiper-container h6-marquee-slider"
				wrapperClass="marquee-wrapper"
			>
				{marqueeItems?.length
					? marqueeItems?.map((title, idx) => (
							<SwiperSlide key={idx} className="marquee_item">
								<div className="marquee-title">{title}</div>
								<div className="marquee-icons">//</div>
							</SwiperSlide>
					  ))
					: ""}
			</Swiper>
		</section>
	);
};

export default FeatureMarquee2;
