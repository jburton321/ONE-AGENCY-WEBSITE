import BackToTop from "@/components/shared/others/BackToTop";
import Link from "next/link";

const Footer5 = () => {
	return (
		<footer className="tj-footer-area h5-footer">
			<div className="footer-top-area fix">
				<div className="container">
					<div className="row rg-50 line">
						<div className="col-xl-4 col-lg-3 col-md-6 col-sm-6">
							<div className="footer-widget">
								<div className="footer-logo">
									<Link href="/">
										<img src="/images/logos/secondary-logo.png" alt="solvior" />
									</Link>
								</div>
								<p className="desc">
									Our mission is to empowers businesses off our all size too
									thrive in an businesses ever changing marketplaces.
								</p>
								<div className="footer-social">
									<h5 className="title">Follow Us:</h5>
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
						<div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
							<div className="footer-widget widget_nav_menu">
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
							<div className="footer-widget widget_nav_menu">
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
							<div className="footer-widget footer1-col-4 footer-newsletter-form">
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
				<div className="h5-footer-shape wow fadeInLeft" data-wow-delay=".4s">
					<img src="/images/shapes/h5-hero-shape-2.png" alt="shape" />
				</div>
			</div>
			<div className="h5-footer-copyright">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="copyright-content-area">
								<div className="copyright-text">
									<p>
										<i className="tji-check"></i> Trusted partner in business
										excellence
									</p>
								</div>
								<div className="copyright-text">
									<p>
										© 2025{" "}
										<Link href="/" target="_blank">
											{" "}
											Solvior{" "}
										</Link>{" "}
										All right reserved.
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

			{/* <!-- back to top --> */}
			<BackToTop type={3} />
		</footer>
	);
};

export default Footer5;
