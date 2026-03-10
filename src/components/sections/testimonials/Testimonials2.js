"use client";
import TestimonialsCard2 from "@/components/shared/cards/TestimonialsCard2";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import getTestimonials from "@/libs/getTestimonials";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials2 = ({ type }) => {
	const testimonials = getTestimonials()?.slice(0, 2);

	return (
		<section className="tj-testimonial-section-two section-space">
			<div className="container">
				{type === 2 ? (
					""
				) : (
					<div className="row">
						<div className="col-12">
							<div
								className={`sec-heading ${
									type === 3 ? "" : "style-2"
								} text-center`}
							>
								<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
									{type === 3 ? "" : "//"} Clients feedback
								</span>
								<h2 className="sec-title text-anim">
									Our clients testimonials
								</h2>
							</div>
						</div>
					</div>
				)}
				<div className="row rg-50 align-items-center">
					<div className="col-lg-6">
						<div
							className="testimonial-images-2 hover:shine wow fadeInUp"
							data-wow-delay="0.3s"
						>
							<Image
								src="/images/testimonial/h2-test-1.webp"
								alt="Images"
								width={550}
								height={630}
								style={{ height: "auto" }}
							/>
							<div className="testimonial-funfact">
								<FunfactSingle currentValue={3.8} symbol={"K+"} />
								<span className="sub-title">
									Happy clients all over <br /> world now.
								</span>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						{type === 2 ? (
							<div className="sec-heading style-3">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
									// Clients feedback
								</span>
								<h2 className="sec-title text-anim">
									Our clients testimonials
								</h2>
							</div>
						) : (
							""
						)}
						<Swiper
							spaceBetween={0}
							slidesPerView={1}
							speed={1500}
							loop={true}
							autoplay={{
								delay: 5000,
							}}
							navigation={{ nextEl: ".slider-next", prevEl: ".slider-prev" }}
							modules={[Autoplay, Navigation]}
							className={`tj-testimonial-slider-two ${
								type === 2 ? "wow fadeInUp" : ""
							}`}
							data-wow-delay={`${type === 2 ? "0" : "0.3"}s`}
						>
							{testimonials?.length
								? testimonials?.map((testimonial, idx) => (
										<SwiperSlide key={idx} className="">
											<TestimonialsCard2 testimonial={testimonial} />
										</SwiperSlide>
								  ))
								: ""}
							<div className="swiper_navigations testimonial-navigation">
								<div className="navigation slider-prev">
									<i className="tji-arrow-left"></i>
								</div>
								<div className="navigation slider-next">
									<i className="tji-arrow-right"></i>
								</div>
							</div>
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials2;
