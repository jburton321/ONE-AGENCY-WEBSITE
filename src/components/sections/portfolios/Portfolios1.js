"use client";
import PortfolioCard1 from "@/components/shared/cards/PortfolioCard1";
import getPortfolio from "@/libs/getPortfolio";
import { gsap } from "@/libs/gsap.config";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Portfolios1 = () => {
	const [showCursor, setShowCursor] = useState(false);
	const animContainerRef = useRef();
	const portfolio = getPortfolio();

	const { contextSafe } = useGSAP(
		() => {
			// Center the cursor
			gsap.set(".tj-cursor", { xPercent: -50, yPercent: -50 });
		},
		{ scope: animContainerRef }
	);
	const handlePointerMove = contextSafe(e => {
		gsap.to(".tj-cursor", {
			duration: 0,
			x: e.clientX,
			y: e.clientY,
		});
	});
	return (
		<section
			onPointerMove={handlePointerMove}
			ref={animContainerRef}
			className="tj-project-section"
		>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								Case studies
							</span>
							<h2 className="sec-title text-anim">High-performing campaigns</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<div
							onMouseEnter={() => setShowCursor(true)}
							onMouseLeave={() => setShowCursor(false)}
							className="project-slider-one"
						>
							<Swiper
								slidesPerView={1}
								spaceBetween={30}
								loop={true}
								speed={1000}
								autoplay={{
									delay: 5000,
									disableOnInteraction: false,
								}}
								breakpoints={{
									576: {
										slidesPerView: 2,
									},
									992: {
										slidesPerView: 3,
									},
									1400: {
										slidesPerView: 4,
									},
								}}
								modules={[Autoplay]}
								className="project-slider swiper-container"
								wrapperClass="leftSwipeWrap"
							>
								{portfolio?.length
									? portfolio?.map((portfolioSingle, idx) => (
											<SwiperSlide key={idx} className="left-swipe">
												<PortfolioCard1 key={idx} portfolio={portfolioSingle} />
											</SwiperSlide>
									  ))
									: ""}
							</Swiper>
						</div>
						<div
							className="tj-cursor"
							style={{
								opacity: showCursor ? 1 : 0,
								visibility: showCursor ? "visible" : "hidden",
							}}
						>
							<i className="tji-angle-left"></i>Drag
							<i className="tji-angle-right"></i>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolios1;
