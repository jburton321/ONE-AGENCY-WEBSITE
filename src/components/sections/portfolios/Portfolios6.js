"use client";
import PortfolioCard6 from "@/components/shared/cards/PortfolioCard6";
import getPortfolio from "@/libs/getPortfolio";
import tjStackAnimation2 from "@/libs/tjStackAnimation2";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
const Portfolios6 = () => {
	const portfolio = getPortfolio()?.slice(0, 3);
	const animContainerRef = useRef();

	useGSAP(
		() => {
			tjStackAnimation2(".project-stack");
		},
		{
			scope: animContainerRef,
		}
	);

	return (
		<section
			ref={animContainerRef}
			className="h6-project-section section-space"
		>
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="h6-project-wrap">
							{portfolio?.length
								? portfolio?.map((portfolioSingle, idx) => (
										<PortfolioCard6
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

export default Portfolios6;
