"use client";
import ServiceCard4 from "@/components/shared/cards/ServiceCard4";
import getALlServices from "@/libs/getALlServices";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Services4 = () => {
	const services = getALlServices()?.slice(0, 4);

	return (
		<section className="tj-service-section-two section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-3">
							<div className="sec-text">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
									// Transformative solution
								</span>
								<h2 className="sec-title text-anim">
									In comprehensive service offer.
								</h2>
							</div>
							<div
								className="swiper_navigations service-navigation d-none d-md-inline-flex wow fadeInUp"
								data-wow-delay="0.3s"
							>
								<div className="navigation slider-prev">
									<i className="tji-arrow-left"></i>
								</div>
								<div className="navigation slider-next">
									<i className="tji-arrow-right"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<Swiper
							spaceBetween={24}
							slidesPerView={1}
							loop={true}
							speed={1500}
							autoplay={{
								delay: 5000,
								disableOnInteraction: true,
							}}
							pagination={{
								el: ".service-pagination",
								clickable: true,
							}}
							navigation={{ nextEl: ".slider-next", prevEl: ".slider-prev" }}
							breakpoints={{
								768: {
									slidesPerView: 2,
								},
								992: {
									slidesPerView: 3,
								},
							}}
							modules={[Pagination, Navigation]}
							className="style-4  tj-service-slider leftSwipeWrap"
						>
							{services?.length
								? services?.map((service, idx) => (
										<SwiperSlide key={idx} className="left-swipe">
											<ServiceCard4 service={service} idx={idx} />
										</SwiperSlide>
								  ))
								: ""}
							<div className="swiper_pagination service-pagination"></div>
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services4;
