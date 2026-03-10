"use client";
import TestimonialsCard5 from "@/components/shared/cards/TestimonialsCard5";
import getTestimonials from "@/libs/getTestimonials";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials5 = () => {
	const testimonials = getTestimonials()?.slice(0, 4);

	return (
		<section className="h6-testimonial-section section-space">
			<div className="container">
				<div className="row rg-50 justify-content-between">
					<div className="col-xl-4 ">
						<div className="sec-text">
							<div className="sec-heading mb-0 style-2">
								<div className="h6-testimonial-quote">
									<i className="tji-right-quote"></i>
								</div>
								<h2 className="sec-title text-anim">
									Client testimonial and real success stories read
								</h2>
							</div>
							<div className="swiper_navigations style-6 mt-30 d-none d-md-inline-flex">
								<div className="navigation slider-prev">
									<i className="tji-arrow-left"></i>
								</div>
								<div className="navigation slider-next">
									<i className="tji-arrow-right"></i>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-8">
						<div className="h6-testimonial-wrapper">
							<Swiper
								slidesPerView={1}
								spaceBetween={30}
								loop={true}
								speed={1000}
								autoplay={{
									delay: 5000,
								}}
								pagination={{
									el: ".testimonial-pagination",
									clickable: true,
								}}
								navigation={{
									nextEl: ".slider-next",
									prevEl: ".slider-prev",
								}}
								breakpoints={{
									450: {
										slidesPerView: 1.5,
									},
									992: {
										slidesPerView: 2.5,
									},

									1400: {
										slidesPerView: 3,
									},
								}}
								modules={[Pagination, Autoplay, Navigation]}
								className="swiper-container h6-testimonial-slider"
							>
								{testimonials?.length
									? testimonials?.map((testimonial, idx) => (
											<SwiperSlide key={idx}>
												<TestimonialsCard5 testimonial={testimonial} />
											</SwiperSlide>
									  ))
									: ""}
								<div className="swiper_pagination testimonial-pagination d-md-none"></div>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials5;
