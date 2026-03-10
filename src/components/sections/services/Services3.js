"use client";

import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ServiceCard3 from "@/components/shared/cards/ServiceCard3";
import getALlServices from "@/libs/getALlServices";

const Services3 = () => {
	const services = getALlServices()?.slice(0, 4);
	return (
		<section className="tj-service-section-three section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-2">
							<div className="sec-text">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
									Transformative solution
								</span>
								<h2 className="sec-title text-anim">
									Get our comprehensive service offerings
								</h2>
							</div>
							<div
								className="service-rating wow fadeInUp"
								data-wow-delay="0.3s"
							>
								<div className="star-fill">
									<div className="star-ratings">
										<div className="fill-ratings" style={{ width: "73%" }}>
											<span>★★★★★</span>
										</div>
										<div className="empty-ratings">
											<span>★★★★★</span>
										</div>
									</div>
								</div>
								<div className="review">
									Customers review (<strong>4.8</strong>/5.0)
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="service-wrapper-two">
							{services?.length
								? services?.map((service, idx) => (
										<ServiceCard3 key={idx} service={service} idx={idx} />
								  ))
								: ""}
						</div>
						<div
							className="service-btn mt-60 text-center wow fadeInUp"
							data-wow-delay="0.9s"
						>
							<ButtonPrimary text={"More Services"} url={"/services"} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services3;
