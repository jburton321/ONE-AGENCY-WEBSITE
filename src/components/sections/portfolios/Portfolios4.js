"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PortfolioCard4 from "@/components/shared/cards/PortfolioCard4";
import getPortfolio from "@/libs/getPortfolio";
import Image from "next/image";
import { useState } from "react";
const Portfolios4 = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const portfolio = getPortfolio()?.slice(0, 4);
	const handleCurrentIndex = idx => {
		setCurrentIndex(idx);
	};
	return (
		<section className="h4-case-section section-space">
			<div className="container">
				<div className="row rg-50">
					<div className="col-xl-5 col-lg-5">
						<div className="sec-heading style-3">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.2s">
								// OUR CASE STUDY
							</span>
							<h2 className="sec-title text-anim">
								Explore our outstanding client projects
							</h2>
						</div>
						<div className="case-btn wow fadeInUp" data-wow-delay="0.4s">
							<ButtonPrimary text={"Explore more"} url={"/portfolios"} />
						</div>
					</div>
					<div className="col-xl-7 col-lg-7">
						<div className="h4-case-wrapper wow fadeInUp" data-wow-delay="0.5s">
							{portfolio?.length
								? portfolio?.map((portfolioSingle, idx) => (
										<PortfolioCard4
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
			<div className="case-shapes move-anim">
				<Image
					src="/images/shapes/h4-hero-shape-1.svg"
					alt="Shapes"
					width={180}
					height={180}
					style={{ height: "auto" }}
				/>
			</div>
		</section>
	);
};

export default Portfolios4;
