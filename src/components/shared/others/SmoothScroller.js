"use client";
import { ReactLenis } from "lenis/react";

const SmoothScroller = () => {
	const lenisOptions = {
		lerp: 0.1, // smooth feel
		duration: 1.2, // faster easing (less delay)
	};

	return <ReactLenis root options={lenisOptions} />;
};

export default SmoothScroller;
