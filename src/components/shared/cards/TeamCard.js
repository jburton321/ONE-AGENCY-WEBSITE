import Image from "next/image";
import Link from "next/link";

const TeamCard = ({ teamMember }) => {
	const { id, name, desig, img } = teamMember || {};
	return (
		<div className="team-item itemScrollAnimate">
			<div className="team-images">
				<Image
					src={img ? img : "/images/team/team-1.webp"}
					alt="Images"
					width={462}
					height={570}
					style={{ width: "100%", height: "auto" }}
				/>
			</div>
			<div className="team-content">
				<div className="team-text">
					<h5 className="title">
						<Link href={`/team/${id}`}>{name}</Link>
					</h5>
					<span className="sub-title">{desig}</span>
				</div>
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

export default TeamCard;
