"use client";
import PortfolioCard7 from "@/components/shared/cards/PortfolioCard7";
import getPortfolio from "@/libs/getPortfolio";
import {
	Autoplay,
	EffectCoverflow,
	Navigation,
	Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Portfolios7 = () => {
	const portfolio = getPortfolio()?.slice(0, 6);

	return (
		<section className="h7-project section-space">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="sec-heading h7-section-heading style-4">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								{" "}
								OUR CASE STUDIES{" "}
							</span>
							<h2 className="sec-title text-anim">
								Explore our outstanding client projects
							</h2>
						</div>
						<div className="h7-project-inner">
							<div className="h7-case-study-slider-wrapper">
								<Swiper
									slidesPerView={1}
									spaceBetween={-100}
									loop={true}
									speed={1000}
									effect="coverflow"
									grabCursor={true}
									centeredSlides={true}
									freeMode={true}
									loopAdditionalSlides={2}
									autoplay={{
										delay: 5000,
										disableOnInteraction: true,
									}}
									coverflowEffect={{
										rotate: 0,
										stretch: 0,
										depth: 800,
										modifier: 1,
										slideShadows: false,
									}}
									pagination={{
										el: ".swiper_pagination",
										clickable: true,
									}}
									navigation={{
										nextEl: ".tj-project-nav-next",
										prevEl: ".tj-project-nav-prev",
									}}
									modules={[Autoplay, Pagination, EffectCoverflow, Navigation]}
									className="h7-case-study-slider swiper-container"
								>
									{portfolio?.length
										? portfolio?.map((portfolioSingle, idx) => (
												<SwiperSlide key={idx} className="h5-case-study-item">
													<PortfolioCard7
														portfolio={portfolioSingle}
														idx={idx}
													/>
												</SwiperSlide>
										  ))
										: ""}
									<div className="swiper_pagination"></div>
								</Swiper>
							</div>
							<div className="tj-project-nav tj-project-nav-prev">
								{" "}
								<i className="tji-arrow-left"></i>
							</div>
							<div className="tj-project-nav tj-project-nav-next">
								{" "}
								<i className="tji-arrow-right"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolios7;
