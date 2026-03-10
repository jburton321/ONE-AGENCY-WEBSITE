"use client";
import ServiceCard9 from "@/components/shared/cards/ServiceCard9";
import getALlServices from "@/libs/getALlServices";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Services9 = () => {
	const services = getALlServices()?.slice(0, 4);

	return (
		<section className="h9-services-section section-space">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="sec-heading style-2 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								[ TRANSFORMATIVE SOLUTION ]
							</span>
							<h2 className="sec-title text-anim">
								Explore comprehensive service offer.
							</h2>
						</div>
						<div className="wow fadeInUp" data-wow-delay="0.3s">
							<Swiper
								spaceBetween={30}
								slidesPerView={1}
								loop={true}
								speed={1500}
								pagination={{
									el: ".service-pagination",
									clickable: true,
								}}
								autoplay={{
									delay: 5000,
								}}
								breakpoints={{
									768: {
										slidesPerView: 2,
									},
									992: {
										slidesPerView: 3,
									},
								}}
								modules={[Pagination, Autoplay]}
								className="h9-services-slider swiper-containe"
							>
								{services?.length
									? services?.map((service, idx) => (
											<SwiperSlide key={idx} className="h6-services-item">
												<ServiceCard9 service={service} idx={idx} />
											</SwiperSlide>
									  ))
									: ""}
								<div className="swiper_pagination service-pagination"></div>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services9;
