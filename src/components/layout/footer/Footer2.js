import BackToTop from "@/components/shared/others/BackToTop";
import Link from "next/link";

const Footer2 = () => {
	return (
		<footer className="tj-footer-area footer-2 fix">
			<div className="footer-top-area">
				<div className="container">
					<div className="row line rg-50">
						<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
							<div className="footer-widget footer2-col-1 footer-info">
								<div className="footer-logo">
									<Link href="/">
										<img src="/images/logos/primary-logo.png" alt="solvior" />
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
						<div className="col-xl-4 col-lg-3 col-md-6 col-sm-6">
							<div className="footer-widget footer2-col-2 footer-contact-infos">
								<div className="footer-title">
									<h4 className="title">Our offices</h4>
								</div>
								<div className="infos-item">
									<span>Headquarters - USA</span>
									<p>993 Renner Burg, West Rond, MT 94251-030</p>
									<Link href="tel:1009544-7818">+1 (009) 544-7818</Link>
								</div>
								<div className="infos-item">
									<span>Operations - Canada</span>
									<p>Suite 452 8082 Boner Parge, Elviraton, CA 48998</p>
								</div>
							</div>
						</div>
						<div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
							<div className="footer-widget footer2-col-3 widget_nav_menu">
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
											<Link href="about">Recognitions</Link>
										</li>
										<li>
											<Link href="careers">
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
							<div className="footer-widget footer2-col-4 widget_nav_menu">
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
					</div>
				</div>
			</div>
			<div className="footer-copyright-area-2">
				<div className="container">
					<div className="row line">
						<div className="col-xl-4"></div>
						<div className="col-xl-8">
							<div className="copyright-2">
								<div className="copyright-content-area">
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
			</div>

			{/* <!-- start: back to top --> */}
			<BackToTop />
			{/* <!-- end: back to top --> */}
		</footer>
	);
};

export default Footer2;
