"use client";

import Link from "next/link";
import { useState } from "react";

export default function FooterPagesDropdown({ groups }) {
	const [openIdx, setOpenIdx] = useState(null);

	const toggle = (idx) => {
		setOpenIdx(openIdx === idx ? null : idx);
	};

	return (
		<div className="footer-widget widget_nav_menu">
			<div className="footer-title">
				<h4 className="title">Pages</h4>
			</div>
			<div className="widget-menu">
				<ul>
					{groups.map((group, idx) => (
						<li key={idx} className="footer-dropdown-group">
							<button
								type="button"
								onClick={() => toggle(idx)}
								className="footer-dropdown-toggle"
							>
								{group.name}
								<i
									className="tji-angle-up"
									style={{
										display: "inline-block",
										fontSize: "10px",
										marginLeft: "6px",
										transition: "transform 0.3s",
										transform: openIdx === idx ? "rotate(0deg)" : "rotate(180deg)",
									}}
								/>
							</button>
							<ul
								className="footer-dropdown-items"
								style={{
									maxHeight: openIdx === idx ? "500px" : "0",
									overflow: "hidden",
									transition: "max-height 0.35s ease",
									paddingLeft: "12px",
								}}
							>
								{group.items.map((item, idx2) => (
									<li key={idx2}>
										<Link href={item.path || "#"}>{item.name}</Link>
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
