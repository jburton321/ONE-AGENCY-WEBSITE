import Link from "next/link";

const ContactTop = () => {
	return (
		<section className="tj-contact-area section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								CONTACT US
							</span>
							<h2 className="sec-title text-anim">Let's level up your digital campaigns</h2>
						</div>
					</div>
				</div>
				<div className="row rg-30">
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay="0.1s"
						>
							<div className="contact-icon">
								<i className="tji-email"></i>
							</div>
							<h3 className="contact-title">Email us</h3>
							<ul className="contact-list">
								<li>
									<Link href="mailto:info@oneagency.com">info@oneagency.com</Link>
								</li>
								<li>
									<Link href="mailto:support@oneagency.com">support@oneagency.com</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay="0.3s"
						>
							<div className="contact-icon">
								<i className="tji-phone"></i>
							</div>
							<h3 className="contact-title">Call us</h3>
							<ul className="contact-list">
								<li>
									<Link href="tel:+16892059923">+1 (689) 205-9923</Link>
								</li>
								<li>
									<Link href="tel:+16026710445">+1 (602) 671-0445</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay="0.5s"
						>
							<div className="contact-icon">
								<i className="tji-location"></i>
							</div>
							<h3 className="contact-title">Orlando HQ</h3>
							<p>5900 Lake Ellenor Dr., Suite 300, Orlando, FL 32809</p>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay="0.7s"
						>
							<div className="contact-icon">
								<i className="tji-chat"></i>
							</div>
							<h3 className="contact-title">Request Demo</h3>
							<ul className="contact-list">
								<li>
									<Link href="/contact">Request a demo</Link>
								</li>
								<li className="active">
									<Link href="/contact">Get in touch</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactTop;
