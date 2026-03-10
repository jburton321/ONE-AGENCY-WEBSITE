import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Link from "next/link";
import getFooterData from "@/libs/getFooterData";
import getALlServices from "@/libs/getALlServices";

const Footer4 = () => {
	const footerData = getFooterData() ?? {};
	const services = getALlServices() ?? [];
	const {
		ctaHeading,
		ctaSubheading,
		locations = [],
		company = [],
		brandName,
		copyrightYear,
		copyrightText,
	} = footerData;
	const offices = locations.slice(0, 2);

	return (
		<footer className="tj-footer-area footer-2 style-2">
			<div className="footer-top-area fix">
				<div className="container">
					<div className="row line rg-50">
						<div className="col-xl-5 col-lg-4 col-md-6 col-sm-6">
							<div className="footer-widget footer-info">
								<div className="footer-logo mb-40">
									<Link href="/">
										<img src="/logo/main.svg" alt={brandName ?? "ONE Agency"} />
									</Link>
								</div>
								<h2 className="title mb-40">
									{ctaSubheading ?? ctaHeading ?? "Looking to transform your business?"}
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
								<div className="copyright-text">
									<p>
										© {copyrightYear ?? new Date().getFullYear()}{" "}
										<Link href="/" target="_blank">
											{brandName ?? "ONE Agency"}
										</Link>{" "}
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

export default Footer4;
