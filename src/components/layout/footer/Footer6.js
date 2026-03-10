import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FormSelect from "@/components/shared/Inputs/FormSelect";
import Link from "next/link";

const Footer6 = () => {
	return (
		<footer className="tj-footer-area h6-footer">
			{/* <!-- footer content --> */}
			<div className="h6-footer-top fix">
				<div className="container">
					<div className="row rg-60 g-0">
						<div className="col-xl-6 col-lg-6">
							<div className="footer-widget h6-footer-widget">
								<div className="h6-footer-widget-top">
									<h2 className="h6-footer-widget-title">
										Let’s <span>connect</span> and collaborate
									</h2>
									<div className="h6-footer-widget-btn">
										<ButtonPrimary
											text={"Get started now"}
											url={"/contact"}
											className={"white-btn"}
										/>
									</div>
								</div>
								<div className="footer-contact-infos">
									<div className="infos-left">
										<div className="infos-item">
											<span>Headquarters - USA</span>
											<p>993 Renner Burg, West Rond, MT 94251-030</p>
											<Link href="tel:1009544-7818">+1 (009) 544-7818</Link>
										</div>
									</div>
									<div className="infos-right">
										<div className="infos-item">
											<span>Operations - Canada</span>
											<p>Suite 452 8082 Boner Parge, Elviraton, CA 48998</p>
											<Link href="tel:1009544-7818">+1 (009) 544-7818</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6">
							<div className="footer-widget h6-footer-widget">
								<div className="contact-form-one">
									<h4 className="title">
										Feel free to get in touch or visit our location.
									</h4>
									<form>
										<div className="row">
											<div className="col-sm-6">
												<div className="form-input">
													<input
														type="text"
														id="first"
														name="name"
														placeholder="Full name*"
														required=""
													/>
												</div>
											</div>
											<div className="col-sm-6">
												<div className="form-input">
													<input
														type="email"
														id="emailOne"
														name="email"
														placeholder="Email address*"
														required=""
													/>
												</div>
											</div>
											<div className="col-sm-6">
												<div className="form-input">
													<input
														type="tel"
														id="tel"
														name="tel"
														placeholder="Phone number*"
														required=""
													/>
												</div>
											</div>
											<div className="col-sm-6">
												<div className="form-input">
													<div className="tj-nice-select-box">
														<div className="tj-select">
															<FormSelect
																id={"contact"}
																className="nice-select"
																defaultValue={"Chose a option"}
																items={[
																	{ value: "1", name: "Chose a option" },
																	{ value: "2", name: "IT consulting" },
																	{ value: "3", name: "Market research" },
																	{ value: "4", name: "Business process" },
																	{ value: "5", name: "Business consultancy" },
																	{ value: "6", name: "Digital marketing" },
																	{ value: "7", name: "Branding design" },
																]}
															/>
														</div>
													</div>
												</div>
											</div>
											<div className="col-12">
												<div className="form-input input-textarea">
													<textarea
														id="message"
														name="message"
														placeholder="Type message"
													></textarea>
												</div>
											</div>
											<div className="submit-button">
												<button type="submit" className="tj-submit-btn">
													<span className="btn-text">
														<span>Submit message</span>
													</span>
													<span className="btn-icon">
														<i className="tji-angle-right"></i>
														<i className="tji-angle-right"></i>
													</span>
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- footer logo & menu --> */}
			<div className="h6-footer-middle">
				<div className="container">
					<div className="row rg-30 g-0 align-items-center">
						<div className="col-xxl-6 col-xl-5 col-lg-3">
							<div className="h6-footer-logo">
								<Link href="/" className="footer-logo">
									<img src="/images/logos/primary-logo.png" alt="logo" />
								</Link>
							</div>
						</div>
						<div className="col-xxl-6 col-xl-7 col-lg-9">
							<div className="footer-widget h6-footer-menu">
								<ul>
									<li>
										<Link href="/">Home</Link>
									</li>
									<li>
										<Link href="/about">About us</Link>
									</li>
									<li>
										<Link href="/services">Services</Link>
									</li>
									<li>
										<Link href="/portfolios">Portfolio</Link>
									</li>
									<li>
										<Link href="/blogs">News</Link>
									</li>
									<li>
										<Link href="/contact">Contact</Link>
									</li>
								</ul>
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
										© 2025 <Link href="/"> Solvior </Link> All right reserved.
									</p>
								</div>
								<div className="copyright-socails">
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
			<Link className="backtop" href="#">
				<i className="tji-arrow-up"></i>
			</Link>
			{/* <!-- end: back to top --> */}
		</footer>
	);
};

export default Footer6;
