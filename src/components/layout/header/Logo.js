"use client";

import Image from "next/image";
import Link from "next/link";
const Logo = ({ headerType, isStickyHeader, isMobileMenuOpen }) => {
	const isHeader1 = !headerType || headerType === 1;
	const hidden = isMobileMenuOpen ? " d-none" : "";

	return (
		<div className={`site-logo${isHeader1 ? " site-logo--header1" : ""}${hidden}`}>
			<Link className="logo" href="/">
				{isHeader1 ? (
					<Image
						src="/logo/NAV-ONE-LOGO.png"
						alt="ONE Agency"
						height={72}
						width={236}
					/>
				) : (
					<Image
						src={
							(headerType === 3 ||
								headerType === 4 ||
								headerType === 5 ||
								headerType === 6 ||
								headerType === 9) &&
							!isStickyHeader
								? "/logo/main-white.svg"
								: headerType === 9
								? "/logo/main-white.svg"
								: "/logo/main.svg"
						}
						alt="ONE Agency"
						height={37}
						width={150}
					/>
				)}
			</Link>
		</div>
	);
};

export default Logo;
