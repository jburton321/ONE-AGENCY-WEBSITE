"use client";

import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FeatureCard3 from "@/components/shared/cards/FeatureCard3";
import tjSvgAnimation from "@/libs/tjSvgAnimation";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Features6 = () => {
	const animContainerRef = useRef();
	useGSAP(
		() => {
			tjSvgAnimation(animContainerRef);
		},
		{ scope: animContainerRef }
	);
	const features = [
		{
			title: "Quick solutions",
			desc: "Our consultancy excels in providing quick solutions tailored to your business challenges",
			icon: (
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
			),
		},
		{
			title: "Expert advice",
			desc: "Our consultancy excels in providing quick solutions tailored to your business challenges",
			icon: (
				<svg
					width="80"
					height="81"
					viewBox="0 0 80 81"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M55.9566 12.5783L48.228 7.7002L40.0008 2.9502L7.0918 21.9502V59.9502L40.0008 78.9502L72.9097 59.9502V21.9502L64.6825 17.2002L60.5689 14.8252"
						stroke="currentColor"
						strokeWidth="0.997241"
						className="GZoqilTp_0"
					/>
					<path
						d="M29.9767 66.0692L33.319 67.9975L40.0037 71.854L66.7422 56.4279V25.5758L40.0037 10.1497L13.2651 25.5758V56.4279L19.9498 60.2844L25.5437 63.4383"
						stroke="currentColor"
						strokeWidth="0.997241"
						className="GZoqilTp_1"
					/>
					<path
						d="M45.2607 37.9136V43.9868L40.001 47.022L34.7432 43.9868V37.9136L40.001 34.8774L45.2607 37.9136Z"
						stroke="currentColor"
						strokeWidth="0.997241"
						className="GZoqilTp_2"
					/>
					<path
						d="M40.0009 38.4575L42.16 39.7041V42.1972L40.0009 43.4437L37.8418 42.1972V39.7041L40.0009 38.4575Z"
						fill="currentColor"
						className="GZoqilTp_3"
					/>
					<path
						stroke="currentColor"
						strokeWidth="0.997241"
						d="M39.5053,35.1326L39.5053,21.005"
						className="GZoqilTp_4"
					/>
					<path
						stroke="currentColor"
						strokeWidth="0.997241"
						d="M45.8203,40.4516L59.9479,40.4516"
						className="GZoqilTp_5"
					/>
					<path
						stroke="currentColor"
						strokeWidth="0.997241"
						d="M20.0527,40.4516L34.1803,40.4516"
						className="GZoqilTp_6"
					/>
					<path
						stroke="currentColor"
						strokeWidth="0.997241"
						d="M40.3295,60.895L40.3295,46.7674"
						className="GZoqilTp_7"
					/>
				</svg>
			),
		},
		{
			title: "Strategic planning",
			desc: "Our consultancy excels in providing quick solutions tailored to your business challenges",
			icon: (
				<svg
					width="80"
					height="81"
					viewBox="0 0 80 81"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke="currentColor"
						d="M 40.5,5.5 L 40.5,5.5 A 35,35,0,0,1,75.5,40.5 L 75.5,40.5 A 35,35,0,0,1,40.5,75.5 L 40.5,75.5 A 35,35,0,0,1,5.5,40.5 L 5.5,40.5 A 35,35,0,0,1,40.5,5.5"
						className="GAqZQeDS_0"
					/>
					<path
						stroke="currentColor"
						d="M 40.5,13.5 L 40.5,13.5 A 27,27,0,0,1,67.5,40.5 L 67.5,40.5 A 27,27,0,0,1,40.5,67.5 L 40.5,67.5 A 27,27,0,0,1,13.5,40.5 L 13.5,40.5 A 27,27,0,0,1,40.5,13.5"
						className="GAqZQeDS_1"
					/>
					<path
						stroke="currentColor"
						d="M 40.5,22.5 L 40.5,22.5 A 18,18,0,0,1,58.5,40.5 L 58.5,40.5 A 18,18,0,0,1,40.5,58.5 L 40.5,58.5 A 18,18,0,0,1,22.5,40.5 L 22.5,40.5 A 18,18,0,0,1,40.5,22.5"
						className="GAqZQeDS_2"
					/>
					<path
						stroke="currentColor"
						d="M 40.5,37.5 L 40.5,37.5 A 19,19,0,0,1,59.5,56.5 L 59.5,56.5 A 19,19,0,0,1,40.5,75.5 L 40.5,75.5 A 19,19,0,0,1,21.5,56.5 L 21.5,56.5 A 19,19,0,0,1,40.5,37.5"
						className="GAqZQeDS_3"
					/>
				</svg>
			),
		},
		{
			title: "Efficient operations",
			desc: "Our consultancy excels in providing quick solutions tailored to your business challenges",
			icon: (
				<svg
					width="80"
					height="81"
					viewBox="0 0 80 81"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M64 10L77.5 39L64 70.5H35L48.5 39L35 10H14.5L2 39L14.5 70.5H25"
						stroke="currentColor"
						className="idsUcHxq_0"
					/>
					<path
						d="M32 39.1488L27.9355 48H21.7634L18 39.1488L21.7634 31H27.9355L32 39.1488Z"
						stroke="currentColor"
						className="idsUcHxq_1"
					/>
					<path
						d="M54.7559 39.4811L63.9362 39.4361L49.9626 70.6671"
						stroke="currentColor"
						className="idsUcHxq_2"
					/>
				</svg>
			),
		},
	];

	return (
		<section
			ref={animContainerRef}
			className="tj-feature-section h8-feature section-space"
		>
			<div className="container">
				<div className="row flex-column-reverse flex-lg-row ">
					<div className="col-lg-8 ">
						<div className="row rg-30">
							{features.map((feature, idx) => (
								<div key={idx} className="col-md-6">
									<FeatureCard3 feature={feature} idx={idx} />
								</div>
							))}
						</div>
					</div>
					<div className="col-lg-4 ">
						<div className="sec-heading h8-section-heading style-4">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
								NUMBE #1 SOLVER
							</span>
							<h2 className="sec-title text-anim">Explore our core features</h2>

							<div className="desc wow fadeInUp" data-wow-delay="0.7s">
								<p>
									Our mission is to empower businesses of thrive in solutions
								</p>
							</div>
							<div className="wow fadeInUp" data-wow-delay="0.8s">
								<ButtonPrimary text="Explore more" href="/contact" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Features6;
