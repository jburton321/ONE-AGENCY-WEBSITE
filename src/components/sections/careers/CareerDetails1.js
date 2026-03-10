import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import getCareers from "@/libs/getCareers";
import getPreviousNextItem from "@/libs/getPreviousNextItem";
import Link from "next/link";

const CareerDetails1 = ({ currentItemId }) => {
	const items = getCareers();
	const currentId = currentItemId;
	const { prevId, nextId, currentItem, isPrevItem, isNextItem } =
		getPreviousNextItem(items, currentId);
	const { title, iconName, category, need, location } = currentItem || {};

	return (
		<section className="tj-careers-details section-space">
			<div className="container">
				<div className="row rg-50">
					<div className="col-lg-8">
						<div className="tj-post-wrapper">
							<div className="tj-post-single-post">
								{/* <!-- top content --> */}
								<div className="tj-careers-top mb-30">
									<div className="tj-careers-top-icon">
										<i className={iconName ? iconName : "tji-manage"}></i>
									</div>
									<div className="tj-careers-top-content">
										<div className="tj-careers-tag">
											<span>{category}</span> <span>{need}</span>
										</div>
										<h3 className="tj-careers-top-title text-anim">{title}</h3>
										<span className="location">
											<i className="tji-location"></i>
											{location}
										</span>
									</div>
								</div>
								{/* <!-- content --> */}
								<div className="tj-entry-content">
									<h4 className="text-anim">Job Description</h4>
									<p className="wow fadeInUp" data-wow-delay="0.1s">
										ONE Agency hyperscales digital growth through customer
										acquisition, performance creative and MarTech. We deliver a
										symphony of digital performance and actionable data
										analytics for brands of all sizes. Committed to delivering
										exceptional value through our proprietary tech stack and
										strategic, innovative approaches. We empower brands to
										thrive in changing marketplaces.
									</p>
									<p className="wow fadeInUp" data-wow-delay="0.3s">
										ONE Agency is your ultimate new customer acquisition, UX/CX
										and MarTech performance agency partner. We are committed to
										delivering exceptional value through strategic insight.
									</p>
									<div className="tj-check-list">
										<h4 className="text-anim">Requirements</h4>
										<p className="wow fadeInUp" data-wow-delay="0.1s">
											Supporting live media spend, impressions and lead data.
											We begin with an in-depth analysis of your digital
											performance and audience to identify quick wins and
											longer-term objectives. From there, we work with you to
											define clear, actionable goals.
										</p>
									</div>
									<div
										className="service-check-list mt-4 mb-4 wow fadeInUp"
										data-wow-delay="0.3s"
									>
										<ul>
											<li>
												<i className="tji-double-check"></i>
												<span>
													Clear vision for paid media, creative and conversion
													optimization.
												</span>
											</li>
											<li>
												<i className="tji-double-check"></i>
												<span>
													Ability to anticipate and respond to performance and
													market changes.
												</span>
											</li>
											<li>
												<i className="tji-double-check"></i>
												<span>
													Data-driven decision-making for campaign and strategy
													execution.
												</span>
											</li>
											<li>
												<i className="tji-double-check"></i>
												<span>
													Structured approach to achieving digital growth goals.
												</span>
											</li>
										</ul>
									</div>
									<p className="wow fadeInUp" data-wow-delay="0.3s">
										ONE Agency helps brands transform the future of intelligent
										marketing. We are committed to delivering exceptional
										results through our strategic insight and innovative
										approaches. Our team empowers businesses of all sizes to
										deliver exceptional performance.
									</p>
									<div className="tj-check-list">
										<h4 className="text-anim">Responsibilities</h4>
										<p className="wow fadeInUp" data-wow-delay="0.1s">
											ONE Agency hyperscales digital growth through customer
											acquisition and performance creative. We are committed
											to delivering exceptional value through our strategic
											insight. Committed to delivering exceptional value through our proprietary tech stack and data analytics.
										</p>
										<ul className="wow fadeInUp" data-wow-delay="0.3s">
											<li>
												<i className="tji-double-check"></i> Discover our
												expertise
											</li>
											<li>
												<i className="tji-double-check"></i> Process and
												commitment to excellence
											</li>
											<li>
												<i className="tji-double-check"></i> Meet our team and
												learn
											</li>
											<li>
												<i className="tji-double-check"></i> Join ONE Agency
											</li>
										</ul>
									</div>
								</div>
								{/* <!-- post tag and share --> */}
								<div
									className="tj-post-details_tags_share wow fadeInUp"
									data-wow-delay="0.1s"
								>
									<div className="tj-tags tagcloud">
										<span className="tag__title">Tags:</span>
										<Link href="/careers">Digital Growth</Link>
										<Link href="/careers">Performance</Link>
										<Link href="/careers">MarTech</Link>
									</div>
									<div className="tj-socials_share">
										<span className="tag__title">Share:</span>
										<Link href="https://www.facebook.com/" title="Facebook">
											<i className="fa-brands fa-facebook-f"></i>
										</Link>
										<Link href="https://x.com/" title="Twitter">
											<i className="fab fa-x-twitter"></i>
										</Link>
										<Link href="https://www.linkedin.com/" title="Linkedin">
											<i className="fa-brands fa-linkedin-in"></i>
										</Link>
										<Link href="https://www.pinterest.com/" title="Pinterest">
											<i className="fa-brands fa-pinterest-p"></i>
										</Link>
									</div>
								</div>
							</div>

							{/* <!-- post navigation --> */}
							<div
								className="tj-post__navigation mb-0 wow fadeInUp"
								data-wow-delay="0.3s"
							>
								{/* <!-- previous post --> */}
								<div
									className="tj-nav__post previous"
									style={{ visibility: isPrevItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav prev_post">
										<Link href={isPrevItem ? `/careers/${prevId}` : "#"}>
											<span>
												<i className="tji-arrow-left"></i>
											</span>
											Previous
										</Link>
									</div>
								</div>
								<Link href={"/careers"} className="tj-nav-post__grid">
									<i className="tji-square-cube"></i>
								</Link>
								{/* <!-- next post --> */}
								<div
									className="tj-nav__post next"
									style={{ visibility: isNextItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav next_post">
										<Link href={isNextItem ? `/careers/${nextId}` : "#"}>
											Next
											<span>
												<i className="tji-arrow-right"></i>
											</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<aside className="tj-blog-sidebar">
							{/* <!-- Job information  --> */}
							<div
								className="tj-sidebar-widget wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<h5 className="tj-sidebar-widget-title">Job information</h5>
								<div className="project_catagory">
									<ul>
										<li>
											<span className="first-child">Category</span>
											<span>Digital marketing</span>
										</li>
										<li>
											<span className="first-child">Number</span>
											<span>8080UO</span>
										</li>
										<li>
											<span className="first-child">Company</span>
											<span>ONE Agency</span>
										</li>
										<li>
											<span className="first-child">Website</span>
											<span>oneagency.com</span>
										</li>
										<li>
											<span className="first-child">Salary</span>
											<span>$400-$550 / week</span>
										</li>
										<li>
											<span className="first-child">Vacancy</span>
											<span>03 Available</span>
										</li>
										<li>
											<span className="first-child">Apply on</span>
											<span>OCT 22, 2024</span>
										</li>
									</ul>
								</div>
							</div>
							{/* <!-- apply form --> */}
							<div
								className="tj-sidebar-widget wow fadeInUp"
								data-wow-delay="0.3s"
							>
								<h5 className="tj-sidebar-widget-title">Apply online</h5>
								<div className="tj-careers-form">
									<form action="#">
										<div className="form-input">
											<input
												type="text"
												name="cr_name"
												placeholder="Full name*"
											/>
										</div>
										<div className="form-input">
											<input
												type="email"
												name="cr_email"
												placeholder="Enter email*"
											/>
										</div>
										<div className="form-input">
											<input
												type="text"
												name="cr_phone"
												placeholder="Phone number*"
											/>
										</div>
										<div className="form-input">
											<textarea
												name="cr_cover_letter"
												placeholder="Cover letter*"
											></textarea>
										</div>
										<div className="form-input reduce">
											<label className="label" htmlFor="inputFile">
												Attach resume*
											</label>
											<input type="file" id="inputFile" />
										</div>
										<div className="tj-careers-button">
											<ButtonPrimary text={"Submit now"} type="submit" />
										</div>
									</form>
								</div>
							</div>
						</aside>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CareerDetails1;
