import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import BlogSidebar from "@/components/shared/sidebar/BlogSidebar";
import makePath from "@/libs/makePath";
import Image from "next/image";
import Link from "next/link";

const BlogDetailsPrimary = ({ option }) => {
	const { prevId, nextId, currentItem, isPrevItem, isNextItem } = option || {};
	const { title, id, detailsImg, tags } = currentItem || {};
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
											detailsImg ? detailsImg : "/images/blog/tj-blog-1.webp"
										}
										alt="post-image"
										width={870}
										height={498}
										style={{ height: "auto" }}
									/>
								</div>
								<h3 className="tj-post-title text-anim">{title}</h3>
								<div
									className="blog-category-two wow fadeInUp"
									data-wow-delay="0.3s"
								>
									<div className="category-item">
										<div className="cate-images">
											<Image
												src="/images/blog/author-1.png"
												alt="Images"
												width={64}
												height={64}
											/>
										</div>
										<div className="cate-text">
											<span className="degination">Authored by</span>
											<h6 className="title">
												<Link href={`/blogs/${id}`}>Burdee Nicolas</Link>
											</h6>
										</div>
									</div>
									<div className="category-item">
										<div className="cate-icons">
											<i className="tji-calender"></i>
										</div>
										<div className="cate-text">
											<span className="degination">Date Released</span>
											<h6 className="text">29 Sep,2024</h6>
										</div>
									</div>
									<div className="category-item">
										<div className="cate-icons">
											<i className="tji-coments"></i>
										</div>
										<div className="cate-text">
											<span className="degination">Comments</span>
											<h6 className="text">03 Comments</h6>
										</div>
									</div>
								</div>
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
									<blockquote className="wow fadeInUp" data-wow-delay="0.1s">
										<p>
											The greatest asset of a performance partner is the ability
											to ask the right questions and guide clients to discover
											their own path to digital growth.
										</p>
										<p>
											<cite>ONE Agency</cite>
										</p>
									</blockquote>
									<p className="wow fadeInUp" data-wow-delay="0.3s">
										We focus on outcomes and work backwards from your objectives:
										qualified leads, conversions and scalable growth. We deliver
										real-time visibility in myONE Dash and a proven methodology
										for customer acquisition and performance creative. All you
										need is ONE.
									</p>

									<div className="tj-check-list">
										<h4 className="text-anim">Key lessons for digital growth</h4>
										<p className="wow fadeInUp" data-wow-delay="0.1s">
											ONE Agency combines a proprietary tech stack, persuasive
											creative and actionable data analytics. We are committed
											to delivering exceptional value through strategic insight.
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
												<i className="tji-double-check"></i> Request Demo
											</li>
										</ul>
									</div>
									<div
										className="tj-post-thumb mb-0 hover:shine wow fadeInUp"
										data-wow-delay="0.1s"
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
									<h4 className="text-anim">Conclusions</h4>
									<p className="wow fadeInUp" data-wow-delay="0.1s">
										ONE Agency transforms the future of intelligent marketing.
										We deliver a symphony of digital performance and empower
										brands of all sizes to thrive through customer acquisition,
										performance creative and actionable data analytics.
										Committed to delivering exceptional value.
									</p>
									<p className="wow fadeInUp" data-wow-delay="0.3s">
										Hyperscale digital growth through your ultimate new customer
										acquisition, UX/CX and MarTech performance agency partner.
										We are ONE Agency. Request Demo to get started.
									</p>
								</div>
							</article>
							{/* <!-- post tag and share --> */}
							<div
								className="tj-post-details_tags_share wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<div className="tj-tags tagcloud">
									<span className="tag__title">Tags:</span>
									{tags?.length
										? tags?.map((tag, idx) => (
												<Link key={idx} href={`/blogs?tag=${makePath(tag)}`}>
													{tag}
												</Link>
										  ))
										: ""}
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
							{/* <!-- post navigation --> */}
							<div
								className="tj-post__navigation wow fadeInUp"
								data-wow-delay="0.3s"
							>
								{/* <!-- previous post --> */}
								<div
									className="tj-nav__post previous"
									style={{ visibility: isPrevItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav prev_post">
										<Link href={isPrevItem ? `/blogs/${prevId}` : "#"}>
											<span>
												<i className="tji-arrow-left"></i>
											</span>
											Previous
										</Link>
									</div>
								</div>
								<Link href={"/blogs"} className="tj-nav-post__grid">
									<i className="tji-square-cube"></i>
								</Link>
								{/* <!-- next post --> */}
								<div
									className="tj-nav__post next"
									style={{ visibility: isNextItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav next_post">
										<Link href={isNextItem ? `/blogs/${nextId}` : "#"}>
											Next
											<span>
												<i className="tji-arrow-right"></i>
											</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="tj-comments-container">
								<div className="tj-comments-wrap">
									<div className="comments-title">
										<h3 className="title">Comments (3)</h3>
									</div>
									<div className="tj-latest-comments">
										<ul>
											<li className="tj-comment">
												<div className="comment-content">
													<div className="comment-avatar">
														<Image
															src="/images/blog/author-1.png"
															alt="Image"
															width={64}
															height={64}
														/>
													</div>
													<div className="comments-header">
														<div className="avatar-name">
															<h5 className="title">
																<Link href={`/blogs/${id}`}>Jami Simth</Link>
															</h5>
														</div>
														<div className="comment-text">
															<span className="date">February 03, 2024</span>
															<Link className="reply" href={`/blogs/${id}`}>
																<i className="tji-reply"></i>Reply
															</Link>
														</div>
														<div className="desc">
															<p>
																ONE Agency delivers a symphony of digital
																performance. We help brands hyperscale through
																customer acquisition and performance creative.
																Real-time visibility in myONE Dash. Great post.
															</p>
														</div>
													</div>
												</div>
											</li>
											<li className="tj-comment">
												<ul className="children">
													<li className="tj-comment">
														<div className="comment-content">
															<div className="comment-avatar">
																<Image
																	src="/images/blog/author-2.png"
																	alt="Image"
																	width={64}
																	height={64}
																/>
															</div>
															<div className="comments-header">
																<div className="avatar-name">
																	<h5 className="title">
																		<Link href={`/blogs/${id}`}>
																			Marden Smith
																		</Link>
																	</h5>
																</div>
																<div className="comment-text">
																	<span className="date">March 12. 2024</span>
																	<Link className="reply" href={`/blogs/${id}`}>
																		<i className="tji-reply"></i>Reply
																	</Link>
																</div>
																<div className="desc">
																	<p>
																		Agree on the value of data-driven campaigns
																		and MarTech. ONE Agency’s approach to
																		qualified leads and conversion is spot on.
																		Request Demo to see their stack in action.
																	</p>
																</div>
															</div>
														</div>
													</li>
												</ul>
											</li>
											<li className="tj-comment">
												<div className="comment-content">
													<div className="comment-avatar">
														<Image
															src="/images/blog/author-1.png"
															alt="Image"
															width={64}
															height={64}
														/>
													</div>
													<div className="comments-header">
														<div className="avatar-name">
															<h5 className="title">
																<Link href={`/blogs/${id}`}>Mahin Deen</Link>
															</h5>
														</div>
														<div className="comment-text">
															<span className="date">June 22. 2024</span>
															<Link className="reply" href={`/blogs/${id}`}>
																<i className="tji-reply"></i>Reply
															</Link>
														</div>
														<div className="desc">
															<p>
																All you need is ONE. Their proprietary tech
																stack and performance creative methodology
																have been a game-changer for our digital
																growth. Recommended.
															</p>
														</div>
													</div>
												</div>
											</li>
										</ul>
									</div>
								</div>
								<div className="tj-comments__container">
									<div className="comment-respond">
										<h3 className="comment-reply-title">Leave a reply</h3>
										<div className="row">
											<div className="col-lg-6">
												<div className="form-input">
													<input
														type="text"
														id="name"
														name="name"
														placeholder="Enter name"
														required=""
													/>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="form-input">
													<input
														type="email"
														id="emailOne"
														name="name"
														placeholder="Enter email"
														required=""
													/>
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form-input">
													<input
														type="text"
														id="website"
														name="name"
														placeholder="Your website"
														required=""
													/>
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form-input">
													<textarea
														id="comment"
														name="message"
														placeholder="Enter your comments"
													/>
												</div>
											</div>
											<div className="comments-btn">
												<button type="submit" className="tj-primary-btn">
													<span className="btn_inner">
														<span className="btn_icon">
															<span>
																<i className="tji-arrow-right"></i>
																<i className="tji-arrow-right"></i>
															</span>
														</span>
														<span className="btn_text">
															<span>Leave comment</span>
														</span>
													</span>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<BlogSidebar />
					</div>
				</div>
			</div>
		</section>
	);
};

export default BlogDetailsPrimary;
