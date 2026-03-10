"use client";
import TestimonialsCard6 from "@/components/shared/cards/TestimonialsCard6";
import getTestimonials from "@/libs/getTestimonials";
import { useState } from "react";

const Testimonials6 = () => {
	const testimonials = getTestimonials()?.slice(0, 6);
	const [currentIndex, setCurrentIndex] = useState(1);
	const handleCurrentIndex = idx => {
		setCurrentIndex(idx);
	};
	return (
		<section className="h7-testimonial section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading h7-section-heading style-4">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
								CLIENTS FEEDBACK
							</span>
							<h2 className="sec-title text-anim">Feedback that fuels us</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div
							className="h7-testimonial-wrap wow fadeInUp"
							data-wow-delay="0.3s"
						>
							{testimonials?.length
								? testimonials?.map((testimonial, idx) => (
										<TestimonialsCard6
											key={idx}
											idx={idx}
											testimonial={testimonial}
											handleCurrentIndex={handleCurrentIndex}
											currentIndex={currentIndex}
										/>
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials6;
