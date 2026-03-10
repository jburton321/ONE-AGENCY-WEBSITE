import BackToTop from "@/components/shared/others/BackToTop";
import Link from "next/link";

const Footer7 = () => {
	return (
		<footer className="tj-footer-area h7-footer">
			<div className="h7-footer-shape"></div>
			<div className="h7-footer-overlay"></div>

			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="h6-footer-widget h7-footer-widget">
							<div className="footer-contact-infos h7-footer-contact-infos">
								<div className="h7-infos-single h7-infos-single-common h7-infos-single-action">
									<div className="infos-item">
										<div className="infos-item-left">
											<p>Lets work together?</p>
											<h3 className="info-title">Call Solvior Now</h3>
										</div>
										<div>
											{" "}
											<Link className="info-call" href="tel:1009544-7818">
												<i className="tji-phone"></i>
											</Link>
										</div>
									</div>
								</div>
								<div className="h7-infos-single-common h7-infos-single-divider">
									<div className="line"></div>
								</div>
								<div className="h7-infos-single h7-infos-single-common  infos-left">
									<div className="infos-item">
										<span>Operations - Canada</span>
										<p>Suite 452 8082 Boner Parge, Elviraton, CA 48998</p>
										<Link href="tel:1009544-7818">+1 (009) 544-7818</Link>
									</div>
								</div>
								<div className="h7-infos-single-common h7-infos-single-divider">
									<div className="line"></div>
								</div>
								<div className="h7-infos-single infos-right">
									<div className="infos-item">
										<span>Headquarters - USA</span>
										<p>993 Renner Burg, West Rond, MT 94251-030</p>
										<Link href="tel:1009544-7818">+1 (009) 544-7818</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-top-area h7-footer-top fix">
				<div className="container">
					<div className="row rg-50 ">
						<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
							<div className="footer-widget footer1-col-1 ">
								<div className="footer-title">
									<h4 className="title">Our company</h4>
								</div>
								<p className="desc">
									Our mission is to empowers businesses off our all size too
									thrive in an businesses ever changing marketplaces.
								</p>
								<div className="footer-social h7-footer-social">
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
						<div className="col-xl-3 col-lg-2 col-md-6 col-sm-6">
							<div className="footer-widget footer1-col-2 h7-footer-widget-2 widget_nav_menu">
								<div className="footer-title">
									<h4 className="title">Resourses</h4>
								</div>
								<div className="widget-menu">
									<ul>
										<li>
											<Link href="/contact">Contact us</Link>
										</li>
										<li>
											<Link href="/contact">Privacy policy</Link>
										</li>
										<li>
											<Link href="/about">Recognitions</Link>
										</li>
										<li>
											<Link href="/careers">
												Careers <span>New</span>
											</Link>
										</li>
										<li>
											<Link href="/blog-grid">Blog</Link>
										</li>
										<li>
											<Link href="/team">Feedback</Link>
										</li>
										<li>
											<Link href="/contact">Error 404</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
							<div className="footer-widget footer1-col-3 h7-footer-widget-3 widget_nav_menu">
								<div className="footer-title">
									<h4 className="title">Services</h4>
								</div>
								<div className="widget-menu">
									<ul>
										<li>
											<Link href="/services/1">Strategic planning</Link>
										</li>
										<li>
											<Link href="/services/2">Market research</Link>
										</li>
										<li>
											<Link href="/services/3">Business process</Link>
										</li>
										<li>
											<Link href="/services/4">Financial management</Link>
										</li>
										<li>
											<Link href="/services/5">Change management</Link>
										</li>
										<li>
											<Link href="/services/6">IT consulting</Link>
										</li>
										<li>
											<Link href="/services/1">Leadership </Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
							<div className="footer-widget footer1-col-4 footer-newsletter-form h7-footer-newsletter-form">
								<div className="newsletter-title">
									<h3 className="title">Subscribe to our newsletter</h3>
								</div>
								<div className="newsletter-form">
									<form>
										<div className="form-input">
											<input
												type="email"
												id="email"
												name="email"
												placeholder="Enter email"
												required=""
											/>
											<button className="tj-footer-input-btn">
												<i className="fa-solid fa-paper-plane"></i>
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-copyright-area h7-footer-copyright">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="copyright-content-area">
								<div className="copyright-text">
									<p>
										© 2025 <Link href="/"> Solvior </Link> All right reserved.
									</p>
								</div>
								<div className="copyright-menu">
									<ul>
										<li>
											<Link href="/contact">Policy & privacy</Link>
										</li>
										<li>
											<Link href="/contact">Terms & conditions</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- start: back to top --> */}
			<BackToTop type={2} className={"h7-back-to-top-wrapper"} />
			{/* <!-- end: back to top --> */}
		</footer>
	);
};

export default Footer7;
