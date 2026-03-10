import BackToTop from "@/components/shared/others/BackToTop";
import Link from "next/link";
import getFooterData from "@/libs/getFooterData";
import getALlServices from "@/libs/getALlServices";

const Footer7 = () => {
	const footerData = getFooterData() ?? {};
	const services = getALlServices() ?? [];
	const {
		ctaSubheading,
		locations = [],
		footerShortDesc,
		tagline,
		company = [],
		contactEmail,
		brandName,
		copyrightYear,
		copyrightText,
	} = footerData;
	const desc = footerShortDesc ?? tagline ?? "";
	const firstLocation = locations[0];
	const callHref = firstLocation?.phoneHref ?? contactEmail ?? "#";

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
											<p>{ctaSubheading ?? "Let's work together?"}</p>
											<h3 className="info-title">Call {brandName ?? "ONE Agency"} Now</h3>
										</div>
										<div>
											<Link className="info-call" href={callHref}>
												<i className="tji-phone"></i>
											</Link>
										</div>
									</div>
								</div>
								<div className="h7-infos-single-common h7-infos-single-divider">
									<div className="line"></div>
								</div>
								{locations[1] && (
									<>
										<div className="h7-infos-single h7-infos-single-common  infos-left">
											<div className="infos-item">
												<span>{locations[1].label}</span>
												<p>{locations[1].address}</p>
												{locations[1].phoneHref && (
													<Link href={locations[1].phoneHref}>{locations[1].phone}</Link>
												)}
											</div>
										</div>
										<div className="h7-infos-single-common h7-infos-single-divider">
											<div className="line"></div>
										</div>
									</>
								)}
								{firstLocation && (
									<div className="h7-infos-single infos-right">
										<div className="infos-item">
											<span>{firstLocation.label}</span>
											<p>{firstLocation.address}</p>
											{firstLocation.phoneHref && (
												<Link href={firstLocation.phoneHref}>{firstLocation.phone}</Link>
											)}
										</div>
									</div>
								)}
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
								{desc && <p className="desc">{desc}</p>}
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
							<div className="footer-widget footer1-col-3 h7-footer-widget-3 widget_nav_menu">
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
			{/* <!-- start: back to top --> */}
			<BackToTop type={2} className={"h7-back-to-top-wrapper"} />
			{/* <!-- end: back to top --> */}
		</footer>
	);
};

export default Footer7;
