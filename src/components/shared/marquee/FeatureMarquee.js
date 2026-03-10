"use client";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const FeatureMarquee = () => {
	const marqueeItems = [
		"Passion and progress",
		"Founders and vision",
		"Growth and impact",
		"Team and values",
		"Innovation and future",
		"Success and impact",
		"Founders and vision",
		"Passion and progress",
		"Founders and vision",
		"Growth and impact",
		"Team and values",
		"Innovation and future",
		"Success and impact",
		"Founders and vision",
	];

	return (
		<section className="tj-marquee-section">
			<div className="marquee-slider-wrapper">
				<Swiper
					spaceBetween={0}
					slidesPerView="auto"
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
										<h3 className="text">{title}</h3>
									</div>
									<div className="marquee-icons">
										<Image
											src="/images/icons/marquee-icon.svg"
											alt="Icons"
											width={33}
											height={32}
											style={{ height: "auto" }}
										/>
									</div>
								</SwiperSlide>
						  ))
						: ""}
				</Swiper>
			</div>
		</section>
	);
};

export default FeatureMarquee;
