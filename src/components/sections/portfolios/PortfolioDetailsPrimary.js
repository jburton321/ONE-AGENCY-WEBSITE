"use client";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Image from "next/image";
import Link from "next/link";
import CtaSidebar from "../cta/CtaSidebar";
const PortfolioDetailsPrimary = ({ option }) => {
	const { prevId, nextId, currentItem, isPrevItem, isNextItem } = option || {};
	const { title, titleLarge, id, imgLarge } = currentItem || {};

	return (
		<section className="tj-post-area section-space">
			<div className="container">
				<div className="row rg-50">
					<div className="col-lg-8">
						<div className="tj-post-wrapper">
							<article className="tj-post-single-post">
								<div
									className="tj-post-thumb hover:shine wow fadeInUp"
									data-wow-delay="0.1s"
								>
									<Image
										src={
											imgLarge ? imgLarge : "/images/project/tj-project-1.webp"
										}
										alt="post-image"
										width={870}
										height={498}
										style={{ height: "auto" }}
									/>
								</div>
								<div
									className="tj-post-meta wow fadeInUp"
									data-wow-delay="0.1s"
								>
									<ul>
										<li>
											<Link href="#" className="active">
												Business
											</Link>
										</li>
										<li>
											<Link href="#">Growth</Link>
										</li>
									</ul>
								</div>
								<h3 className="tj-post-title text-anim">
									{titleLarge
										? titleLarge
										: "Transforming operational efficiency with start edge Solutions for businesses"}
								</h3>
								<div className="tj-entry-content">
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
										<h4 className="text-anim">Projects overview</h4>
										<p className="wow fadeInUp" data-wow-delay="0.5s">
											Develop and propose state-of-the-art solutions, including
											technology upgrades, process reengineering, and automation
											strategies, tailored to your business needs. Oversee the
											deployment and integration of new systems and
											technologies, ensuring minimal disruption to your ongoing
											operations and seamless adaptation. Provide comprehensive
											training for your team to ensure effective use of new
											systems and ongoing support to address any issues or
											challenges.Establish metrics and benchmarks to monitor the
											impact of the new solutions.
										</p>
										<ul className="ps-0 wow fadeInUp" data-wow-delay="0.6s">
											<li>
												<i className="tji-double-check"></i> Streamline
												operations to reduce waste and enhance productivity.
											</li>
											<li>
												<i className="tji-double-check"></i> Lower operational
												costs through automation and optimized processes.
											</li>
											<li>
												<i className="tji-double-check"></i> Improve overall
												business performance with advanced solutions.
											</li>
											<li>
												<i className="tji-double-check"></i> Benefit from
												professional insights the transformation process.
											</li>
										</ul>
									</div>
									<div
										className="tj-post-thumb mb-0 hover:shine wow fadeInUp"
										data-wow-delay="0.7s"
									>
										<Image
											src="/images/blog/tj-blog-4.webp"
											alt="post-image"
											width={870}
											height={498}
											style={{ height: "auto" }}
										/>
										<PopupVideo>
											<Link
												className="play-btn glightbox video-popup"
												href="https://www.youtube.com/watch?v=eEzD-Y97ges"
											>
												<i className="fa-sharp fa-solid fa-play"></i>
											</Link>
										</PopupVideo>
									</div>
									<h4 className="text-anim">Final result</h4>
									<p className="wow fadeInUp" data-wow-delay="0.3s">
										ONE Agency transforms the future of intelligent marketing.
										We deliver a symphony of digital performance and empower
										brands of all sizes to thrive through customer acquisition,
										performance creative and actionable data analytics.
										Committed to delivering exceptional value.
									</p>
									<p className="wow fadeInUp" data-wow-delay="0.5s">
										Hyperscale digital growth through your ultimate new customer
										acquisition, UX/CX and MarTech performance agency partner.
										We are ONE Agency. Request Demo to get started.
									</p>
								</div>
							</article>

							{/* <!-- post navigation --> */}
							<div
								className="tj-post__navigation mb-0 wow fadeInUp"
								data-wow-delay="0.1s"
							>
								{/* <!-- previous post --> */}
								<div
									className="tj-nav__post previous"
									style={{ visibility: isPrevItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav prev_post">
										<Link href={isPrevItem ? `/portfolios/${prevId}` : "#"}>
											<span>
												<i className="tji-arrow-left"></i>
											</span>
											Previous
										</Link>
									</div>
								</div>
								<Link href={"/portfolios"} className="tj-nav-post__grid">
									<i className="tji-square-cube"></i>
								</Link>
								{/* <!-- next post --> */}
								<div
									className="tj-nav__post next"
									style={{ visibility: isNextItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav next_post">
										<Link href={isNextItem ? `/portfolios/${nextId}` : "#"}>
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
							{/* <!-- category --> */}
							<div
								className="tj-sidebar-widget wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<h5 className="tj-sidebar-widget-title">
									Portfolio Information
								</h5>
								<div className="project_catagory">
									<ul>
										<li>
											<span className="first-child">Clients</span>
											<span>Albert Buttler</span>
										</li>
										<li>
											<span className="first-child">Portfolio</span>
											<span>Financial</span>
										</li>
										<li>
											<span className="first-child">Service</span>
											<span>Corporate</span>
										</li>
										<li>
											<span className="first-child">Category</span>
											<span>Marketing</span>
										</li>
										<li>
											<span className="first-child">Date</span>
											<span>08 March 2023</span>
										</li>
										<li>
											<span className="first-child">Share</span>
											<div className="share-socials">
												<Link href="https://www.facebook.com/" title="Facebook">
													<i className="fa-brands fa-facebook-f"></i>
												</Link>
												<Link href="https://x.com/" title="Twitter">
													<i className="fab fa-x-twitter"></i>
												</Link>
												<Link href="https://www.linkedin.com/" title="Linkedin">
													<i className="fa-brands fa-linkedin-in"></i>
												</Link>
												<Link
													href="https://www.pinterest.com/"
													title="Pinterest"
												>
													<i className="fa-brands fa-pinterest-p"></i>
												</Link>
											</div>
										</li>
									</ul>
								</div>
							</div>
							{/* <!-- cta --> */}
							<div
								className="tj-sidebar-widget wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<CtaSidebar />
							</div>
						</aside>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PortfolioDetailsPrimary;
