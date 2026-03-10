import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import TeamCard6 from "@/components/shared/cards/TeamCard6";
import getTeamMembers from "@/libs/getTeamMembers";

const Team6 = () => {
	const teamMembers = getTeamMembers()?.slice(0, 3);

	return (
		<section className="h9-team-section section-space">
			<div className="container">
				<div className="row rg-30">
					{teamMembers?.length
						? teamMembers.map((teamMember, idx) => (
								<div
									key={idx}
									className={`col-xl-3 col-md-6 col-sm-6 order-${
										idx + 2
									} order-xl-${idx === 0 ? 12 : idx + 1}`}
								>
									<TeamCard6 idx={idx} teamMember={teamMember} />
								</div>
						  ))
						: ""}

					<div className="col-xl-3 col-md-6 col-sm-6 order-1 order-xl-4">
						<div className="sec-heading style-2 ">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
								[ MEET OUR TEAMS ]
							</span>
							<h2 className="sec-title text-anim">Expert team members</h2>
							<div className="desc wow fadeInUp" data-wow-delay="0.4s">
								In today's dynamic business environment, the key to success
								strategics..
							</div>
							<div
								className="d-none d-sm-inline-flex wow fadeInUp"
								data-wow-delay="0.5s"
							>
								<ButtonPrimary
									text={"More members"}
									url={"/team"}
									className={"more_team"}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="row d-sm-none">
					<div className="col text-center">
						<ButtonPrimary
							text={"More members"}
							url={"/team"}
							className={"more_team"}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team6;
