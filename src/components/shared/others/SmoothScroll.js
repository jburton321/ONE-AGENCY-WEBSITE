"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

const SmoothScroll = ({ children }) => {
	const lenisOptions = {
		lerp: 0.05, // Controls how smooth the scrolling is
		duration: 1, // Slows down or speeds up the scrolling
		smoothTouch: false, // Disable smooth scroll on touch devices
		smooth: true, // Smooth scroll for desktop (obviously)
	};

	return (
		<ReactLenis root options={lenisOptions}>
			{children}
		</ReactLenis>
	);
};

export default SmoothScroll;
