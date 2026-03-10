"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PortfolioCard2 from "@/components/shared/cards/PortfolioCard2";
import PortfolioMarqee from "@/components/shared/portfolios/PortfolioMarqee";
import getPortfolio from "@/libs/getPortfolio";
import projectStickyAnimation from "@/libs/projectStickyAnimation";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
const Portfolios2 = () => {
	const portfolio = getPortfolio()?.slice(0, 4);
	const animContainerRef = useRef();
	useGSAP(
		() => {
			projectStickyAnimation(animContainerRef);
		},
		{ scope: animContainerRef }
	);
	return (
		<section
			ref={animContainerRef}
			className="tj-project-section-two section-space"
		>
			{/* <!-- marquee --> */}
			<PortfolioMarqee />
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="project-wrapper">
							{portfolio?.length
								? portfolio?.map((portfolioSingle, idx) => (
										<PortfolioCard2
											key={idx}
											portfolio={portfolioSingle}
											idx={idx}
										/>
								  ))
								: ""}
						</div>

						<div
							className="projects_button text-center wow fadeInUp"
							data-wow-delay="0.9s"
						>
							<ButtonPrimary
								text={"Explore more"}
								url={"/portfolios"}
								className={"white-btn"}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolios2;
