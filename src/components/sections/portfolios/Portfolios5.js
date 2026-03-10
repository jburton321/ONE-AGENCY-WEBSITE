"use client";
import PortfolioCard5 from "@/components/shared/cards/PortfolioCard5";
import getPortfolio from "@/libs/getPortfolio";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Portfolios5 = () => {
	const portfolio = getPortfolio()?.slice(0, 6);

	return (
		<section className="h5-case-study-section">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="sec-heading style-4">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								OUR CASE STUDIES
							</span>
							<h2 className="sec-title text-anim">
								Explore our outstanding client projects
							</h2>
						</div>
						<Swiper
							initialSlide={2}
							slidesPerView={1}
							spaceBetween={20}
							loop={true}
							loopAdditionalSlides={2}
							speed={1000}
							autoplay={{
								delay: 5000,
							}}
							pagination={{
								el: ".swiper_pagination",
								clickable: true,
							}}
							breakpoints={{
								992: {
									slidesPerView: 2,
									spaceBetween: 30,
								},
							}}
							modules={[Autoplay, Pagination]}
							className="h5-case-study-slider swiper-container"
						>
							{portfolio?.length
								? portfolio?.map((portfolioSingle, idx) => (
										<SwiperSlide key={idx} className="h5-case-study-item">
											<PortfolioCard5 portfolio={portfolioSingle} idx={idx} />
										</SwiperSlide>
								  ))
								: ""}
							<div className="swiper_pagination"></div>
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolios5;
