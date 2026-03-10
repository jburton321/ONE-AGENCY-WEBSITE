import ProgressItems from "@/components/shared/team/ProgressItems";
import getTeamMembers from "@/libs/getTeamMembers";
import Image from "next/image";
import Link from "next/link";

const TeamDetails1 = ({ currentItemId }) => {
	const items = getTeamMembers();
	const currentId = currentItemId;
	const currentItem = items?.find(({ id }) => currentId === id);
	const { name, desig, imgLarge } = currentItem || {};

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
								Hello, I am {name ? name : "Esther Howard"}
							</h2>
							<span
								className="team-details__desig wow fadeInUp"
								data-wow-delay="0.1s"
							>
								{desig ? desig : "Co. Founder"}
							</span>
							<p className="wow fadeInUp" data-wow-delay="0.3s">
								Our mission is to empowers businesses sizes thrive businesses ev
								changing marketplace We are committed to the delivering
								exceptional value through strategic inset innovative approaches.
								Our consulting of our missing empower.
							</p>
							<div
								className="team-details__contact-info wow fadeInUp"
								data-wow-delay="0.5s"
							>
								<ul>
									<li>
										<span>Email address</span>
										<Link href="mailto:support@solvior.com">
											support@solvior.com
										</Link>
									</li>
									<li>
										<span>Phone number</span>
										<Link href="tel:+8321890640">+1 (009) 544-7826</Link>
									</li>
								</ul>
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
							<div className="team-details__experience">
								<h4 className="team-details__subtitle text-anim">
									Work experience
								</h4>
								<p className="wow fadeInUp" data-wow-delay="0.1s">
									Our mission is to empowers businesses size to thrivie in ses
									ever changing marketplace We are committed to the delivering
									exceptionals the value thro strategic ins innovative
									approaches. Our consulting of our missing empowers businesses
									of all sizes Committed to the delivering exceptional in the
									values thro
								</p>
								<p className="wow fadeInUp" data-wow-delay="0.3s">
									Our mission is to empowers businesses size to thrivie in ses
									ever changing marketplace We are committed to the delivering
									exceptionals the value thro strategic ins innovative
									approaches. Our consulting of our missing empowers
								</p>
								<div
									className="team-details__experience__list wow fadeInUp"
									data-wow-delay="0.5s"
								>
									<ul>
										<li>
											<i className="tji-double-check"></i>
											<p>
												We believe that the human essential start any successful
												project.
											</p>
										</li>
										<li>
											<i className="tji-double-check"></i>
											<p>
												We believe that the human essential start any successful
												project.
											</p>
										</li>
										<li>
											<i className="tji-double-check"></i>
											<p>
												We believe that the human essential start any successful
												project.
											</p>
										</li>
										<li>
											<i className="tji-double-check"></i>
											<p>
												We believe that the human essential start any successful
												project.
											</p>
										</li>
									</ul>
								</div>
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
