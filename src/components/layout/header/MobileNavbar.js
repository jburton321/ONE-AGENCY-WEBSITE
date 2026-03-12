import getNavItems from "@/libs/getNavItems";
import Link from "next/link";
import MobileMenuItem from "./MobileMenuItem";

/** Flatten Pages submenu (Main Pages + Other pages items) into a single list */
const flattenPagesItems = (pagesNav) => {
	if (!pagesNav?.submenu?.length) return [];
	return pagesNav.submenu.flatMap((group) => group?.items ?? []);
};

const MobileNavbar = () => {
	const navItems = getNavItems();
	const homeNav = navItems[0];
	const pagesNav = navItems[1];
	const serviceNav = navItems[2];
	const solutionsNav = navItems[3];
	const portfolioNav = navItems[4];
	const blogNav = navItems[5];
	const contactNav = navItems[6];
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
							>
								{homeNav?.submenu?.length
									? homeNav?.submenu
											?.filter((item) => !item?.isComming)
											?.map((item, idx) => (
												<li
													key={idx}
													className={item?.isActive ? "current-menu-item" : ""}
												>
													<Link href={item?.path ? item?.path : "/"}>
														{item?.name ?? "Home"}
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
												</li>
										  ))
									: ""}
							</MobileMenuItem>
							<MobileMenuItem
								text={pagesNav?.name}
								url={pagesNav?.path}
							>
								{flattenPagesItems(pagesNav)?.map((item, idx) => (
									<li
										key={idx}
										className={item?.isActive ? "current-menu-item" : ""}
									>
										<Link href={item?.path ? item?.path : "/"}>
											{item?.name ?? ""}
											{item?.badge ? (
												<span
													className={`mega-menu-badge ${
														item?.badge === "HOT" ? "mega-menu-badge-hot" : ""
													}`}
												>
													{item?.badge}
												</span>
											) : (
												""
											)}
										</Link>
									</li>
								))}
							</MobileMenuItem>
							<MobileMenuItem
								text={serviceNav?.name}
								url={serviceNav?.path ? serviceNav?.path : "#"}
							>
								{serviceNav?.submenu?.length
									? serviceNav?.submenu?.map((item, idx) => (
											<li
												key={idx}
												className={item?.isActive ? "current-menu-item" : ""}
											>
												<Link href={item?.path ? item?.path : "/"}>
													{item?.name ?? ""}
												</Link>
											</li>
									  ))
									: ""}
							</MobileMenuItem>
							<MobileMenuItem
								text={solutionsNav?.name}
								url={solutionsNav?.path ? solutionsNav?.path : "#"}
							>
								{solutionsNav?.submenu?.length
									? solutionsNav?.submenu?.map((item, idx) => (
											<li
												key={idx}
												className={item?.isActive ? "current-menu-item" : ""}
											>
												<Link href={item?.path ? item?.path : "/"}>
													{item?.name ?? ""}
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
												<Link href={item?.path ? item?.path : "/blogs"}>
													{item?.name ? item?.name : "Blog"}
													{item?.badge ? (
														<span
															className={`mega-menu-badge ${
																item?.badge === "HOT" ? "mega-menu-badge-hot" : ""
															}`}
														>
															{item?.badge}
														</span>
													) : (
														""
													)}
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
