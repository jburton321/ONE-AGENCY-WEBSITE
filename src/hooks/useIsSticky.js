"use client";

import { useEffect, useState } from "react";

const STICKY_THRESHOLD = 120;

const useIsSticky = isStickyHeader => {
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const st = window.scrollY;
			setIsSticky(st > STICKY_THRESHOLD);
		};
		if (isStickyHeader) {
			handleScroll();
			window.addEventListener("scroll", handleScroll);
		}
		return () => {
			if (isStickyHeader) {
				window.removeEventListener("scroll", handleScroll);
			}
		};
	}, [isStickyHeader]);
	return isSticky;
};

export default useIsSticky;
