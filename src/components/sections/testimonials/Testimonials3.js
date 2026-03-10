"use client";
import TestimonialsCard3 from "@/components/shared/cards/TestimonialsCard3";
import getTestimonials from "@/libs/getTestimonials";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials3 = () => {
	const testimonials = getTestimonials()?.slice(0, 4);

	return (
		<section className="tj-testimonial-section-three section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-2 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								Clients feedback
							</span>
							<h2 className="sec-title text-anim">Our clients testimonials</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid p-0">
				<div className="row">
					<div className="col-12">
						<div className="testimonial-wrapper leftSwipeWrap">
							<Swiper
								spaceBetween={65}
								slidesPerView={1}
								loop={true}
								speed={1500}
								autoplay={{
									delay: 5000,
								}}
								pagination={{
									el: ".testimonial-pagination",
									clickable: true,
								}}
								breakpoints={{
									576: {
										slidesPerView: 1.5,
									},
									1200: {
										slidesPerView: 1.9,
									},
									1440: {
										slidesPerView: 2.9,
									},
								}}
								modules={[Pagination, Autoplay]}
								className="testimonial-slider-two"
							>
								{testimonials?.length
									? testimonials?.map((testimonial, idx) => (
											<SwiperSlide key={idx} className="left-swipe">
												<TestimonialsCard3 testimonial={testimonial} />
											</SwiperSlide>
									  ))
									: ""}
								<div className="swiper_pagination testimonial-pagination"></div>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials3;
