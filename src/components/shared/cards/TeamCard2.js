import Image from "next/image";
import Link from "next/link";

const TeamCard2 = ({ teamMember }) => {
	const { id, name, desig, img } = teamMember || {};
	return (
		<div className="team-item style-2 itemScrollAnimate">
			<div className="team-images">
				<Image
					src={img ? img : "/images/team/team-1.webp"}
					alt="Images"
					width={462}
					height={570}
					style={{ height: "auto" }}
				/>
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
			<div className="team-content">
				<div className="team-text">
					<h5 className="title">
						<Link href={`/team/${id}`}>{name}</Link>
					</h5>
					<span className="sub-title">{desig}</span>
				</div>
				<Link className="team-btn" href={`/team/${id}`}>
					<i className="tji-arrow-right"></i>
				</Link>
			</div>
		</div>
	);
};

export default TeamCard2;
