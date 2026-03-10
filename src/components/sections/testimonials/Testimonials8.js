"use client";

import { useRef, useState } from "react";
import {
	Autoplay,
	Controller,
	Navigation,
	Pagination,
	Thumbs,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import TestimonialsCard7 from "@/components/shared/cards/TestimonialsCard7";
import getTestimonials from "@/libs/getTestimonials";

const Testimonials8 = () => {
	const testimonials = getTestimonials()?.slice(0, 6);

	const [controlledMainSwiper, setControlledMainSwiper] = useState(null);
	const [controlledThumbSwiper, setControlledThumbSwiper] = useState(null);
	const prevRef = useRef(null);
	const nextRef = useRef(null);

	return (
		<section className="h9-testimonial-section section-space">
			<div className="container">
				<div className="sec-heading sec-heading-centered style-2">
					<span className="sub-title">[ CLIENTS FEEDBACK ]</span>
					<h2 className="sec-title">
						Client testimonial and real success stories
					</h2>
				</div>
				<div className="h9-testimonial-wrapper">
					{/* Main Slider */}
					<Swiper
						onSwiper={setControlledThumbSwiper}
						slidesPerView={1}
						initialSlide={2}
						loop={true}
						speed={1500}
						loopAdditionalSlides={2}
						autoplay={{ delay: 5000 }}
						pagination={{ el: ".swiper_pagination", clickable: true }}
						navigation={{
							prevEl: prevRef.current,
							nextEl: nextRef.current,
						}}
						controller={{ control: controlledMainSwiper }}
						modules={[Autoplay, Navigation, Pagination, Thumbs, Controller]}
						className="h9-testimonial-slider"
					>
						{testimonials.map((testimonial, idx) => (
							<SwiperSlide key={idx}>
								<TestimonialsCard7 testimonial={testimonial} type={2} />
							</SwiperSlide>
						))}
						<div className="swiper_pagination"></div>
					</Swiper>

					{/* Thumbs Slider */}
					<div className="client-thumb-wrap">
						<Swiper
							onSwiper={setControlledMainSwiper} // capture thumbs swiper
							slidesPerView={1.4}
							spaceBetween={10}
							initialSlide={2}
							loop={true}
							freeMode
							watchSlidesProgress
							slideToClickedSlide
							speed={1500}
							loopAdditionalSlides={2}
							breakpoints={{
								430: { slidesPerView: 1.6 },
								530: { slidesPerView: 2 },
								768: { slidesPerView: 2.4, spaceBetween: 20 },
								992: {
									slidesPerView: 3,
									spaceBetween: 20,
									centeredSlides: true,
								},
							}}
							controller={{ control: controlledThumbSwiper }}
							modules={[Thumbs, Controller]}
							className="client-thumb"
						>
							{testimonials.map(({ authorName, authorDesig, img }, idx) => (
								<SwiperSlide key={idx} className="thumb-item">
									<div className="testimonial-author">
										<div className="author-images">
											<img
												src={img || "/images/testimonial/h3-test-3.png"}
												alt={authorName}
											/>
										</div>
										<div className="author-text">
											<h5 className="title">{authorName}</h5>
											<span className="designation">{authorDesig}</span>
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>

					{/* Pagination + Navigation */}
					<div className="swiper_navigations testimonial-navigation">
						<div className="navigation slider-prev" ref={prevRef}>
							<i className="tji-arrow-left"></i>
						</div>
						<div className="navigation slider-next" ref={nextRef}>
							<i className="tji-arrow-right"></i>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials8;
