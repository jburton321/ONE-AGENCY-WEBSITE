"use client";
import TeamCard5 from "@/components/shared/cards/TeamCard5";
import getTeamMembers from "@/libs/getTeamMembers";
import itemScrollAnimate from "@/libs/itemScrollAnimate";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Team5 = () => {
	const teamMembers = getTeamMembers()?.slice(0, 4);
	const animContainerRef = useRef();
	useGSAP(
		() => {
			itemScrollAnimate(animContainerRef);
		},
		{ scope: animContainerRef }
	);
	return (
		<section ref={animContainerRef} className="h8-team-section section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading text-center">
							<div className="sec-text">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
									Meet our team
								</span>
								<h2 className="sec-title text-anim">
									Decades of our combined consultant expert
								</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="row rg-30">
					{teamMembers?.length
						? teamMembers.map((teamMember, idx) => (
								<div key={idx} className="col-xl-3 col-md-6 col-sm-6">
									<TeamCard5 teamMember={teamMember} />
								</div>
						  ))
						: ""}
				</div>
			</div>
		</section>
	);
};

export default Team5;
