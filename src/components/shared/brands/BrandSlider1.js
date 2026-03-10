"use client";

import getBrands from "@/libs/getBrands";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BrandSlider1 = () => {
	const brands = getBrands();
	return (
		<div className="tj-brand-slider">
			<Swiper
				spaceBetween={30}
				slidesPerView={2}
				freeMode={true}
				centeredSlides={true}
				loop={true}
				speed={5000}
				allowTouchMove={false}
				autoplay={{
					delay: 1,
					disableOnInteraction: false,
				}}
				breakpoints={{
					576: {
						slidesPerView: 2.5,
					},
					768: {
						slidesPerView: 3.3,
					},
					992: {
						slidesPerView: 4.5,
					},
					1200: {
						slidesPerView: 5.2,
					},
					1400: {
						slidesPerView: 6,
					},
				}}
				modules={[Pagination, Autoplay, Navigation]}
				className="brand-slider-1 swiper-container"
				wrapperClass="brand_wrapper"
			>
				{brands?.length
					? brands?.map(({ img }, idx) => (
							<SwiperSlide key={idx}>
								<div className="brand-logo">
									<img
										src={img ? img : "/images/brand/brand-thumb-1.png"}
										alt="Brand"
									/>
								</div>
							</SwiperSlide>
					  ))
					: ""}
			</Swiper>
		</div>
	);
};

export default BrandSlider1;
