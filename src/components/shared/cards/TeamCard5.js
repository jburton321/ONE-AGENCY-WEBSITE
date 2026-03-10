import Link from "next/link";

const TeamCard5 = ({ teamMember }) => {
	const { id, name, desig, img } = teamMember || {};
	return (
		<div className="team-item style-5 itemScrollAnimate">
			<div className="team-images">
				<img src={img ? img : "/images/team/team-1.webp"} alt="Images" />
			</div>
			<div className="team-content">
				<div className="team-text">
					<h5 className="title">
						<Link href={`/team/${id}`}>{name}</Link>
					</h5>
					<span className="sub-title">{desig}</span>
				</div>
				<p className="desc">
					Changing marketplace business environment, the key to success lies. In
					today dynamic.
				</p>
				<div className="team-share">
					<ul>
						<li>
							<Link href="https://www.linkedin.com/">
								<i className="fa-brands fa-linkedin-in"></i>
							</Link>
						</li>
						<li>
							<Link href="https://x.com/">
								<i className="fa-brands fa-twitter"></i>
							</Link>
						</li>
						<li>
							<Link href="https://www.instagram.com/">
								<i className="fa-brands fa-instagram"></i>
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
		</div>
	);
};

export default TeamCard5;
