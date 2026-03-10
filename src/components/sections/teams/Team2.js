"use client";
import TeamCard2 from "@/components/shared/cards/TeamCard2";
import getTeamMembers from "@/libs/getTeamMembers";
import itemScrollAnimate from "@/libs/itemScrollAnimate";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Team2 = () => {
	const teamMembers = getTeamMembers()?.slice(0, 4);
	const animContainerRef = useRef();
	useGSAP(
		() => {
			itemScrollAnimate(animContainerRef);
		},
		{ scope: animContainerRef }
	);
	return (
		<section
			ref={animContainerRef}
			className="tj-team-section-two section-space"
		>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-3 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								// Meet our team
							</span>
							<h2 className="sec-title text-anim">Expert team members</h2>
						</div>
					</div>
				</div>
				<div className="row rg-30">
					{teamMembers?.length
						? teamMembers.map((teamMember, idx) => (
								<div key={idx} className="col-xl-3 col-md-6 col-sm-6">
									<TeamCard2 teamMember={teamMember} />
								</div>
						  ))
						: ""}
				</div>
			</div>
		</section>
	);
};

export default Team2;
