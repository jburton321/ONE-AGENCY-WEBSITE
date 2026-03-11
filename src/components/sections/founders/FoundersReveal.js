"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

// ─── CTAButton ──────────────────────────────────────────────────────────────

const CTA_SIZES = {
	sm: "px-6 py-3.5 min-h-[48px] text-[10px]",
	default: "px-8 sm:px-10 py-4 sm:py-5 min-h-[48px] text-[11px] sm:text-xs",
	lg: "px-10 sm:px-14 py-5 sm:py-7 min-h-[48px] text-[11px] sm:text-xs",
};

const CTA_VARIANTS = {
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
			className={`group ${CTA_VARIANTS[variant]} ${CTA_SIZES[size]} ${fullWidth ? "w-full" : "w-full md:w-auto"} justify-center font-bold uppercase tracking-wide inline-flex items-center gap-3 transition-all duration-300 hover:-translate-y-0.5 ${className}`}
		>
			Request Your Strategy Session
			<ArrowRight
				size={size === "sm" ? 14 : 16}
				className="transition-transform duration-300 group-hover:translate-x-1"
			/>
		</button>
	);
}

// ─── AnimatedOneLogo ────────────────────────────────────────────────────────

const ONE_PATHS = [
	"M485.51,552v-49.5h135l-53-42h-82v-10.55c0-22.06,17.89-39.95,39.95-39.95h171.84c13.04,0,24.54,6.53,31.44,16.5h47.49c-10.06-34.94-42.24-60.5-80.41-60.5h-170.61c-46.22,0-83.7,37.47-83.7,83.7v90.8l5.86,4.34c8.54,5.41,15.33,7.33,25.23,7.16h12.91Z",
	"M728.76,535.5h-.01c-6.89,9.97-18.39,16.5-31.42,16.5h-227.42c-9.29,0-17.81-3.25-24.51-8.66l-7.87-5.81-220.77-165.35c-5.35-4.01-11.86-6.18-18.55-6.18l-219.7.5c-22.41,5.23-37.07,15-46.66,26.3-.15.18-.3.36-.45.54-.13.15-.25.31-.38.46-5.32,6.63-9.01,13.68-11.55,20.45-4.74,12.91-5.47,25.48-5.47,33.93,1.71-21.69,17.09-38.18,38.18-38.18h227.32c9.29,0,17.81,3.25,24.51,8.66l12.61,9.3v-.02l216.36,162.05c5.21,3.9,11.54,6.01,18.05,6.01h244.78c38.17,0,70.35-25.56,80.41-60.5h-47.47Z",
	"M208.02,421.5h0c-13.02-11.11-24.21-12.06-35.06-11.5-5.2.27-8.93,0-8.93,0v102.05c0,12.54-6.98,24.65-16.01,31.98-6.76,5.01-15.8,7.94-24.79,7.94H16.34v.03H-47.79c-21.1,0-38.21-17.11-38.21-38.21v-65.61c0-8.46.73-21.02,5.47-33.93,2.53-6.91,6.22-13.91,11.55-20.45.13-.15.25-.31.38-.46.15-.18.3-.36.45-.54,9.58-11.29,24.25-21.07,46.66-26.3v-.5h-24.8c-46.23,0-83.7,37.47-83.7,83.7v62.61c0,46.22,37.47,83.7,83.7,83.7H17.17v-.03h106.31c30.82,0,58.54-16.64,73.12-41.45h0s.01-.02.01-.02c0,0,0,0,0-.01.48-.82.95-1.65,1.41-2.5l-.1-.02c5.74-11.51,10.09-26.31,10.09-39.68v-90.8Z",
	"M729.33,535.5c-4.47,22.37-13.91,50.27-57.75,60.5h24.8c38.25,0,70.44-25.45,80.42-60.5h-47.47Z",
];

const AGENCY_LETTER_PATHS = [
	"M-21.88,669.46l16.28,44.97h-5.88l-6.78-18.69h-12.22l-6.91,18.69h-5.91l16.5-44.97h4.92ZM-20.04,690.87l-4.31-11.94-4.34,11.94h8.66-.01Z",
	"M134.13,708.31c-4.6,4.42-9.96,6.62-16.06,6.62-6.54,0-12.07-2.25-16.58-6.77-4.51-4.51-6.77-9.92-6.77-16.23s2.25-11.65,6.77-16.19c4.51-4.54,10.04-6.81,16.58-6.81,6.08,0,11.66,2.31,16.72,6.94l-3.94,3.5c-4.12-3.65-8.39-5.47-12.78-5.47-4.79,0-8.93,1.75-12.42,5.23-3.49,3.49-5.23,7.76-5.23,12.8s1.74,9.37,5.23,12.84c3.49,3.48,7.63,5.22,12.42,5.22,4.1,0,7.58-1.15,10.44-3.44v-13.69h5.62v15.44h0Z",
	"M263.02,669.46v4.91h-18.81v15.12h18.81v4.91h-18.81v15.12h18.81v4.91h-24.47v-44.97h24.47Z",
	"M373.44,669.46l25.62,35.94v-35.94h5.66v44.97h-6.25l-24.97-35.03v35.03h-5.66v-44.97h5.6Z",
	"M544.48,704.53l3.94,3.5c-5.06,4.6-10.64,6.91-16.72,6.91-6.54,0-12.07-2.25-16.58-6.77-4.51-4.51-6.77-9.92-6.77-16.23s2.25-11.65,6.77-16.19c4.51-4.54,10.04-6.81,16.58-6.81,6.08,0,11.66,2.31,16.72,6.94l-3.94,3.5c-4.12-3.65-8.39-5.47-12.78-5.47-4.79,0-8.93,1.75-12.42,5.23-3.49,3.49-5.23,7.76-5.23,12.8s1.74,9.37,5.23,12.84c3.49,3.48,7.63,5.22,12.42,5.22,4.4,0,8.66-1.82,12.78-5.47Z",
	"M664.75,696.24l-15.44-26.78h6.25l12.03,20.81,12-20.81h6.25l-15.44,26.78v18.19h-5.66v-18.19h0Z",
];

const BASE_OPACITY = 0.15;
const DRAW_DURATION = 2800;
const STAGGER = 180;
const HOLD_DURATION = 3000;
const DIM_DURATION = 800;
const TYPE_DELAY_START = 1400;
const TYPE_LETTER_INTERVAL = 120;

function AnimatedOneLogo({ active, className = "", style }) {
	const pathRefs = useRef([]);
	const letterRefs = useRef([]);
	const lengths = useRef([]);
	const [ready, setReady] = useState(false);
	const timerRef = useRef(0);
	const typeTimersRef = useRef([]);

	useEffect(() => {
		const measured = [];
		pathRefs.current.forEach((el) => {
			if (el) {
				const len = el.getTotalLength();
				measured.push(len);
				el.style.strokeDasharray = `${len}`;
				el.style.strokeDashoffset = `${len}`;
				el.style.fillOpacity = `${BASE_OPACITY}`;
			}
		});
		lengths.current = measured;

		letterRefs.current.forEach((el) => {
			if (el) {
				el.style.opacity = `${BASE_OPACITY}`;
				el.style.transform = "translateY(0)";
			}
		});

		setReady(true);
	}, []);

	useEffect(() => {
		if (!active || !ready) return;

		function clearTypeTimers() {
			typeTimersRef.current.forEach((t) => window.clearTimeout(t));
			typeTimersRef.current = [];
		}

		function typeIn() {
			clearTypeTimers();
			AGENCY_LETTER_PATHS.forEach((_, i) => {
				const t = window.setTimeout(() => {
					const el = letterRefs.current[i];
					if (!el) return;
					el.style.transition = "opacity 250ms ease, transform 250ms ease";
					el.style.opacity = "1";
					el.style.transform = "translateY(0)";
				}, TYPE_DELAY_START + i * TYPE_LETTER_INTERVAL);
				typeTimersRef.current.push(t);
			});
		}

		function dimLetters() {
			letterRefs.current.forEach((el, i) => {
				if (!el) return;
				const delay = i * 40;
				el.style.transition = `opacity ${DIM_DURATION}ms ease ${delay}ms`;
				el.style.opacity = `${BASE_OPACITY}`;
			});
		}

		function drawIn() {
			const totalDrawTime = (ONE_PATHS.length - 1) * STAGGER + DRAW_DURATION;

			pathRefs.current.forEach((el, i) => {
				if (!el) return;
				const len = lengths.current[i];
				const delay = i * STAGGER;

				el.style.transition = "none";
				el.style.strokeDashoffset = `${len}`;
				el.style.fillOpacity = `${BASE_OPACITY}`;

				requestAnimationFrame(() => {
					requestAnimationFrame(() => {
						el.style.transition = [
							`stroke-dashoffset ${DRAW_DURATION}ms cubic-bezier(0.22, 0.61, 0.36, 1) ${delay}ms`,
							`fill-opacity 700ms ease ${delay + DRAW_DURATION * 0.55}ms`,
						].join(", ");
						el.style.strokeDashoffset = "0";
						el.style.fillOpacity = "1";
					});
				});
			});

			typeIn();
			timerRef.current = window.setTimeout(dimDown, totalDrawTime + HOLD_DURATION);
		}

		function dimDown() {
			pathRefs.current.forEach((el, i) => {
				if (!el) return;
				const delay = i * 50;
				el.style.transition = `fill-opacity ${DIM_DURATION}ms ease ${delay}ms, stroke-dashoffset ${DIM_DURATION}ms ease ${delay}ms`;
				el.style.fillOpacity = `${BASE_OPACITY}`;
				el.style.strokeDashoffset = `${lengths.current[i]}`;
			});

			dimLetters();

			const totalDimTime = (ONE_PATHS.length - 1) * 50 + DIM_DURATION;
			timerRef.current = window.setTimeout(drawIn, totalDimTime + 200);
		}

		drawIn();

		return () => {
			window.clearTimeout(timerRef.current);
			clearTypeTimers();
		};
	}, [active, ready]);

	return (
		<svg viewBox="-300 350 1400 400" className={className} style={style} aria-label="ONE Agency logo">
			{ONE_PATHS.map((d, i) => (
				<path
					key={`one-${i}`}
					ref={(el) => { pathRefs.current[i] = el; }}
					d={d}
					fill="currentColor"
					stroke="currentColor"
					strokeWidth="3"
					strokeLinecap="round"
					strokeLinejoin="round"
					style={{ fillOpacity: BASE_OPACITY }}
				/>
			))}
			{AGENCY_LETTER_PATHS.map((d, i) => (
				<path
					key={`letter-${i}`}
					ref={(el) => { letterRefs.current[i] = el; }}
					d={d}
					fill="currentColor"
					style={{ opacity: BASE_OPACITY }}
				/>
			))}
		</svg>
	);
}

// ─── Founders (sticky video reveal with shrinking portal) ───────────────────

const VIDEO_SRC = "/media/team.mp4";

function Founders({ onAction }) {
	const sectionRef = useRef(null);
	const portalRef = useRef(null);
	const [logoVisible, setLogoVisible] = useState(false);

	useEffect(() => {
		const section = sectionRef.current;
		if (!section) return;
		const io = new IntersectionObserver(
			([e]) => { if (e.isIntersecting) setLogoVisible(true); },
			{ threshold: 0.3 }
		);
		io.observe(section);
		return () => io.disconnect();
	}, []);

	useEffect(() => {
		let ticking = false;

		const update = () => {
			ticking = false;
			const section = sectionRef.current;
			const portal = portalRef.current;
			if (!section || !portal) return;

			const rect = section.getBoundingClientRect();
			let p = -rect.top / window.innerHeight;
			p = Math.max(0, Math.min(1, p));

			const scale = 1 - p;
			const opacity = p > 0.85 ? 1 - (p - 0.85) / 0.15 : 1;
			portal.style.width = `${scale * 100}%`;
			portal.style.height = `${scale * 100}%`;
			portal.style.borderRadius = `${p * 50}px`;
			portal.style.opacity = `${opacity}`;
		};

		const handleScroll = () => {
			if (!ticking) {
				ticking = true;
				requestAnimationFrame(update);
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		update();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section className="reverse-eclipse-section" ref={sectionRef}>
			<div className="eclipse-sticky-stage">
				<div className="eclipse-bg-blur">
					<video autoPlay muted loop playsInline src={VIDEO_SRC} />
					<div className="eclipse-gradient-overlay" />
				</div>

				<div className="eclipse-shrink-portal" ref={portalRef}>
					<div className="eclipse-yt-wrap">
						<video autoPlay muted loop playsInline src={VIDEO_SRC} />
					</div>
				</div>

				<div className="eclipse-header-layer">
					<AnimatedOneLogo
						active={logoVisible}
						className="mx-auto mb-4"
						style={{ width: "clamp(16rem, 40vw, 32rem)", display: "block", filter: "brightness(0) invert(1)" }}
					/>
					<h2 className="liquid-header" style={{ fontSize: "clamp(28px, 5vw, 48px)" }}>
						<span className="black-bar">You&apos;re Not Hiring an Agency.</span>
					</h2>
					<p className="text-white/80 text-base sm:text-xl md:text-2xl font-light leading-relaxed max-w-[600px] mx-auto">
						You&apos;re Hiring Founders Who&apos;ve Been in Your Seat.
					</p>
					<p className="text-white/50 text-xs sm:text-sm md:text-base mt-3 sm:mt-4 max-w-[480px] mx-auto leading-relaxed">
						Most agencies are black boxes. Faceless vendors running your budget on autopilot.
					</p>

					<div className="eclipse-cta-row">
						<CTAButton variant="light" size="sm" onClick={onAction} />
					</div>
				</div>
			</div>
		</section>
	);
}

// ─── FoundersStory (white card that overlaps the video) ─────────────────────

function FoundersStory({ onAction }) {
	const sectionRef = useRef(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = sectionRef.current;
		if (!el) return;
		const obs = new IntersectionObserver(
			([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
			{ threshold: 0.15 }
		);
		obs.observe(el);
		return () => obs.disconnect();
	}, []);

	return (
		<section ref={sectionRef} className="relative z-10" style={{ marginTop: "-100vh" }}>
			<div
				className="relative overflow-hidden rounded-t-[20px] md:rounded-t-[45px]"
				style={{ background: "#ffffff" }}
			>
				<div className="absolute inset-0 pointer-events-none">
					<div className="absolute inset-0 bg-gradient-to-b from-black/[0.02] via-transparent to-black/[0.01]" />
					<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
					<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
				</div>

				<div className="relative max-w-4xl mx-auto px-6 sm:px-10 lg:px-8 py-14 sm:py-20">
					<div
						className="mb-12 transition-all duration-1000 ease-out"
						style={{
							opacity: visible ? 1 : 0,
							transform: visible ? "translateY(0)" : "translateY(40px)",
						}}
					>
						<div className="flex items-center gap-3 mb-8">
							<div className="w-8 h-px bg-slate-400" />
							<span className="text-[10px] font-bold uppercase text-slate-500">
								The People Behind Your Growth
							</span>
						</div>

						<p className="text-slate-700 text-base sm:text-lg md:text-xl leading-[1.8] font-light">
							ONE Agency was co-founded by serial entrepreneurs{" "}
							<span className="text-slate-900 font-medium">Jason Tremblay</span> (CEO) and{" "}
							<span className="text-slate-900 font-medium">Brooke Tremblay</span> (Chief Creative Officer),
							alongside <span className="text-slate-900 font-medium">John and Marcia Rowley</span>,
							founders of International Cruise &amp; Excursions.{" "}
							<span className="text-slate-900 font-semibold">Three INC 5000 companies built and sold.</span>
						</p>
					</div>

					<div
						className="mb-12 transition-all duration-1000 ease-out delay-200"
						style={{
							opacity: visible ? 1 : 0,
							transform: visible ? "translateY(0)" : "translateY(40px)",
						}}
					>
						<p className="text-slate-600 text-base sm:text-lg leading-[1.85] font-light">
							Your strategy is built by people who&apos;ve run payroll, lost sleep over acquisition costs,
							and know what revenue pressure feels like. They build your growth plan the way they&apos;d
							build their own, backed by{" "}
							<span className="text-slate-800 font-medium">years of managed media experience</span> and a
							full team of data scientists, creative directors, and conversion engineers working
							exclusively on your growth in{" "}
							<span className="text-slate-800 font-medium">Orlando, FL</span>.
						</p>
					</div>

					<div
						className="relative transition-all duration-1000 ease-out delay-500"
						style={{
							opacity: visible ? 1 : 0,
							transform: visible ? "translateY(0)" : "translateY(40px)",
						}}
					>
						<div className="flex items-start gap-5 sm:gap-6">
							<div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden ring-2 ring-slate-200 mt-1">
								<img
									src="/home/headshot.png"
									alt="Jason Tremblay"
									className="w-full h-full object-cover"
									loading="lazy"
									width={64}
									height={64}
								/>
							</div>
							<div className="border-l-2 border-slate-300 pl-6 sm:pl-8 py-1 flex-1">
								<blockquote className="text-slate-900 text-lg sm:text-xl md:text-2xl font-normal italic leading-relaxed">
									&ldquo;You don&apos;t pay us for impressions. You pay us to move the needle on your revenue.&rdquo;
								</blockquote>
								<cite className="block mt-4 not-italic text-slate-600 text-xs sm:text-sm font-medium">
									— Jason Tremblay, CEO &amp; Co-Founder
								</cite>
							</div>
						</div>
					</div>

					<div
						className="mt-10 flex justify-start transition-all duration-1000 ease-out delay-700"
						style={{
							opacity: visible ? 1 : 0,
							transform: visible ? "translateY(0)" : "translateY(20px)",
						}}
					>
						<CTAButton variant="dark" size="sm" onClick={onAction} />
					</div>
				</div>
			</div>
		</section>
	);
}

// ─── Combined Export ────────────────────────────────────────────────────────

export default function FoundersReveal() {
	const router = useRouter();
	const onAction = () => router.push("/contact");

	return (
		<>
			<Founders onAction={onAction} />
			<FoundersStory onAction={onAction} />
		</>
	);
}
