"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import TeamCard7 from "@/components/shared/cards/TeamCard7";
import getTeamMembers from "@/libs/getTeamMembers";
import { useState } from "react";

const Team7 = () => {
	const teamMembers = getTeamMembers()?.slice(0, 4);
	const [currentIndex, setCurrentIndex] = useState(0);
	const handleCurrentIndex = idx => {
		setCurrentIndex(idx);
	};
	return (
		<section className="h10-team-section section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap">
							<div className="sec-heading style-2">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
									[ EXPERT TEAM MEMBER ]
								</span>
								<h2 className="sec-title text-anim">
									Decades of our combined consultant expert
								</h2>
							</div>
							<div
								className="d-none d-lg-inline-flex wow fadeInUp"
								data-wow-delay="0.5s"
							>
								<ButtonPrimary
									text={"More teams"}
									url={"/team"}
									className={"more_team"}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="row rg-30">
					<div className="col-12">
						<div className="h10-team-wrapper">
							{teamMembers?.length
								? teamMembers.map((teamMember, idx) => (
										<TeamCard7
											key={idx}
											teamMember={teamMember}
											idx={idx}
											handleCurrentIndex={handleCurrentIndex}
											currentIndex={currentIndex}
										/>
								  ))
								: ""}
						</div>
					</div>
				</div>
				<div className="row d-lg-none">
					<div className="col">
						<div className="teams_btn text-center">
							<ButtonPrimary text={"More teams"} url={"/team"} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team7;
