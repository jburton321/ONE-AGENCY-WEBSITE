"use client";
import Link from "next/link";
import { Fragment } from "react";
import MobileNavbar from "./MobileNavbar";

const MobileMenu = ({ isMobileMenuOpen, handleMobileToggler }) => {
	return (
		<Fragment>
			<div
				className={`body-overlay${isMobileMenuOpen ? " opened" : ""}`}
				onClick={() => handleMobileToggler(false)}
				data-lenis-prevent
			></div>
			<div
				className={`hamburger-area ${isMobileMenuOpen ? " opened" : ""}`}
				data-lenis-prevent
			>
				<div className="hamburger_bg"></div>
				<div className="hamburger_wrapper">
					<div className="hamburger_top d-flex align-items-center justify-content-end">
						<div className="hamburger_close">
							<button
								className="hamburger_close_btn hamburgerCloseBtn"
								onClick={() => handleMobileToggler(false)}
							>
								<i className="fa-thin fa-times"></i>
							</button>
						</div>
					</div>
					<div className="hamburger_one_logo mb-6 w-full flex justify-center items-center" style={{ color: "var(--tj-color-common-white)" }}>
						<Link href="/" className="block w-full max-w-full" onClick={() => handleMobileToggler(false)}>
							<img src="/logo/NAV-ONE-LOGO.png" alt="ONE Agency" className="w-full h-auto block mx-auto max-w-[280px]" />
						</Link>
					</div>
					<div className="hamburger_search">
						<form method="get" action="#0">
							<button type="submit">
								<i className="fal fa-search"></i>
							</button>
							<input
								type="search"
								autoComplete="off"
								name="s"
								placeholder="Search here"
							/>
						</form>
					</div>
					<MobileNavbar />
					<div className="hamburger-socials">
						<h4 className="hamburger-title">Follow us</h4>
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
								<Link href="https://www.linkedin.com/">
									<i className="fa-brands fa-linkedin-in"></i>
								</Link>
							</li>
							<li>
								<Link href="https://x.com/">
									<i className="fa-brands fa-twitter"></i>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default MobileMenu;
