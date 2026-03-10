"use client";

import HeroAlt from "./HeroAlt";

export default function Hero() {
	return <HeroAlt onAction={() => (window.location.href = "/contact")} />;
}
