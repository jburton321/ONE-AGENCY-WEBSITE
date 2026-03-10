import Link from "next/link";

const TeamCard3 = ({ teamMember, idx }) => {
	const { id, name, desig, img } = teamMember || {};
	return (
		<div
			className="h5-team-item wow fadeInUp"
			data-wow-delay={`0.${idx + 3 + idx}s`}
		>
			<div className="h5-team-item-inner">
				<div className="team_image">
					<img src={img ? img : "/images/team/team-1.webp"} alt="Images" />
				</div>

				<div className="team-content">
					<h5 className="title">
						<Link href={`/team/${id}`}>{name}</Link>
					</h5>
					<span className="designation">{desig}</span>
				</div>

				<ul className="team-socials">
					<li>
						<Link href="https://www.linkedin.com/">
							<i className="fa-brands fa-linkedin-in"></i>
						</Link>
					</li>
					<li>
						<Link href="https://www.instagram.com/">
							<i className="fa-brands fa-instagram"></i>
						</Link>
					</li>
					<li>
						<Link href="https://x.com/">
							<i className="fa-brands fa-twitter"></i>
						</Link>
					</li>
					<li>
						<Link href="https://www.facebook.com/">
							<i className="fa-brands fa-facebook-f"></i>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default TeamCard3;
