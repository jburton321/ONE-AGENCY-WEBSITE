"use client";

import smoothScrollToTop from "@/libs/smoothScrollToTop";
import textReavealAnim from "@/libs/textReavealAnim";
import titleAnim from "@/libs/titleAnim";
import titleAnim2 from "@/libs/titleAnim2";
import tjImageParallex from "@/libs/tjImageParallex";
import tjLeftSwipeAnimation from "@/libs/tjLeftSwipeAnimation";
import tjMagicCursorAnimation from "@/libs/tjMagicCursorAnimation";
import tjRightSwipeAnimation from "@/libs/tjRightSwipeAnimation";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";

const ClientWrapper = () => {
	useEffect(() => {
		import("wow.js").then(({ default: WOW }) => {
			new WOW().init();
		});
		smoothScrollToTop();
		const cleanup = tjMagicCursorAnimation();
		return () => {
			if (cleanup) cleanup(); // remove listeners on unmount
		};
	}, []);
	useGSAP(() => {
		tjRightSwipeAnimation();
		tjLeftSwipeAnimation();
		titleAnim();
		titleAnim2();
		textReavealAnim();
		tjImageParallex();
	});
	return null;
};

export default ClientWrapper;
