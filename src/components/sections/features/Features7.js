"use client";

import tjSvgAnimation from "@/libs/tjSvgAnimation";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

const Features7 = () => {
	const animContainerRef = useRef();
	useGSAP(
		() => {
			tjSvgAnimation(animContainerRef);
		},
		{ scope: animContainerRef }
	);

	return (
		<section
			ref={animContainerRef}
			className="tj-feature-section h10-feature section-space"
			id="scroll-hero"
		>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading h9-section-heading text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								[ OUR COMPANY FEATUERS ]
							</span>
							<h2 className="sec-title text-anim mb-0">
								Empowering organizations navigate change maximize{" "}
								<Image
									className="wow fadeInRight"
									data-wow-delay="1.1s"
									src="/images/feature/h10-feature-title-img-1.webp"
									alt=""
									width={44}
									height={44}
								/>{" "}
								are efficiency, and unlock{" "}
								<Image
									className="wow fadeInRight"
									data-wow-delay="1.7s"
									src="/images/feature/h10-feature-title-img-2.webp"
									alt=""
									width={44}
									height={44}
								/>{" "}
								their business <span>potential to our confidence</span>
							</h2>
						</div>
					</div>
				</div>
				<div className="row rg-30">
					<div className="col-xl-3 col-md-6">
						<div
							className="feature-item h10-feature-item wow fadeInUpBig"
							data-wow-delay="0.3s"
						>
							<div className="feature-icon svg-animate">
								<svg
									width="81"
									height="81"
									viewBox="0 0 81 81"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										stroke="currentColor"
										strokeWidth="1.01408"
										d="M5.00704 5.00704 L75.99294 5.00704 L75.99294 75.99294 L5.00704 75.99294 Z"
										className="bQDqtfGb_0"
									/>
									<path
										d="M29.8525 5.00684H75.9932V51.1475C75.9932 64.869 64.869 75.9932 51.1475 75.9932H5.00684V29.8525C5.00684 16.131 16.131 5.00684 29.8525 5.00684Z"
										stroke="currentColor"
										strokeWidth="1.01408"
										className="bQDqtfGb_1"
									/>
									<path
										transform="rotate(-90 21.2258 43.0137)"
										stroke="currentColor"
										strokeWidth="1.01408"
										d="M21.2258 43.0137 L41.9925 43.0137 L41.9925 63.7804 L21.2258 63.7804 Z"
										className="bQDqtfGb_2"
									/>
									<path
										transform="rotate(-90 29.6067 51.3907)"
										stroke="currentColor"
										strokeWidth="1.01408"
										d="M29.6067 51.3907 L50.3734 51.3907 L50.3734 72.1574 L29.6067 72.1574 Z"
										className="bQDqtfGb_3"
									/>
									<path
										transform="rotate(-90 37.9875 59.7679)"
										stroke="currentColor"
										strokeWidth="1.01408"
										d="M37.9875 59.7679 L58.7542 59.7679 L58.7542 80.5346 L37.9875 80.5346 Z"
										className="bQDqtfGb_4"
									/>
								</svg>
							</div>
							<div className="feature-content">
								<h5 className="title">Quick solutions</h5>
								<div className="desc">
									<p>
										Our consultancy excels in providing quick solutions tailored
										to your business challenges
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-6">
						<div
							className="h10-feature-img-item wow fadeInUpBig"
							data-wow-delay="0.4s"
						>
							<div className="feature-img hover:shine">
								<Image
									src="/images/feature/h10-feature-1.webp"
									alt="Icons"
									width={307}
									height={304}
								/>
							</div>
							<div className="feature-content">
								<h5 className="title">Expert business advices</h5>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-6">
						<div
							className="feature-item h10-feature-item h10-feature-item-2 wow fadeInUpBig"
							data-wow-delay="0.5s"
						>
							<div className="feature-content">
								<h5 className="title">Strategic planning</h5>
								<div className="desc">
									<p>
										Our consultancy excels in providing quick solutions tailored
										to your business challenges
									</p>
								</div>
							</div>

							<div className="feature-chart-img">
								<Image
									src="/images/feature/h10-feature-chart.webp"
									alt=""
									width={308}
									height={156}
									style={{ height: "auto" }}
								/>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-6">
						<div
							className="h10-feature-img-item h10-feature-img-item-2 wow fadeInUpBig"
							data-wow-delay="0.6s"
						>
							<div className="feature-img hover:shine">
								<Image
									src="/images/feature/h10-feature-2.webp"
									alt="Icons"
									width={308}
									height={305}
								/>
							</div>
							<div className="feature-content">
								<h5 className="title">Efficient operations</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Features7;
