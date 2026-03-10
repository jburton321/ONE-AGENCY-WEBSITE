"use client";

import TeamCard4 from "@/components/shared/cards/TeamCard4";
import getTeamMembers from "@/libs/getTeamMembers";
import { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Team4 = () => {
	const teamMembers = getTeamMembers()?.slice(0, 6);
	const [currentTabIdx, setcurrentTabIdx] = useState(0);
	return (
		<section className="h6-team-section section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-2 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.2s">
								// OUR TEAM MEMBERS
							</span>
							<h2 className="sec-title text-anim">
								Decades of our combined performance and creative expertise
							</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="h6-team-wrapper wow fadeInUp" data-wow-delay="0.3s">
							<Swiper
								slidesPerView={1}
								spaceBetween={24}
								loop={false}
								speed={1500}
								breakpoints={{
									320: {
										spaceBetween: 15,
										slidesPerView: 2.5,
									},
									576: {
										slidesPerView: 3.5,
									},
									768: {
										slidesPerView: 4.2,
									},
									1024: {
										slidesPerView: 5.5,
									},
									1200: {
										slidesPerView: 6,
									},
								}}
								modules={[Autoplay]}
								className="h6-tabs team-tab-slider swiper-container"
							>
								{teamMembers?.length
									? teamMembers?.map(({ img }, idx) => (
											<SwiperSlide key={idx}>
												<div
													className={`h6-tab ${
														idx === currentTabIdx ? "active" : ""
													}`}
													data-index={idx}
													onClick={() => setcurrentTabIdx(idx)}
												>
													<div className="h6-tab-image">
														<img
															src={img ? img : "/images/team/team-1.webp"}
															alt=""
														/>
													</div>
												</div>
											</SwiperSlide>
									  ))
									: ""}
							</Swiper>
							{teamMembers?.length
								? teamMembers?.map((teamMember, idx) => (
										<TeamCard4
											key={idx}
											teamMember={teamMember}
											idx={idx}
											currentTabIdx={currentTabIdx}
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

export default Team4;
