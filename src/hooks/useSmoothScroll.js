"use client";
import { useEffect } from "react";

export default function useSmoothScroll(options = {}) {
	useEffect(() => {
		let smoothScrollInstance;

		(async () => {
			// Dynamically import so it only runs in the browser
			const SmoothScroll = (await import("../libs/smoothscroller.js")).default;
console.log(SmoothScroll)
			// Initialize
			smoothScrollInstance = SmoothScroll(options);
		})();

		return () => {
			// Cleanup on unmount
			if (smoothScrollInstance && typeof smoothScrollInstance.destroy === "function") {
				smoothScrollInstance.destroy();
			}
		};
	}, [options]);
}
