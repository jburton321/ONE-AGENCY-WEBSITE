"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PortfolioCard9 from "@/components/shared/cards/PortfolioCard9";
import getPortfolio from "@/libs/getPortfolio";
import { useState } from "react";
const Portfolios9 = () => {
	const [currentIndex, setCurrentIndex] = useState(1);
	const portfolio = getPortfolio()?.slice(0, 5);
	const handleCurrentIndex = idx => {
		setCurrentIndex(idx);
	};
	return (
		<section className="h9-case-study section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap">
							<div className="sec-heading h9-section-heading style-4">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
									[ OUR INTERNATIONAL CLIENTS ]
								</span>
								<h2 className="sec-title text-anim">
									Explore our outstanding client projects
								</h2>
							</div>
							<div className="desc wow fadeInUp" data-wow-delay="0.5s">
								In today's dynamic business environment, the key to success
								strategics..
							</div>

							<div className=" wow fadeInUp" data-wow-delay="0.6s">
								<ButtonPrimary text={"Explore more"} url={"/portfolios"} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<div
							className="h9-case-study-inner wow fadeInUp"
							data-wow-delay="0.6s"
						>
							{portfolio?.length
								? portfolio?.map((portfolioSingle, idx) => (
										<PortfolioCard9
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

export default Portfolios9;
