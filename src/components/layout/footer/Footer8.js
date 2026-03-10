import Link from "next/link";
import getFooterData from "@/libs/getFooterData";
import getALlServices from "@/libs/getALlServices";

const Footer8 = () => {
	const footerData = getFooterData() ?? {};
	const services = getALlServices() ?? [];
	const {
		tagline,
		locations = [],
		company = [],
		brandName,
		copyrightYear,
		copyrightText,
	} = footerData;
	const offices = locations.slice(0, 2);

	return (
		<footer className="tj-footer-area footer-2 style-2 h8-footer">
			<div className="footer-top-area fix">
				<div className="container">
					<div className="row line rg-50">
						<div className="col-xl-5 col-lg-4 col-md-6 col-sm-6">
							<div className="footer-widget footer-newsletter-form h8-footer-newsletter-form">
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
						<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
							<div className="footer-widget footer4-col-2 widget_nav_menu">
								<div className="footer-title">
									<h4 className="title">Services</h4>
								</div>
								<div className="widget-menu">
									<ul>
										{services.map((s) => (
											<li key={s.id}>
												<Link href={`/services/${s.id}`}>{s.title}</Link>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
							<div className="footer-widget footer2-col-3 widget_nav_menu">
								<div className="footer-title">
									<h4 className="title">Company</h4>
								</div>
								<div className="widget-menu">
									<ul>
										{company.map((item, idx) => (
											<li key={idx}>
												<Link href={item.path}>{item.label}</Link>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
							<div className="footer-widget footer-contact-infos">
								<div className="footer-title">
									<h4 className="title">Our offices</h4>
								</div>
								{offices.map((loc, idx) => (
									<div key={idx} className="infos-item">
										<span>{loc.label}</span>
										<p>{loc.address}</p>
										{loc.phoneHref ? (
											<Link href={loc.phoneHref}>{loc.phone}</Link>
										) : null}
									</div>
								))}
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
								{tagline && (
									<div className="copyright-text">
										<p>
											<i className="fa-solid fa-shield-check"></i> {tagline}
										</p>
									</div>
								)}
								<div className="copyright-text">
									<p>
										© {copyrightYear ?? new Date().getFullYear()}{" "}
										<Link href="/">{brandName ?? "ONE Agency"}</Link>{" "}
										{copyrightText ?? "All rights reserved."}
									</p>
								</div>
								<div className="copyright-menu">
									<ul>
										<li>
											<Link href="/contact">Privacy Policy</Link>
										</li>
										<li>
											<Link href="/contact">Terms &amp; Conditions</Link>
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

export default Footer8;
