"use client";
import TestimonialsCard4 from "@/components/shared/cards/TestimonialsCard4";
import getTestimonials from "@/libs/getTestimonials";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials4 = () => {
	const testimonials = getTestimonials()?.slice(0, 3);

	return (
		<section className="h5-testimonial-section dark-bg section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-4 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.2s">
								CLIENTS FEEDBACK
							</span>
							<h2 className="sec-title text-anim">Listening to our clients</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div
							className="h5-testimonial-wrapp wow fadeInUp"
							data-wow-delay="0.3s"
						>
							<Swiper
								spaceBetween={24}
								slidesPerView={1}
								loop={true}
								speed={1500}
								pagination={{
									el: ".testimonial-pagination",
									clickable: true,
								}}
								autoplay={{
									delay: 5000,
								}}
								breakpoints={{
									992: {
										slidesPerView: 2,
									},
								}}
								modules={[Pagination, Autoplay]}
								className="swiper-container tj-testimonial-slider"
							>
								{testimonials?.length
									? testimonials?.map((testimonial, idx) => (
											<SwiperSlide key={idx}>
												<TestimonialsCard4 testimonial={testimonial} />
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

export default Testimonials4;
