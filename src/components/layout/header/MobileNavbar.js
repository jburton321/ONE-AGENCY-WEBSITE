import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import getNavItems from "@/libs/getNavItems";
import Image from "next/image";
import Link from "next/link";
import MobileMenuItem from "./MobileMenuItem";

const MobileNavbar = () => {
	const navItems = getNavItems();
	const homeNav = navItems[0];
	const pagesNav = navItems[1];
	const serviceNav = navItems[2];
	const portfolioNav = navItems[3];
	const blogNav = navItems[4];
	const contactNav = navItems[5];
	return (
		<div className="hamburger_menu d-block d-lg-none">
			<div className="mobile_menu mean-container">
				<div className="mean-bar">
					<Link
						href="#nav"
						className="meanmenu-reveal"
						style={{ right: 0, left: "auto" }}
					>
						<span>
							<span>
								<span></span>
							</span>
						</span>
					</Link>
					<nav className="mean-nav">
						<ul>
							<MobileMenuItem
								text={homeNav?.name}
								url={homeNav?.path ? homeNav?.path : "#"}
								submenuClass={"header__mega-menu mega-menu"}
							>
								<li>
									<div className="mega-menu-wrapper">
										<div className="container-fluid gap-60-25">
											<div className="row">
												{homeNav?.submenu?.length
													? homeNav?.submenu?.map((item, idx) => (
															<div
																key={idx}
																className={`col-xl-3 col-lg-3 col-12 ${
																	item?.isComming ? "d-none" : ""
																}`}
															>
																<div className="tj-demo-thumb">
																	<div className="image">
																		<Image
																			src={
																				item?.img
																					? item?.img
																					: "/images/header/demo/home-1.webp"
																			}
																			alt=""
																			width={570}
																			height={434}
																		/>
																		{item?.badge ? (
																			<span className="tj-demo-badge">
																				{item?.badge}
																			</span>
																		) : (
																			""
																		)}
																		<div className="tj-demo-button">
																			<ButtonPrimary
																				text={"View demo"}
																				url={item?.path}
																				className={"header_btn"}
																			/>
																		</div>
																	</div>
																	<h6 className="tj-demo-title">
																		<Link href={item?.path ? item?.path : "#"}>
																			{item?.name}
																		</Link>
																	</h6>
																</div>
															</div>
													  ))
													: ""}
											</div>
										</div>
									</div>
								</li>
							</MobileMenuItem>
							<MobileMenuItem
								text={pagesNav?.name}
								url={pagesNav?.path}
								submenuClass={"header__mega-menu mega-menu mega-menu-pages"}
							>
								<li>
									<div className="mega-menu-wrapper">
										{pagesNav?.submenu?.length
											? pagesNav?.submenu?.map((pageItem, idx) => (
													<div key={idx} className="mega-menu-pages-single">
														<div className="mega-menu-pages-single-inner">
															<h6 className="mega-menu-title">
																{pageItem?.name}
															</h6>
															<div className="mega-menu-list">
																{pageItem?.items?.length
																	? pageItem?.items?.map((item, idx2) => (
																			<Link
																				key={100 + idx2}
																				href={item?.path ? item?.path : "/"}
																				className={
																					item?.isActive ? "active" : ""
																				}
																			>
																				{item?.name}
																				{item?.badge ? (
																					<span
																						className={`mega-menu-badge ${
																							item?.badge === "HOT"
																								? "mega-menu-badge-hot"
																								: ""
																						}`}
																					>
																						{item?.badge}
																					</span>
																				) : (
																					""
																				)}
																			</Link>
																	  ))
																	: ""}
															</div>
														</div>
													</div>
											  ))
											: ""}
										<div className="col-12 col-lg-3 mega-menu-pages-single">
											<div className="mega-menu-pages-single-inner">
												<div
													className="tj-sidebar-cta"
													style={{
														backgroundImage:
															"url('/images/blog/widget-cta.webp')",
													}}
												>
													<div className="content">
														<div className="icon">
															<Image
																width={55}
																height={55}
																style={{ height: "auto" }}
																src="/images/shapes/widget-cta-icon.png"
																alt="image"
															/>
														</div>
														<h3>
															Need help? <br /> Feel free contact us
														</h3>
														<p>
															Our mission is to empowers businesses off all size
															in an businesses.
														</p>
													</div>
													<div className="cta-btn">
														<ButtonPrimary
															text={"Get in touch"}
															url={"/contact"}
															className={"white-btn"}
														/>

														<Image
															width={115}
															height={117}
															style={{ height: "auto" }}
															className="shapes move-anim-2"
															src="/images/shapes/carrow.png"
															alt="shape"
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								</li>
							</MobileMenuItem>
							<MobileMenuItem
								text={serviceNav?.name}
								url={serviceNav?.path ? serviceNav?.path : "#"}
								submenuClass={"mega-menu-service"}
							>
								{serviceNav?.submenu?.length
									? serviceNav?.submenu?.map((item, idx) => (
											<li key={idx}>
												<Link
													className="mega-menu-service-single"
													href={item?.path ? item?.path : "/"}
												>
													{" "}
													<span className="mega-menu-service-icon">
														<i
															className={
																item?.icon ? item?.icon : "tji-service-1"
															}
														></i>
													</span>{" "}
													<span className="mega-menu-service-title">
														{item?.name
															? item?.name
															: "Business process optimization"}
													</span>{" "}
													<span className="mega-menu-service-nav">
														<i className="tji-arrow-right"></i>
														<i className="tji-arrow-right"></i>
													</span>
												</Link>
											</li>
									  ))
									: ""}
							</MobileMenuItem>
							<MobileMenuItem
								text={portfolioNav?.name}
								url={portfolioNav?.path ? portfolioNav?.path : "#"}
							>
								{portfolioNav?.submenu?.length
									? portfolioNav?.submenu?.map((item, idx) => (
											<li
												key={idx}
												className={item?.isActive ? "current-menu-item" : ""}
											>
												<Link href={item?.path ? item?.path : "/portfolios"}>
													{item?.name ? item?.name : "Portfolio"}
												</Link>
											</li>
									  ))
									: ""}
							</MobileMenuItem>
							<MobileMenuItem
								text={blogNav?.name}
								url={blogNav?.path ? blogNav?.path : "#"}
							>
								{blogNav?.submenu?.length
									? blogNav?.submenu?.map((item, idx) => (
											<li
												key={idx}
												className={item?.isActive ? "current-menu-item" : ""}
											>
												<Link href={item?.path ? item?.path : "/portfolios"}>
													{item?.name ? item?.name : "Portfolio"}
												</Link>
											</li>
									  ))
									: ""}
							</MobileMenuItem>
							<li className="mean-last">
								<Link href={contactNav?.path ? contactNav?.path : "#"}>
									{" "}
									{contactNav?.name ? contactNav?.name : "Contact"}
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default MobileNavbar;
