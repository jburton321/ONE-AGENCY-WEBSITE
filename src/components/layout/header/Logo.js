"use client";

import Image from "next/image";
import Link from "next/link";

const Logo = ({ headerType, isStickyHeader }) => {
	return (
		<div className="site-logo">
			<Link className="logo" href="/">
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
			</Link>
		</div>
	);
};

export default Logo;
