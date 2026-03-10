import Link from "next/link";

const TeamCard7 = ({ teamMember, idx, currentIndex, handleCurrentIndex }) => {
	const { id, name, desig, img } = teamMember || {};
	return (
		<div
			className={`h10-team-item  wow fadeInLeftBig ${
				currentIndex === idx ? "active" : ""
			}`}
			onMouseEnter={() => handleCurrentIndex(idx)}
			data-wow-delay={`0.${idx + 2}s`}
		>
			<div className="team-images">
				<img src={img ? img : "/images/team/team-1.webp"} alt="Images" />
			</div>
			<div className="team-content">
				<div className="team-content-inner">
					<div className="team-text">
						<h5 className="title">
							<Link href={`/team/${id}`}>{name}</Link>
						</h5>
						<span className="sub-title">{desig}</span>
					</div>
					<p className="desc">
						Change markets business environment, the key to success lies. In
						today dnamic environment, the success.
					</p>
					<div className="team-share">
						<span className="sub-title">Follow me:</span>
						<ul>
							<li>
								<Link href="https://www.facebook.com/">
									<i className="fa-brands fa-facebook-f"></i>
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
								<Link href="https://www.linkedin.com/">
									<i className="fa-brands fa-linkedin-in"></i>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamCard7;
