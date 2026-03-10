import ProgressItems from "@/components/shared/team/ProgressItems";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import getTeamMembers from "@/libs/getTeamMembers";
import Image from "next/image";
import Link from "next/link";

const TeamDetails1 = ({ currentItemId }) => {
	const items = getTeamMembers();
	const currentId = currentItemId;
	const currentItem = items?.find(({ id }) => currentId === id);
	const { name, desig, imgLarge, bio } = currentItem || {};

	return (
		<section className="team-details">
			<div className="container">
				<div className="row justify-content-center">
					{/* <!--  left --> */}
					<div className="col-12 col-md-8 col-lg-5 ">
						<div className="tj-sticky-top">
							<div
								className="team-details__img   hover:shine wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<Image
									src={imgLarge ? imgLarge : "/images/team/team-single.webp"}
									alt="team-member"
									width={645}
									height={796}
									style={{ height: "auto" }}
								/>
							</div>
						</div>
					</div>
					{/* <!-- right --> */}
					<div className="col-12  col-lg-7 ">
						<div className="team-details__content">
							<h2 className="team-details__name text-anim">
								{name ? name : "Team member"}
							</h2>
							<span
								className="team-details__desig wow fadeInUp"
								data-wow-delay="0.1s"
							>
								{desig ? desig : ""}
							</span>
							{bio ? (
								<p className="wow fadeInUp" data-wow-delay="0.3s">
									{bio}
								</p>
							) : null}
							<div
								className="team-details__contact-info wow fadeInUp"
								data-wow-delay="0.5s"
							>
								<ButtonPrimary text={"Contact ONE Agency"} url={"/contact"} />
							</div>
							<div className="tj-socials wow fadeInUp" data-wow-delay="0.7s">
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
							<ProgressItems />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TeamDetails1;
