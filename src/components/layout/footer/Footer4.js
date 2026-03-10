import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Link from "next/link";

const Footer4 = () => {
	return (
		<footer className="tj-footer-area footer-2 style-2">
			<div className="footer-top-area fix">
				<div className="container">
					<div className="row line rg-50">
						<div className="col-xl-5 col-lg-4 col-md-6 col-sm-6">
							<div className="footer-widget footer-info">
								<div className="footer-logo mb-40">
									<Link href="/">
										<img src="/images/logos/primary-logo.png" alt="solvior" />
									</Link>
								</div>
								<h2 className="title mb-40">
									Looking to transform your business?
								</h2>
								<div className="footer-btn">
									<ButtonPrimary
										text={"Contact us now"}
										url={"/contact"}
										className={"white-btn"}
									/>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
							<div className="footer-widget footer4-col-2 widget_nav_menu">
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
							<div className="footer-widget footer-contact-infos">
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
					</div>
				</div>
				<Link className="backtop" href="#">
					<i className="tji-arrow-up"></i>
				</Link>
			</div>
			<div className="footer-copyright-area">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="copyright-content-area">
								<div className="copyright-text">
									<p>
										<i className="fa-solid fa-shield-check"></i> Trusted partner
										in business excellence
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
		</footer>
	);
};

export default Footer4;
