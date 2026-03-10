import Link from "next/link";
import ProgressBar from "../progress/ProgressBar";

const TeamCard4 = ({ teamMember, idx, currentTabIdx }) => {
	const { id, name, desig, img } = teamMember || {};
	return (
		<div
			className={`h6-tab-content ${idx === currentTabIdx ? "active" : ""}`}
			id={`tab-${idx}`}
		>
			<div className="h6-tab-info">
				<div className="h6-tab-left">
					<div className="h6-tab-left-content">
						<h3 className="title">{name}</h3>
						<span className="sub-title">{desig}</span>
						<div className="tj-socials">
							<ul>
								<li>
									<Link href="https://www.facebook.com">
										<i className="fa-brands fa-facebook-f"></i>
									</Link>
								</li>
								<li>
									<Link href="https://www.instagram.com">
										<i className="fa-brands fa-instagram"></i>
									</Link>
								</li>
								<li>
									<Link href="https://x.com">
										<i className="fa-brands fa-twitter"></i>
									</Link>
								</li>
								<li>
									<Link href="https://www.linkedin.com">
										<i className="fa-brands fa-linkedin-in"></i>
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="qr-image">
						<img
							className="qr-code"
							src="/images/shapes/qr-code.svg"
							alt="QR Code"
						/>
					</div>
				</div>
				<div className="h6-tab-right">
					<p className="mission">
						ONE Agency hyperscales digital growth through customer acquisition
						and performance creative. We are committed to delivering exceptional
						value through strategic insight and innovative approaches. We
						empower brands of all sizes. Our team specializes in rapid,
						actionable results and real-time visibility in myONE Dash.
					</p>
					<div className="progress-style-2 style-6">
						<div className="proggess-item">
							<div className="proggess-circle">
								<ProgressBar size={140} value={88} />
							</div>
							<div className="proggess-text">
								<span className="sub-title">Performance marketing</span>
							</div>
						</div>
						<div className="proggess-item">
							<div className="proggess-circle">
								<ProgressBar size={140} value={75} />
							</div>
							<div className="proggess-text">
								<span className="sub-title">Clients communication</span>
							</div>
						</div>
					</div>
					<div className="shape">
						<img src={"/images/shapes/h6-team-shape.svg"} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamCard4;
