"use client";

import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import TestimonialsCard5 from "@/components/shared/cards/TestimonialsCard5";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import getTestimonials from "@/libs/getTestimonials";
import { useEffect, useState } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials7 = () => {
	const testimonials = getTestimonials()?.slice(0, 6);
	const [currentDirection, setCurrentDirection] = useState("vertical");

	useEffect(() => {
		const getDirection = () => {
			setCurrentDirection(window.innerWidth < 768 ? "horizontal" : "vertical");
		};

		getDirection();
		window.addEventListener("resize", getDirection);
		return () => window.removeEventListener("resize", getDirection);
	}, []);

	return (
		<section className="h8-testimonial">
			<div className="container tj-gap-30">
				<div className="row">
					{/* Left column */}
					<div className="col-12 col-lg-8 col-xl-4">
						<div className="h8-testimonial-section-heading-wrapper">
							<div className="sec-heading h8-section-heading h8-testimonial-section-heading style-4">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
									CLIENTS FEEDBACKS
								</span>
								<h2 className="sec-title text-anim">
									Client testimonial and real success stories read
								</h2>
							</div>
							<div className="h8-testimonial-fanfact">
								<div className="counter-item">
									<FunfactSingle currentValue={99} symbol="%" />
									<span
										className="sub-title wow fadeInUp"
										data-wow-delay="0.3s"
									>
										Happy clients all over the world with ONE Agency
									</span>
								</div>
							</div>
							<div className="btn-area wow fadeInUp" data-wow-delay="0.3s">
								<ButtonPrimary text="Explore more" url="/contact" />
							</div>
						</div>
					</div>

					{/* Up direction slider */}
					<div className="col-12 col-md-6 col-xl-4">
						<div className="h8-testimonial-wrapper">
							<Swiper
								key={currentDirection}
								slidesPerView="auto"
								spaceBetween={24}
								centeredSlides
								loop
								allowTouchMove={false}
								speed={8000}
								direction={currentDirection}
								autoplay={{
									delay: 0,
									disableOnInteraction: false,
									reverseDirection: false,
								}}
								breakpoints={{
									768: { spaceBetween: 30 },
								}}
								modules={[Autoplay]}
								className="h8-testimonial-slider h8-testimonial-slider-up"
							>
								{testimonials.map((testimonial, idx) => (
									<SwiperSlide key={idx}>
										<TestimonialsCard5 testimonial={testimonial} type={2} />
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>

					{/* Down direction slider */}
					<div className="col-12 col-md-6 col-xl-4">
						<div className="h8-testimonial-wrapper">
							<Swiper
								key={currentDirection}
								slidesPerView="auto"
								spaceBetween={24}
								centeredSlides
								loop
								allowTouchMove={false}
								speed={8000}
								direction={currentDirection}
								autoplay={{
									delay: 0,
									disableOnInteraction: false,
									reverseDirection: true,
								}}
								breakpoints={{
									768: { spaceBetween: 30 },
								}}
								modules={[Autoplay]}
								className="h8-testimonial-slider h8-testimonial-slider-down"
							>
								{testimonials.map((testimonial, idx) => (
									<SwiperSlide key={idx}>
										<TestimonialsCard5 testimonial={testimonial} type={2} />
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials7;
