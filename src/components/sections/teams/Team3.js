import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import TeamCard3 from "@/components/shared/cards/TeamCard3";
import getTeamMembers from "@/libs/getTeamMembers";

const Team3 = () => {
	const teamMembers = getTeamMembers()?.slice(0, 4);
	return (
		<section className="h5-team-section">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="sec-heading-wrap">
							<div className="sec-heading style-4">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
									MEET OUR TEAMS
								</span>
								<h2 className="sec-title text-anim">Expert team members</h2>
							</div>
							<div className="desc">
								In today's dynamic business environment, the key to success
								strategics..
							</div>
							<ButtonPrimary
								text={"More members"}
								url={"/team"}
								className={"d-none d-lg-inline-flex"}
							/>
						</div>
					</div>
				</div>
				<div className="row rg-30">
					{teamMembers?.length
						? teamMembers.map((teamMember, idx) => (
								<div key={idx} className="col-xl-3 col-md-6 col-sm-6">
									<TeamCard3 teamMember={teamMember} idx={idx} />
								</div>
						  ))
						: ""}
				</div>
				<div className="row d-lg-none">
					<div className="col">
						<div className="teams_btn text-center">
							<ButtonPrimary text={"More members"} url={"/team"} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team3;
