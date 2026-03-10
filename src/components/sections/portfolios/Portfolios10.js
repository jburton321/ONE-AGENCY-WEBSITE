"use client";
import PortfolioCard10 from "@/components/shared/cards/PortfolioCard10";
import getPortfolio from "@/libs/getPortfolio";
import tjStackAnimation from "@/libs/tjStackAnimation";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
const Portfolios10 = () => {
	const portfolio = getPortfolio()?.slice(0, 3);
	const animContainerRef = useRef();
	useGSAP(
		context => {
			tjStackAnimation(".service-stack");
		},
		{ scope: animContainerRef }
	);
	return (
		<section
			ref={animContainerRef}
			className="h10-projects-section section-space"
		>
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="sec-heading style-2 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								[ TRANSFORMATIVE SOLUTION ]
							</span>
							<h2 className="sec-title text-anim">
								Explore our outstanding client projects
							</h2>
						</div>

						<div className="h10-projects_wrap">
							{portfolio?.length
								? portfolio?.map((portfolioSingle, idx) => (
										<PortfolioCard10
											key={idx}
											portfolio={portfolioSingle}
											idx={idx}
											lastItem={portfolio?.length - 1}
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

export default Portfolios10;
