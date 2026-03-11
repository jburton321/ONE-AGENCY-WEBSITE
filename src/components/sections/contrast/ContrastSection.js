"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

// ─── useScrollReveal ────────────────────────────────────────────────────────

function useScrollReveal(delay = 0) {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setTimeout(() => setVisible(true), delay);
					observer.disconnect();
				}
			},
			{ threshold: 0.15 }
		);
		observer.observe(ref.current);
		return () => observer.disconnect();
	}, [delay]);

	return { ref, visible };
}

// ─── CTAButton ──────────────────────────────────────────────────────────────

const SIZES = {
	sm: "px-6 py-3.5 min-h-[48px] text-[10px]",
	default: "px-8 sm:px-10 py-4 sm:py-5 min-h-[48px] text-[11px] sm:text-xs",
	lg: "px-10 sm:px-14 py-5 sm:py-7 min-h-[48px] text-[11px] sm:text-xs",
};

const VARIANTS = {
	dark: "bg-[#1F50DA] text-white hover:bg-black shadow-lg hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.4)]",
	light: "bg-white text-slate-900 hover:bg-slate-50 shadow-lg hover:shadow-xl",
};

function CTAButton({
	variant = "dark",
	size = "default",
	onClick,
	className = "",
	fullWidth = false,
}) {
	return (
		<button
			onClick={onClick}
			className={`group ${VARIANTS[variant]} ${SIZES[size]} ${fullWidth ? "w-full" : "w-full md:w-auto"} justify-center font-bold uppercase tracking-wide inline-flex items-center gap-3 transition-all duration-300 hover:-translate-y-0.5 ${className}`}
		>
			Request Your Strategy Session
			<ArrowRight
				size={size === "sm" ? 14 : 16}
				className="transition-transform duration-300 group-hover:translate-x-1"
			/>
		</button>
	);
}

// ─── InteractiveGradientBG ──────────────────────────────────────────────────

function InteractiveGradientBG() {
	return (
		<div
			className="absolute inset-0 w-full h-full"
			style={{ zIndex: 0, background: "#F8FAFC" }}
		/>
	);
}

// ─── ContrastSection ────────────────────────────────────────────────────────

export default function ContrastSection() {
	const router = useRouter();
	const onAction = () => router.push("/contact");
	const { ref, visible } = useScrollReveal(0);
	const cardRef = useRef(null);

	const handleScroll = useCallback(() => {
		const card = cardRef.current;
		if (!card) return;

		const rect = card.getBoundingClientRect();
		const vh = window.innerHeight;
		const progress = Math.max(0, Math.min(1, 1 - rect.top / vh));

		const minScale = 0.7;
		const scale = minScale + (1 - minScale) * progress;
		const borderRadius = 28 * (1 - progress);

		card.style.transform = `scale(${scale})`;
		card.style.borderTopLeftRadius = `${borderRadius}px`;
		card.style.borderTopRightRadius = `${borderRadius}px`;
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, [handleScroll]);

	return (
		<section
			id="philosophy"
			ref={ref}
			className="pb-0 pt-14 sm:pt-20 md:pt-28 lg:pt-32 overflow-visible relative z-0 section-px"
		>
			<InteractiveGradientBG />
			<div className="relative z-10 max-w-5xl mx-auto text-center">
				<div
					className={`transition-all duration-1000 ${
						visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
					}`}
				>
					<div className="sec-heading mb-12">
						<span className="sub-title">
							THE PROBLEM WITH OTHER AGENCIES
						</span>
						<h2 className="sec-title text-anim">
							They Report on What Happened.{" "}
							<br />
							<span>We Orchestrate What&apos;s Next.</span>
						</h2>
					</div>

					<div className="grid sm:grid-cols-2 gap-6 mb-10 text-left">
						<div className="px-6 py-5 rounded-xl border border-slate-200/80 bg-slate-50/50">
							<div className="flex items-center gap-3 mb-3">
								<div className="h-px w-6 bg-gradient-to-r from-slate-400 to-slate-300" />
								<span className="text-[8px] font-black uppercase text-slate-500">The Pattern</span>
							</div>
							<p className="text-slate-600 text-sm sm:text-[15px] font-medium leading-relaxed">
								Most agencies deliver a monthly deck that explains why the numbers missed. Then they
								bill you again to miss the same numbers with a different creative.
								They&apos;re&nbsp;observers.
							</p>
						</div>

						<div className="px-6 py-5 rounded-xl border border-blue-200/60 bg-blue-50/40">
							<div className="flex items-center gap-3 mb-3">
								<div className="h-px w-6 bg-gradient-to-r from-blue-600 to-cyan-500" />
								<span className="text-[8px] font-black uppercase text-blue-600">A Different Premise</span>
							</div>
							<p className="text-slate-800 text-sm sm:text-[15px] font-semibold leading-relaxed">
								Your campaigns deserve a different premise: performance is engineered, not hoped for.
								Proprietary MarTech, a creative team wired for conversion, and data intelligence that
								other agencies can&apos;t access. We don&apos;t explain the gap. We close&nbsp;it.
							</p>
						</div>
					</div>

					<CTAButton onClick={onAction} />
				</div>
			</div>

			<div className="relative z-0 flex justify-center mt-8 sm:mt-10 md:mt-12 lg:mt-14">
				<div
					ref={cardRef}
					className="w-[90vw] max-w-6xl overflow-hidden will-change-transform shadow-2xl shadow-slate-900/20"
					style={{ transformOrigin: "bottom center", borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
				>
					<img
						src="/home/dash.png"
						alt="myONE Dashboard"
						className="w-full h-auto block"
					/>
				</div>
			</div>
		</section>
	);
}
