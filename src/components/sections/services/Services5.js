"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ServiceCard5 from "@/components/shared/cards/ServiceCard5";
import getALlServices from "@/libs/getALlServices";
import { useState } from "react";

const Services5 = () => {
	const services = getALlServices()?.slice(0, 6);
	const [currentIndex, setCurrentIndex] = useState(1);
	const handleCurrentIndex = idx => {
		setCurrentIndex(idx);
	};
	return (
		<section className="tj-service-section-four section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap">
							<div className="sec-heading style-4">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
									TRANSFORMATIVE SOLUTION
								</span>
								<h2 className="sec-title text-anim">
									In comprehensive service offer.
								</h2>
							</div>

							<div className="desc">
								In today's dynamic business environment, the key to success
								strategics..
							</div>
							<ButtonPrimary text={"More services"} url={"/services"} />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="h5-service-wrap wow fadeInUp" data-wow-delay="0.3s">
							{services?.length
								? services?.map((service, idx) => (
										<ServiceCard5
											key={idx}
											service={service}
											handleCurrentIndex={handleCurrentIndex}
											currentIndex={currentIndex}
											idx={idx}
										/>
								  ))
								: ""}
						</div>
					</div>
				</div>
				<div className="row d-lg-none">
					<div className="col">
						<div className="services-btn text-center">
							<a href="services.html" className="tj-primary-btn">
								<div className="btn_inner">
									<div className="btn_icon">
										<span>
											<i className="tji-arrow-right"></i>
											<i className="tji-arrow-right"></i>
										</span>
									</div>
									<div className="btn_text">
										<span>More Services</span>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services5;
