"use client";

import { ArrowRight } from "lucide-react";

export function CTAButton({ onClick }) {
	return (
		<button
			type="button"
			onClick={onClick}
			className="font-body text-body inline-flex items-center justify-center gap-2 rounded-full font-bold px-8 py-4 bg-cyan-600 text-white shadow-lg hover:scale-[1.02] hover:shadow-xl transition-all duration-200"
		>
			Get started
			<ArrowRight className="w-5 h-5" aria-hidden />
		</button>
	);
}
