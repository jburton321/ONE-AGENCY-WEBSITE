"use client";
import PortfolioCard8 from "@/components/shared/cards/PortfolioCard8";
import getPortfolio from "@/libs/getPortfolio";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Portfolios8 = () => {
	const portfolio = getPortfolio()?.slice(0, 6);

	return (
		<section className="h8-case-study">
			<div className="container ">
				<div className="row">
					<div className="col">
						<div className="sec-heading h8-section-heading style-4">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								OUR CASE STUDIES
							</span>
							<h2 className="sec-title text-anim">
								Explore our outstanding client projects
							</h2>
						</div>

						<div className="wow fadeInUp" data-wow-delay="0.4s">
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
								className="h8-case-study-slider swiper-container"
							>
								{portfolio?.length
									? portfolio?.map((portfolioSingle, idx) => (
											<SwiperSlide key={idx} className="h8-case-study-item">
												<PortfolioCard8 portfolio={portfolioSingle} idx={idx} />
											</SwiperSlide>
									  ))
									: ""}
								<div className="swiper_pagination"></div>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolios8;
