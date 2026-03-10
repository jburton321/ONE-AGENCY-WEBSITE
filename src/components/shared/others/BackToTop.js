"use client";

import { useEffect, useState } from "react";

export default function BackToTop({ type, className }) {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) {
				setVisible(true);
			} else {
				setVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth", // same as jQuery animate()
		});
	};

	return (
		<div
			className={`back-to-top-wrapper ${className ? className : ""} ${
				visible ? "back-to-top-btn-show" : ""
			}`}
		>
			<button
				id="back_to_top"
				type="button"
				className={`back-to-top-btn  ${
					type === 4
						? "style-6"
						: type === 2
						? "style-3"
						: type === 3
						? "style-5"
						: "style-2"
				}`}
				onClick={scrollToTop}
			>
				<i className="tji-arrow-up"></i>
				<span>GO TOP</span>
			</button>
		</div>
	);
}
