"use client";

import modifyNumber from "@/libs/modifyNumber";
import Link from "next/link";
import { useEffect, useRef } from "react";

const process = [
	{
		id: 1,
		title: "Diagnose & discover",
		desc: "We dive deep into your business—uncovering strengths, bottlenecks, and hidden opportunities through workshops, interviews, and data audits.",
		btnText: "Book discovery call",
		btnLink: "/services/1",
	},
	{
		id: 2,
		title: "Strategize & design",
		desc: "Clear picture of where you are, we build a tailored strategy aligned with your goals—whether it’s scaling operations, fixing inefficiencies, or pivoting to new markets.",
		btnText: "Explore map",
		btnLink: "/services/2",
	},
	{
		id: 3,
		title: "Execute & Elevate",
		desc: "Roll up our sleeves and work side-by-side with your team to implement the strategy. From hands-on support to performance tracking—we’re in it with you.",
		btnText: "Book consultation",
		btnLink: "/services/3",
	},
];

const ProcessItems = () => {
	const containerRef = useRef(null);
	const lineRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;
		const lineActive = lineRef.current;
		const items = container?.querySelectorAll(".process-item");

		if (!container || !lineActive || !items?.length) return;

		const totalPortion = 100 / items.length;

		const handleEnter = (idx, item) => {
			items.forEach(el => el.classList.remove("active"));
			lineActive.style.top = `${totalPortion * idx}%`;
			item.classList.add("active");
		};

		items.forEach((item, idx) => {
			item.addEventListener("mouseenter", () => handleEnter(idx, item));
		});

		// Cleanup listeners on unmount
		return () => {
			items.forEach((item, idx) => {
				item.removeEventListener("mouseenter", () => handleEnter(idx, item));
			});
		};
	}, []);

	return (
		<div className="process-inner" ref={containerRef}>
			<div className="process-line">
				<div className="process-line-active" ref={lineRef}></div>
			</div>
			{process.map(({ id, title, desc, btnText, btnLink }, idx) => (
				<div
					key={id}
					className={`process-item style-4 ${
						idx === 0 ? "active" : ""
					} wow fadeInUp`}
					data-wow-delay={`.${idx + 3}s`}
				>
					<div className="process-index">
						<span>{modifyNumber(idx + 1)}</span>
					</div>
					<div className="process-content">
						<h5 className="title">{title}</h5>
						<div className="desc">
							<p>{desc}</p>
						</div>
						<Link
							className="service-button text-btn"
							href={btnLink || "/services/1"}
						>
							{btnText} <i className="tji-angle-right"></i>
						</Link>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProcessItems;
