import BrandSlider1 from "@/components/shared/brands/BrandSlider1";
import BackToTop from "@/components/shared/others/BackToTop";
import Link from "next/link";
import getFooterData from "@/libs/getFooterData";
import getSolutions from "@/libs/getSolutions";
import getALlServices from "@/libs/getALlServices";

const Footer = ({ footerType }) => {
	const footerData = getFooterData() ?? {};
	const solutions = getSolutions() ?? [];
	const services = getALlServices() ?? [];
	const {
		ctaHeading,
		ctaSubheading,
		tagline,
		company = [],
		support = [],
		contact = [],
		brandName,
		copyrightYear,
		copyrightText,
	} = footerData ?? {};

	return (
		<footer className="tj-footer-area footer-1">
			{footerType === "inner" ? null : (
				<section className="tj-brand-section">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<BrandSlider1 />
							</div>
						</div>
					</div>
				</section>
			)}

			{/* CTA / tagline block – match oneagency.com */}
			<div className="footer-cta-block">
				<div className="container">
					<div className="row">
						<div className="col-12 text-center">
							{ctaHeading && (
								<h3 className="footer-cta-heading">
									{ctaHeading}
								</h3>
							)}
							{ctaSubheading && (
								<p className="footer-cta-subheading">
									{ctaSubheading}
								</p>
							)}
							<div className="footer-cta-buttons">
								<Link href="/contact" className="tj-btn tj-btn-primary">
									Request Demo
								</Link>
								<Link href="/services" className="tj-btn tj-btn-outline">
									Services
								</Link>
							</div>
							{tagline && (
								<p className="footer-tagline">{tagline}</p>
							)}
						</div>
					</div>
				</div>
			</div>

			<div className="footer-top-area fix">
				<div className="container">
					<div className="row rg-50 line">
						{/* Solutions */}
						<div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
							<div className="footer-widget footer1-col-2 widget_nav_menu">
								<div className="footer-title">
									<h4 className="title">Solutions</h4>
								</div>
								<div className="widget-menu">
									<ul>
										{solutions.map((s) => (
											<li key={s.id}>
												<Link href={s.path}>{s.title}</Link>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>

						{/* Services */}
						<div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
							<div className="footer-widget footer1-col-3 widget_nav_menu">
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

						{/* Company */}
						<div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
							<div className="footer-widget widget_nav_menu">
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

						{/* Support */}
						<div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
							<div className="footer-widget widget_nav_menu">
								<div className="footer-title">
									<h4 className="title">Support</h4>
								</div>
								<div className="widget-menu">
									<ul>
										{support.map((item, idx) => (
											<li key={idx}>
												<Link href={item.path}>{item.label}</Link>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>

						{/* Contact */}
						<div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
							<div className="footer-widget widget_nav_menu">
								<div className="footer-title">
									<h4 className="title">Contact</h4>
								</div>
								<div className="widget-menu">
									<ul>
										{contact.map((item, idx) => (
											<li key={idx}>
												<Link href={item.path}>{item.label}</Link>
											</li>
										))}
									</ul>
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
								<div className="copyright-text">
									<p>
										Copyright ©{copyrightYear || new Date().getFullYear()}{" "}
										<Link href="/">{brandName || "ONE Agency"}</Link>. {copyrightText || "All rights reserved."}
									</p>
								</div>
								<div className="copyright-socails">
									<ul>
										<li>
											<Link href="https://www.facebook.com/" aria-label="Facebook">
												<i className="fa-brands fa-facebook-f"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.instagram.com/" aria-label="Instagram">
												<i className="fa-brands fa-instagram"></i>
											</Link>
										</li>
										<li>
											<Link href="https://x.com/" aria-label="X">
												<i className="fa-brands fa-twitter"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.linkedin.com/" aria-label="LinkedIn">
												<i className="fa-brands fa-linkedin-in"></i>
											</Link>
										</li>
									</ul>
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

			<BackToTop />
		</footer>
	);
};

export default Footer;
