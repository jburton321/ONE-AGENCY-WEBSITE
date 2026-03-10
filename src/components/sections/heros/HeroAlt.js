"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { TrendingUp, ArrowRight, Zap, BarChart3, Activity, Target } from "lucide-react";
import { CTAButton } from "./CTAButton";

const FLIP_WORDS = ["ROI", "Growth", "Reach", "Creative", "Revenue", "Results"];
const WORD_HEIGHT = 1.15;
const HOLD_MS = 2200;
const SLIDE_MS = 500;

function FlipWords() {
	const [index, setIndex] = useState(0);
	const [transitioning, setTransitioning] = useState(true);

	const advance = useCallback(() => {
		setTransitioning(true);
		setIndex((prev) => prev + 1);
	}, []);

	useEffect(() => {
		const id = setInterval(advance, HOLD_MS + SLIDE_MS);
		return () => clearInterval(id);
	}, [advance]);

	useEffect(() => {
		if (index === FLIP_WORDS.length) {
			const timeout = setTimeout(() => {
				setTransitioning(false);
				setIndex(0);
			}, SLIDE_MS);
			return () => clearTimeout(timeout);
		}
	}, [index]);

	useEffect(() => {
		if (!transitioning && index === 0) {
			const raf = requestAnimationFrame(() => {
				requestAnimationFrame(() => setTransitioning(true));
			});
			return () => cancelAnimationFrame(raf);
		}
	}, [transitioning, index]);

	const items = [...FLIP_WORDS, FLIP_WORDS[0]];

	return (
		<span className="inline-block overflow-hidden" style={{ height: `${WORD_HEIGHT}em`, verticalAlign: "bottom" }}>
			<span
				className="inline-flex flex-col justify-end"
				style={{
					transform: `translateY(${-index * WORD_HEIGHT}em)`,
					transition: transitioning
						? `transform ${SLIDE_MS}ms cubic-bezier(0.16, 1, 0.3, 1)`
						: "none",
				}}
			>
				{items.map((word, i) => (
					<span
						key={`${word}-${i}`}
						className="block text-cyan-600 leading-none"
						style={{ height: `${WORD_HEIGHT}em`, lineHeight: `${WORD_HEIGHT}em`, display: "flex", alignItems: "flex-end" }}
					>
						{word}
					</span>
				))}
			</span>
		</span>
	);
}

const CARD_DRAW = 1800;
const CARD_HOLD = 2500;
const CARD_FADE = 800;

function useChartCycle(delay = 0) {
	const [phase, setPhase] = useState("draw");
	const [cycle, setCycle] = useState(0);
	const timer = useRef(null);

	const run = useCallback(() => {
		setPhase("draw");
		timer.current = setTimeout(() => {
			setPhase("hold");
			timer.current = setTimeout(() => {
				setPhase("fade");
				timer.current = setTimeout(() => setCycle((c) => c + 1), CARD_FADE);
			}, CARD_HOLD);
		}, CARD_DRAW * 0.4);
	}, []);

	useEffect(() => {
		timer.current = setTimeout(run, delay);
		return () => {
			if (timer.current) clearTimeout(timer.current);
		};
	}, []);

	useEffect(() => {
		if (cycle === 0) return;
		run();
		return () => {
			if (timer.current) clearTimeout(timer.current);
		};
	}, [cycle, run]);

	const showing = phase === "draw" || phase === "hold";
	const fading = phase === "fade";
	return { phase, showing, fading };
}

function IncreaseCard() {
	const { showing, fading } = useChartCycle(1200);
	const pathRef = useRef(null);
	const lenRef = useRef(0);
	const initRef = useRef(false);
	const [measured, setMeasured] = useState(false);

	useEffect(() => {
		const el = pathRef.current;
		if (!el) return;
		if (!initRef.current) {
			const measure = () => {
				try {
					lenRef.current = el.getTotalLength();
					el.style.strokeDasharray = `${lenRef.current}`;
					initRef.current = true;
				} catch {
					lenRef.current = 120;
					el.style.strokeDasharray = "120";
					initRef.current = true;
				}
				setMeasured(true);
			};
			requestAnimationFrame(() => requestAnimationFrame(measure));
			return;
		}
		if (fading) {
			el.style.transition = `stroke-dashoffset ${CARD_FADE}ms ease`;
			el.style.strokeDashoffset = `${lenRef.current}`;
		} else if (showing) {
			el.style.transition = "none";
			el.style.strokeDashoffset = `${lenRef.current}`;
			el.getBoundingClientRect();
			el.style.transition = `stroke-dashoffset ${CARD_DRAW}ms cubic-bezier(0.22,0.61,0.36,1)`;
			el.style.strokeDashoffset = "0";
		}
	}, [showing, fading, measured]);

	const sparkPoints = [38, 32, 35, 24, 28, 18, 14, 10];
	const polyline = sparkPoints.map((y, i) => `${i * 14},${y}`).join(" ");

	return (
		<div className="rounded-2xl border border-white/40 shadow-lg shadow-black/5 p-4 w-full xl:w-44 backdrop-blur-xl" style={{ background: "rgba(255,255,255,0.55)" }}>
			<div className="flex items-center gap-1.5 mb-3">
				<div className="w-5 h-5 rounded-md bg-blue-500/10 border border-blue-300/40 flex items-center justify-center backdrop-blur-sm">
					<TrendingUp size={10} className="text-blue-600" />
				</div>
				<span className="text-[9px] font-black uppercase text-slate-600 tracking-wide">Conv. Rate</span>
			</div>
			<div
				className="flex items-baseline gap-1"
				style={{
					opacity: showing && !fading ? 1 : 0,
					transition: `opacity ${fading ? CARD_FADE : 600}ms ease`,
				}}
			>
				<span className="text-2xl font-extrabold tracking-tighter text-slate-900 tabular-nums">+88</span>
				<span className="text-sm font-extrabold text-blue-600">%</span>
			</div>
			<svg viewBox="0 0 98 44" className="w-full mt-2">
				<defs>
					<linearGradient id="sparkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
						<stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
					</linearGradient>
				</defs>
				<polygon
					points={`0,44 ${polyline} 98,44`}
					fill="url(#sparkGrad)"
					style={{
						opacity: showing && !fading ? 1 : 0,
						transition: `opacity ${fading ? CARD_FADE : 800}ms ease`,
					}}
				/>
				<polyline
					ref={pathRef}
					points={polyline}
					fill="none"
					stroke="#06b6d4"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					style={{
						opacity: fading ? 0 : 1,
						transition: fading ? `opacity ${CARD_FADE}ms ease` : "none",
					}}
				/>
			</svg>
		</div>
	);
}

function GrowthLineChart() {
	const { showing, fading } = useChartCycle(1400);
	const pathRef = useRef(null);
	const lenRef = useRef(0);
	const initRef = useRef(false);
	const [measured, setMeasured] = useState(false);

	const points = [
		{ x: 0, y: 58 },
		{ x: 33, y: 50 },
		{ x: 66, y: 38 },
		{ x: 100, y: 42 },
		{ x: 133, y: 28 },
		{ x: 166, y: 22 },
		{ x: 200, y: 12 },
	];

	const linePath = points.reduce((acc, p, i) => {
		if (i === 0) return `M${p.x},${p.y}`;
		const prev = points[i - 1];
		const cpx = (prev.x + p.x) / 2;
		return `${acc} C${cpx},${prev.y} ${cpx},${p.y} ${p.x},${p.y}`;
	}, "");

	const areaPath = `${linePath} L200,70 L0,70 Z`;

	useEffect(() => {
		const el = pathRef.current;
		if (!el) return;
		if (!initRef.current) {
			const measure = () => {
				try {
					lenRef.current = el.getTotalLength();
					el.style.strokeDasharray = `${lenRef.current}`;
					initRef.current = true;
				} catch {
					lenRef.current = 250;
					el.style.strokeDasharray = "250";
					initRef.current = true;
				}
				setMeasured(true);
			};
			requestAnimationFrame(() => requestAnimationFrame(measure));
			return;
		}
		if (fading) {
			el.style.transition = `stroke-dashoffset ${CARD_FADE}ms ease`;
			el.style.strokeDashoffset = `${lenRef.current}`;
		} else if (showing) {
			el.style.transition = "none";
			el.style.strokeDashoffset = `${lenRef.current}`;
			el.getBoundingClientRect();
			el.style.transition = `stroke-dashoffset ${CARD_DRAW}ms cubic-bezier(0.22,0.61,0.36,1)`;
			el.style.strokeDashoffset = "0";
		}
	}, [showing, fading, measured]);

	return (
		<div className="rounded-2xl border border-white/40 shadow-lg shadow-black/5 p-5 w-full xl:w-64 backdrop-blur-xl" style={{ background: "rgba(255,255,255,0.55)" }}>
			<div className="flex justify-between items-center mb-1">
				<span className="text-[10px] font-black uppercase text-slate-600 tracking-wide">Campaign Performance</span>
				<span
					className="text-[9px] font-bold bg-cyan-500/10 text-cyan-700 px-2 py-0.5 rounded-full border border-cyan-500/20"
					style={{
						opacity: showing && !fading ? 1 : 0,
						transitionProperty: "opacity",
						transitionDuration: `${fading ? CARD_FADE : 500}ms`,
						transitionTimingFunction: "ease",
						transitionDelay: fading ? "0ms" : "800ms",
					}}
				>
					Live
				</span>
			</div>
			<div
				className="flex items-baseline gap-1 mb-4"
				style={{
					opacity: showing && !fading ? 1 : 0,
					transition: `opacity ${fading ? CARD_FADE : 600}ms ease`,
				}}
			>
				<span className="text-xl font-extrabold tracking-tighter text-slate-900 tabular-nums">myONE</span>
				<span className="text-[9px] font-bold text-emerald-600">Dash</span>
			</div>
			<svg viewBox="0 0 200 70" className="w-full">
				<defs>
					<linearGradient id="heroLineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" stopColor="#22d3ee" stopOpacity="0.18" />
						<stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
					</linearGradient>
				</defs>
				{[0, 1, 2, 3].map((i) => (
					<line key={i} x1="0" y1={i * 17.5} x2="200" y2={i * 17.5} stroke="rgba(0,0,0,0.05)" strokeWidth="0.5" />
				))}
				<path
					d={areaPath}
					fill="url(#heroLineGrad)"
					style={{
						opacity: showing && !fading ? 1 : 0,
						transition: `opacity ${fading ? CARD_FADE : 800}ms ease`,
					}}
				/>
				<path
					ref={pathRef}
					d={linePath}
					fill="none"
					stroke="#06b6d4"
					strokeWidth="2.5"
					strokeLinecap="round"
					strokeLinejoin="round"
					style={{
						opacity: fading ? 0 : 1,
						transition: fading ? `opacity ${CARD_FADE}ms ease` : "none",
					}}
				/>
				{points.map((p, i) => (
					<circle
						key={i}
						cx={p.x}
						cy={p.y}
						r="3"
						fill="white"
						stroke="#06b6d4"
						strokeWidth="2"
						style={{
							opacity: showing && !fading ? 1 : 0,
							transitionProperty: "opacity",
							transitionDuration: `${fading ? CARD_FADE : 400}ms`,
							transitionTimingFunction: "ease",
							transitionDelay: fading ? "0ms" : `${i * 80 + 300}ms`,
						}}
					/>
				))}
			</svg>
			<div className="flex justify-between mt-3 text-[8px] font-bold text-slate-400 uppercase tracking-wider">
				<span>Jan</span>
				<span>Feb</span>
				<span>Mar</span>
				<span>Apr</span>
				<span>May</span>
				<span>Jun</span>
				<span>Jul</span>
			</div>
		</div>
	);
}

function BusinessBarChart() {
	const { showing, fading } = useChartCycle(1000);

	const bars = [
		{ h: 35, label: "Mon" },
		{ h: 68, label: "Tue" },
		{ h: 52, label: "Wed" },
		{ h: 88, label: "Thu" },
		{ h: 44, label: "Fri" },
		{ h: 76, label: "Sat" },
		{ h: 60, label: "Sun" },
	];
	const maxH = 88;

	return (
		<div className="rounded-2xl border border-white/40 shadow-lg shadow-black/5 p-5 w-full xl:w-72 backdrop-blur-xl" style={{ background: "rgba(255,255,255,0.55)" }}>
			<div className="flex justify-between items-center mb-1">
				<span className="text-[10px] font-black uppercase text-slate-600 tracking-wide">Weekly Pipeline</span>
				<div
					className="flex items-center gap-1"
					style={{
						opacity: showing && !fading ? 1 : 0,
						transition: `opacity ${fading ? CARD_FADE : 500}ms ease`,
					}}
				>
					<div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
					<span className="text-[9px] font-bold text-emerald-600">Live</span>
				</div>
			</div>
			<div
				className="flex items-baseline gap-1 mb-5"
				style={{
					opacity: showing && !fading ? 1 : 0,
					transition: `opacity ${fading ? CARD_FADE : 600}ms ease`,
				}}
			>
				<span className="text-xl font-extrabold tracking-tighter text-slate-900 tabular-nums">247</span>
				<span className="text-[9px] font-bold text-blue-600">leads</span>
			</div>
			<div className="flex items-end justify-between gap-2 h-24 mb-2">
				{bars.map((bar, i) => {
					const pct = (bar.h / maxH) * 100;
					const isHighest = bar.h === maxH;
					const grow = showing && !fading;
					return (
						<div key={i} className="flex-1 flex flex-col items-center gap-1.5">
							<div className="w-full h-24 flex items-end">
								<div
									className="w-full rounded-md"
									style={{
										height: grow ? `${pct}%` : "4%",
										background: isHighest
											? "linear-gradient(180deg, #2563eb 0%, #3b82f6 100%)"
											: "linear-gradient(180deg, #e2e8f0 0%, #cbd5e1 100%)",
										transitionProperty: "height",
										transitionDuration: `${fading ? CARD_FADE : 700}ms`,
										transitionTimingFunction: fading ? "ease" : "ease-out",
										transitionDelay: fading ? "0ms" : `${i * 70}ms`,
										boxShadow: isHighest && grow ? "0 4px 12px rgba(37,99,235,0.2)" : "none",
									}}
								/>
							</div>
							<span className="text-[7px] font-bold text-slate-400 uppercase">{bar.label}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
}

function MetricPill() {
	const { showing, fading } = useChartCycle(1300);
	const fill = showing && !fading;

	return (
		<div className="rounded-2xl border border-white/40 shadow-lg shadow-black/5 flex items-center gap-3.5 p-3 pr-5 backdrop-blur-xl" style={{ background: "rgba(255,255,255,0.55)" }}>
			<div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-300/40 flex items-center justify-center backdrop-blur-sm">
				<Zap size={16} className="text-blue-600" />
			</div>
			<div className="flex-1 min-w-0">
				<div className="flex items-center justify-between mb-1.5">
					<span className="text-[9px] font-black uppercase text-slate-500 tracking-wide">CPL Reduction</span>
					<span
						className="text-[10px] font-extrabold text-blue-600 tabular-nums"
						style={{
							opacity: fill ? 1 : 0,
							transition: `opacity ${fading ? CARD_FADE : 600}ms ease`,
						}}
					>
						-42%
					</span>
				</div>
				<div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
					<div
						className="h-full rounded-full"
						style={{
							width: fill ? "72%" : "0%",
							background: "linear-gradient(90deg, #06b6d4 0%, #22d3ee 100%)",
							transition: `width ${fading ? CARD_FADE : 1000}ms ${fading ? "ease" : "ease-out"}`,
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default function HeroAlt({ onAction }) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const t = requestAnimationFrame(() => setMounted(true));
		return () => cancelAnimationFrame(t);
	}, []);

	return (
		<section className="relative min-h-screen flex flex-col justify-center pt-40 sm:pt-48 pb-24 overflow-hidden font-body" style={{ backgroundColor: "#F8FAFC" }}>
			<div className="absolute inset-0 hero-alt-grid z-0 pointer-events-none" />

			<div
				className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full blur-[160px] opacity-20 pointer-events-none"
				style={{ background: "radial-gradient(ellipse at center, rgba(8,145,178,0.3) 0%, rgba(6,182,212,0.1) 50%, transparent 80%)" }}
			/>

			<div className="max-w-5xl mx-auto text-left relative z-10 section-px" style={{ marginTop: "5px" }}>
				<div
					className={`font-heading text-body inline-flex items-center gap-2 font-bold mb-6 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
					style={{ color: "var(--tj-color-text-body)", transitionDelay: "100ms" }}
				>
					<span className="tracking-[0.2em] uppercase">
						All you need is <span className="text-cyan-600 font-black">ONE</span>
					</span>
				</div>

				<h1
					className={`liquid-header liquid-header--dark font-heading mb-8 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
					style={{ transitionDelay: "200ms" }}
				>
					<span className="black-bar">
						Better{" "}
						<FlipWords />
						<br />
						starts here.
					</span>
				</h1>

				<p
					className={`font-body text-body max-w-2xl mb-10 leading-relaxed transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
					style={{ color: "var(--tj-color-text-body)", transitionDelay: "400ms" }}
				>
					More customers, lower costs, zero disruption. Our AI-powered MarTech, conversion-obsessed creative, and proprietary data intelligence work as one coordinated&nbsp;engine.
				</p>

				<div
					className={`flex flex-col sm:flex-row justify-start gap-4 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
					style={{ transitionDelay: "600ms" }}
				>
					<CTAButton onClick={onAction} />
				</div>
			</div>

			<div
				className={`xl:hidden relative z-10 mt-16 section-px transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
				style={{ transitionDelay: "800ms" }}
			>
				<div className="grid grid-cols-2 gap-3 max-w-lg mx-auto sm:max-w-xl">
					<div className="flex justify-center">
						<IncreaseCard />
					</div>
					<div className="flex justify-center">
						<MetricPill />
					</div>
					<div className="col-span-2 flex justify-center">
						<GrowthLineChart />
					</div>
				</div>
			</div>

			<div
				className={`absolute top-[22%] left-[12%] hidden xl:block animate-float-hero transition-all duration-1000 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
				style={{ animationDelay: "1.2s", transitionDelay: "800ms" }}
			>
				<IncreaseCard />
			</div>

			<div
				className={`absolute bottom-20 left-[6%] hidden xl:block animate-float-hero transition-all duration-1000 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
				style={{ transitionDelay: "1000ms" }}
			>
				<GrowthLineChart />
			</div>

			<div
				className={`absolute top-[26%] right-[8%] hidden xl:block animate-float-hero transition-all duration-1000 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
				style={{ animationDelay: "2.5s", transitionDelay: "900ms" }}
			>
				<BusinessBarChart />
			</div>

			<div
				className={`absolute bottom-24 right-[15%] hidden xl:block animate-float-hero transition-all duration-1000 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
				style={{ animationDelay: "1.8s", transitionDelay: "1100ms" }}
			>
				<MetricPill />
			</div>

			<div className="hidden xl:block pointer-events-none" aria-hidden="true">
				<div
					className="absolute -left-6 top-[14%] w-52 animate-float-hero"
					style={{ filter: "blur(0.5px) saturate(1.1) contrast(1.05)", opacity: 0.62, transform: "scale(0.95)", animationDelay: "3.2s" }}
				>
					<div className="rounded-2xl border border-white/50 p-4 backdrop-blur-xl" style={{ background: "rgba(255,255,255,0.6)", boxShadow: "0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)" }}>
						<div className="flex items-center gap-1.5 mb-2">
							<div className="w-5 h-5 rounded-md bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center">
								<Activity size={10} className="text-cyan-600" />
							</div>
							<span className="text-[9px] font-black uppercase text-slate-700 tracking-wide">Impressions</span>
						</div>
						<span className="text-xl font-extrabold tracking-tighter text-slate-900 tabular-nums">2.4M</span>
						<div className="mt-2 flex items-end gap-1 h-10">
							{[40, 55, 35, 70, 60, 80, 65].map((h, i) => (
								<div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i === 5 ? "#06b6d4" : "#cbd5e1" }} />
							))}
						</div>
					</div>
				</div>

				<div
					className="absolute -right-5 bottom-[8%] w-56 animate-float-hero"
					style={{ filter: "blur(0.5px) saturate(1.1) contrast(1.05)", opacity: 0.62, transform: "scale(0.95)", animationDelay: "2.6s" }}
				>
					<div className="rounded-2xl border border-white/50 p-4 backdrop-blur-xl" style={{ background: "rgba(255,255,255,0.6)", boxShadow: "0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)" }}>
						<div className="flex items-center gap-1.5 mb-2">
							<div className="w-5 h-5 rounded-md bg-blue-500/15 border border-blue-400/30 flex items-center justify-center">
								<BarChart3 size={10} className="text-blue-600" />
							</div>
							<span className="text-[9px] font-black uppercase text-slate-700 tracking-wide">Revenue</span>
						</div>
						<span className="text-xl font-extrabold tracking-tighter text-slate-900 tabular-nums">$182K</span>
						<svg viewBox="0 0 140 40" className="w-full mt-2">
							<defs>
								<linearGradient id="bgRevGrad" x1="0%" y1="0%" x2="0%" y2="100%">
									<stop offset="0%" stopColor="#2563eb" stopOpacity="0.18" />
									<stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
								</linearGradient>
							</defs>
							<polygon points="0,40 0,32 20,28 40,30 60,22 80,18 100,20 120,12 140,8 140,40" fill="url(#bgRevGrad)" />
							<polyline points="0,32 20,28 40,30 60,22 80,18 100,20 120,12 140,8" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
						</svg>
					</div>
				</div>

				<div
					className="absolute -right-14 top-[8%] w-48 animate-float-hero"
					style={{ filter: "blur(2.5px) saturate(0.6) contrast(0.85) brightness(1.08)", opacity: 0.36, transform: "scale(0.78)", animationDelay: "0.8s" }}
				>
					<div className="rounded-2xl border border-white/25 p-4" style={{ background: "rgba(255,255,255,0.4)", boxShadow: "0 4px 16px rgba(0,0,0,0.03)" }}>
						<div className="flex items-center gap-1.5 mb-2">
							<div className="w-5 h-5 rounded-md bg-blue-500/8 flex items-center justify-center">
								<Target size={10} className="text-blue-500" />
							</div>
							<span className="text-[9px] font-black uppercase text-slate-500 tracking-wide">CTR</span>
						</div>
						<span className="text-xl font-extrabold tracking-tighter text-slate-700 tabular-nums">4.7%</span>
						<div className="h-1.5 bg-slate-100/70 rounded-full mt-3 overflow-hidden">
							<div className="h-full rounded-full w-[72%]" style={{ background: "linear-gradient(90deg, #60a5fa, #93bbfd)" }} />
						</div>
					</div>
				</div>

				<div
					className="absolute -left-16 bottom-[5%] w-48 animate-float-hero"
					style={{ filter: "blur(2.5px) saturate(0.6) contrast(0.85) brightness(1.08)", opacity: 0.36, transform: "scale(0.78)", animationDelay: "1.5s" }}
				>
					<div className="rounded-2xl border border-white/25 p-4" style={{ background: "rgba(255,255,255,0.4)", boxShadow: "0 4px 16px rgba(0,0,0,0.03)" }}>
						<div className="flex items-center gap-1.5 mb-2">
							<div className="w-5 h-5 rounded-md bg-cyan-500/8 flex items-center justify-center">
								<Zap size={10} className="text-cyan-500" />
							</div>
							<span className="text-[9px] font-black uppercase text-slate-500 tracking-wide">ROAS</span>
						</div>
						<div className="flex items-baseline gap-1">
							<span className="text-xl font-extrabold tracking-tighter text-slate-700 tabular-nums">6.2</span>
							<span className="text-[9px] font-bold text-emerald-500">x</span>
						</div>
						<div className="mt-2 grid grid-cols-4 gap-1">
							{[65, 80, 55, 90].map((h, i) => (
								<div key={i} className="rounded-sm" style={{ height: `${h * 0.3}px`, background: i === 3 ? "#67e8f9" : "#e2e8f0" }} />
							))}
						</div>
					</div>
				</div>

				<div
					className="absolute left-[2%] top-[72%] w-44 animate-float-hero"
					style={{ filter: "blur(5px) saturate(0.3) contrast(0.7) brightness(1.18)", opacity: 0.2, transform: "scale(0.6)", animationDelay: "4s" }}
				>
					<div className="rounded-2xl border border-white/15 p-3.5" style={{ background: "rgba(255,255,255,0.3)", boxShadow: "none" }}>
						<div className="flex items-center gap-1.5 mb-2">
							<div className="w-5 h-5 rounded-md bg-blue-500/5 flex items-center justify-center">
								<TrendingUp size={10} className="text-blue-400" />
							</div>
							<span className="text-[9px] font-black uppercase text-slate-400 tracking-wide">CPA</span>
						</div>
						<span className="text-lg font-extrabold tracking-tighter text-slate-500 tabular-nums">$12.40</span>
						<div className="h-1 bg-slate-100/50 rounded-full mt-2 overflow-hidden">
							<div className="h-full rounded-full w-[58%]" style={{ background: "linear-gradient(90deg, #a5f3fc, #cffafe)" }} />
						</div>
					</div>
				</div>

				<div
					className="absolute right-[1%] top-[55%] w-44 animate-float-hero"
					style={{ filter: "blur(5px) saturate(0.3) contrast(0.7) brightness(1.18)", opacity: 0.2, transform: "scale(0.6)", animationDelay: "3.8s" }}
				>
					<div className="rounded-2xl border border-white/15 p-3.5" style={{ background: "rgba(255,255,255,0.3)", boxShadow: "none" }}>
						<div className="flex items-center gap-1.5 mb-2">
							<div className="w-5 h-5 rounded-md bg-cyan-500/5 flex items-center justify-center">
								<Activity size={10} className="text-cyan-400" />
							</div>
							<span className="text-[9px] font-black uppercase text-slate-400 tracking-wide">Sessions</span>
						</div>
						<span className="text-lg font-extrabold tracking-tighter text-slate-500 tabular-nums">48.2K</span>
						<div className="flex items-end gap-0.5 h-8 mt-2">
							{[30, 50, 40, 65, 55, 75, 60, 85, 70].map((h, i) => (
								<div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i >= 7 ? "#a5f3fc" : "#e2e8f0" }} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
