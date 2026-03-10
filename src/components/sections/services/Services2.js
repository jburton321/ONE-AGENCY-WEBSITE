"use client";
import ServiceCard2 from "@/components/shared/cards/ServiceCard2";
import getALlServices from "@/libs/getALlServices";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Services2 = () => {
	const services = getALlServices()?.slice(0, 4);

	return (
		<section className="tj-service-section-two section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-2">
							<div className="sec-text">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
									// Transformative solution
								</span>
								<h2 className="sec-title text-anim">
									Get our comprehensive service offerings
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
							speed={1000}
							pagination={{
								el: ".service-pagination",
								clickable: true,
							}}
							navigation={{ nextEl: ".slider-next", prevEl: ".slider-prev" }}
							autoplay={{
								delay: 5000,
								disableOnInteraction: true,
							}}
							breakpoints={{
								768: {
									slidesPerView: 2,
								},
								992: {
									slidesPerView: 3,
								},
							}}
							modules={[Pagination, Navigation, Autoplay]}
							className="swiper-container tj-service-slider"
							wrapperClass="rightSwipeWrap"
						>
							{services?.length
								? services?.map((service, idx) => (
										<SwiperSlide key={idx} className="right-swipe">
											<ServiceCard2 service={service} idx={idx} />
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

export default Services2;
