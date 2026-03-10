import BackToTop from "@/components/shared/others/BackToTop";
import Link from "next/link";
import getFooterData from "@/libs/getFooterData";

const Footer10 = () => {
	const footerData = getFooterData() ?? {};
	const {
		tagline,
		ctaSubheading,
		ctaHeading,
		locations = [],
		contactEmail,
		brandName,
		copyrightYear,
		copyrightText,
	} = footerData;
	const offices = locations.slice(0, 2);
	const ctaText = ctaSubheading ?? ctaHeading ?? "Let's talk business?";

	return (
		<footer className="tj-footer-area footer-2 style-2  h10-footer">
			<div className="footer-top-area h10-footer-top fix">
				<div className="container">
					<div className="row line rg-50">
						<div className=" col-lg-4  col-md-6">
							<div
								className="footer-widget h10-footer-widget
             footer-newsletter-form h10-footer-newsletter-form"
							>
								<div className="footer-logo">
									<Link href="/">
										<img src="/images/logos/primary-logo.png" alt={brandName ?? "ONE Agency"} />
									</Link>
								</div>
								<p className="desc">
									{tagline ?? "Receive the latest business news, tips & updates via email"}
								</p>
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
						<div className=" col-lg-8 col-md-6">
							<div className="h10-footer-widget-wrapper">
								<div className="row justify-content-between rg-30">
									<div className="col-12">
										<div className="h10-footer-cta">
											<h1 className="h10-footer-cta-title text-anim">
												<Link href="/contact">{ctaText}</Link>
											</h1>
											<Link
												className="icon-btn h10-footer-cta-btn wow fadeInRight"
												data-wow-delay=".7s"
												href="/contact"
											>
												<i className="tji-arrow-right"></i>
											</Link>
										</div>
									</div>
									{offices[0] && (
										<div className="col-xl-3 col-lg-6">
											<div className="footer-widget footer-contact-infos">
												<div className="infos-item">
													<span>{offices[0].label}</span>
													<p>{offices[0].address}</p>
													{offices[0].phoneHref ? (
														<Link href={offices[0].phoneHref}>{offices[0].phone}</Link>
													) : null}
												</div>
											</div>
										</div>
									)}
									{offices[1] && (
										<div className="col-xl-4 col-lg-6">
											<div className="footer-widget footer-contact-infos footer-contact-infos-2">
												<div className="infos-item">
													<span>{offices[1].label}</span>
													<p>{offices[1].address}</p>
													{offices[1].phoneHref ? (
														<Link href={offices[1].phoneHref}>{offices[1].phone}</Link>
													) : contactEmail ? (
														<Link href={contactEmail}>{contactEmail.replace("mailto:", "")}</Link>
													) : null}
												</div>
											</div>
										</div>
									)}
									<div className="col-xl-3 col-lg-6">
										<div className="footer-widget ">
											<div className="footer-social">
												<div className="footer-socia-inner">
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
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
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

			{/* <!-- start: back to top --> */}
			<BackToTop type={4} className={"h7-back-to-top-wrapper"} />
			{/* <!-- end: back to top --> */}
		</footer>
	);
};

export default Footer10;
