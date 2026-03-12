"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedOneLogo from "@/components/shared/AnimatedOneLogo";

const Logo = ({ headerType, isStickyHeader }) => {
	const isHeader1 = !headerType || headerType === 1;

	return (
		<div className={`site-logo${isHeader1 ? " site-logo--header1" : ""}`}>
			<Link className="logo" href="/">
				{isHeader1 ? (
					<span
						className="inline-block"
						style={{
							color: "var(--tj-color-common-white)",
							height: 72,
							width: "auto",
						}}
					>
						<AnimatedOneLogo
							active
							style={{ height: 72, width: "auto", display: "block" }}
						/>
					</span>
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
