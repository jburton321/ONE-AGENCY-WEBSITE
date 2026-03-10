"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const FeatureMarquee3 = () => {
	const marqueeItems = [
		"Expertise",
		"Consulting",
		"Business",
		"Growth",
		"Expertise",
		"Consulting",
		"Business",
		"Growth",
		"Expertise",
		"Consulting",
		"Business",
		"Growth",
		"Expertise",
		"Consulting",
		"Business",
		"Growth",
	];

	return (
		<section className="h8-marquee-section">
			<div className="marquee-slider-wrapper">
				<Swiper
					spaceBetween={0}
					slidesPerView={"auto"}
					freeMode={true}
					centeredSlides={true}
					loop={true}
					speed={4000}
					allowTouchMove={false}
					autoplay={{
						delay: 1,
						disableOnInteraction: true,
					}}
					modules={[Autoplay]}
					className="marquee-slider"
					wrapperClass="marquee-wrapper"
				>
					{marqueeItems?.length
						? marqueeItems?.map((title, idx) => (
								<SwiperSlide key={idx} className="marquee-item">
									<div className="marquee-title">
										{" "}
										<div className={`text ${idx % 2 !== 0 ? "stroke" : ""}`}>
											{title}
										</div>
									</div>
									<div className="marquee-icons">
										<img src="/images/icons/marquee-icon-2.svg" alt="Icons" />
									</div>
								</SwiperSlide>
						  ))
						: ""}
				</Swiper>
			</div>
		</section>
	);
};

export default FeatureMarquee3;
