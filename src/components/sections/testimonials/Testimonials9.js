"use client";
import TestimonialsCard8 from "@/components/shared/cards/TestimonialsCard8";
import getTestimonials from "@/libs/getTestimonials";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials9 = () => {
	const testimonials = getTestimonials()?.slice(0, 4);

	return (
		<section className="tj-testimonial-section h10-testimonial">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading h9-section-heading">
							<div className="sec-text">
								<span
									className="sub-title   wow fadeInUp"
									data-wow-delay="0.1s"
								>
									[ CLIENTS FEEDBACK ]
								</span>
								<h2 className="sec-title text-anim">
									Client testimonial & real success stories
								</h2>
							</div>
							<div className="swiper_navigations testimonial-navigation d-none d-md-inline-flex">
								<div className="navigation slider-prev">
									<i className="tji-arrow-left"></i>
								</div>
								<div className="navigation slider-next">
									<i className="tji-arrow-right"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="testimonial-slider-wrapper">
							<Swiper
								spaceBetween={30}
								slidesPerView={1}
								loop={true}
								speed={1500}
								pagination={{
									el: ".testimonial-pagination",
									clickable: true,
								}}
								navigation={{ nextEl: ".slider-next", prevEl: ".slider-prev" }}
								autoplay={{
									delay: 5000,
								}}
								breakpoints={{
									768: {
										slidesPerView: 2,
									},
									1200: {
										slidesPerView: 3,
									},
								}}
								modules={[Pagination, Autoplay, Navigation]}
								className="swiper-container h10-testimonial-slider"
							>
								{testimonials?.length
									? testimonials?.map((testimonial, idx) => (
											<SwiperSlide key={idx}>
												<TestimonialsCard8 testimonial={testimonial} />
											</SwiperSlide>
									  ))
									: ""}
								<div className="swiper_pagination testimonial-pagination "></div>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials9;
