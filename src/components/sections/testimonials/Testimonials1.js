"use client";
import TestimonialsCard1 from "@/components/shared/cards/TestimonialsCard1";
import getTestimonials from "@/libs/getTestimonials";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials1 = () => {
	const testimonials = getTestimonials()?.slice(0, 3);

	return (
		<section className="tj-testimonial-section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading">
							<div className="sec-text">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
									Client partners
								</span>
								<h2 className="sec-title text-anim">
									What our client-partners say
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
								spaceBetween={24}
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
									disableOnInteraction: false,
								}}
								breakpoints={{
									992: {
										slidesPerView: 2,
									},
								}}
								modules={[Pagination, Autoplay, Navigation]}
								className="swiper-container tj-testimonial-slider"
								wrapperClass="rightSwipeWrap"
							>
								{testimonials?.length
									? testimonials?.map((testimonial, idx) => (
											<SwiperSlide key={idx} className="right-swipe">
												<TestimonialsCard1 testimonial={testimonial} />
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

export default Testimonials1;
