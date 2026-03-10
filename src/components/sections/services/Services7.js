"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ServiceCard7 from "@/components/shared/cards/ServiceCard7";
import getALlServices from "@/libs/getALlServices";

const Services7 = () => {
	const services = getALlServices()?.slice(0, 4);
	return (
		<section className="tj-service-section-three h7-service-section section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap">
							<div className="sec-heading h7-section-heading style-4">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
									OUR SOLUTIONS
								</span>
								<h2 className="sec-title text-anim">
									Best comprehensive service offer.
								</h2>
							</div>
							<div className="desc">
								In today's dynamic business environment, the key to success
								strategics..
							</div>
							<ButtonPrimary
								text={"More services"}
								url={"/services"}
								className={"d-none d-lg-inline-flex"}
							/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="service-wrapper-two">
							{services?.length
								? services?.map((service, idx) => (
										<ServiceCard7 key={idx} service={service} idx={idx} />
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services7;
