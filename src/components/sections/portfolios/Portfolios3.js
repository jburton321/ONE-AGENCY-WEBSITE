"use client";
import PortfolioCard3 from "@/components/shared/cards/PortfolioCard3";
import getPortfolio from "@/libs/getPortfolio";
import { useState } from "react";
const Portfolios3 = () => {
	const [currentIndex, setCurrentIndex] = useState(2);
	const portfolio = getPortfolio()?.slice(0, 5);
	const handleCurrentIndex = idx => {
		setCurrentIndex(idx);
	};
	return (
		<section
			className="project-section-three section-space"
			style={{ backgroundImage: "url('/images/shapes/h3-project.png')" }}
		>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-2 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								Our case study
							</span>
							<h2 className="sec-title text-anim">
								Explore our outstanding client projects
							</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div
							className="project-wrapper-two wow fadeInUp"
							data-wow-delay="0.3s"
						>
							{portfolio?.length
								? portfolio?.map((portfolioSingle, idx) => (
										<PortfolioCard3
											key={idx}
											portfolio={portfolioSingle}
											handleCurrentIndex={handleCurrentIndex}
											currentIndex={currentIndex}
											idx={idx}
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

export default Portfolios3;
