"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ServiceCard10 from "@/components/shared/cards/ServiceCard10";
import getALlServices from "@/libs/getALlServices";
import tjStackAnimation from "@/libs/tjStackAnimation";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Services10 = () => {
	const animContainerRef = useRef();
	const services = getALlServices()?.slice(0, 4);
	useGSAP(
		context => {
			tjStackAnimation(".service-stack");
		},
		{ scope: animContainerRef }
	);
	return (
		<section className="h10-service-section section-space">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="sec-heading style-2 sec-heading-centered">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								[ TRANSFORMATIVE SOLUTION ]
							</span>
							<h2 className="sec-title text-anim">
								Explore comprehensive service offer
							</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="service-wrapper">
							{services?.length
								? services?.map((service, idx) => (
										<ServiceCard10
											key={idx}
											service={service}
											idx={idx}
											lastItem={services?.length - 1}
										/>
								  ))
								: ""}
						</div>
						<div
							className="service-btn-area text-center wow fadeInUp"
							data-wow-delay=".3s"
						>
							<ButtonPrimary text={"More services"} url={"/services"} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services10;
