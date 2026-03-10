"use client";

import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

// Register GSAP plugins only once
if (typeof window !== "undefined" && !gsap.core.globals().ScrollTrigger) {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
}

export { gsap, ScrollSmoother, ScrollTrigger, SplitText };
