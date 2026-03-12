"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { TrendingUp, Zap } from "lucide-react";

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

export function IncreaseCard() {
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
		<div className="rounded-2xl border border-white/40 shadow-lg shadow-black/5 p-4 w-full xl:w-44 backdrop-blur-md" style={{ background: "rgba(255,255,255,0.22)" }}>
			<div className="flex items-center gap-1.5 mb-3">
				<div className="w-5 h-5 rounded-md bg-blue-500/10 border border-blue-300/40 flex items-center justify-center backdrop-blur-md">
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
						<stop offset="0%" stopColor="#0475FF" stopOpacity="0.2" />
						<stop offset="100%" stopColor="#0475FF" stopOpacity="0" />
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
					stroke="#0475FF"
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

export function GrowthLineChart() {
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
		<div className="rounded-2xl border border-white/40 shadow-lg shadow-black/5 p-5 w-full xl:w-64 backdrop-blur-md" style={{ background: "rgba(255,255,255,0.22)" }}>
			<div className="flex justify-between items-center mb-1">
				<span className="text-[10px] font-black uppercase text-slate-600 tracking-wide">Campaign Performance</span>
				<span
					className="text-[9px] font-bold bg-blue-500/10 text-blue-700 px-2 py-0.5 rounded-full border border-blue-500/20"
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
						<stop offset="0%" stopColor="#3B8FFF" stopOpacity="0.18" />
						<stop offset="100%" stopColor="#3B8FFF" stopOpacity="0" />
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
					stroke="#0475FF"
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
						stroke="#0475FF"
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

export function BusinessBarChart() {
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
		<div className="rounded-2xl border border-white/40 shadow-lg shadow-black/5 p-5 w-full xl:w-72 backdrop-blur-md" style={{ background: "rgba(255,255,255,0.22)" }}>
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

export function MetricPill() {
	const { showing, fading } = useChartCycle(1300);
	const fill = showing && !fading;

	return (
		<div className="rounded-2xl border border-white/40 shadow-lg shadow-black/5 flex items-center gap-3.5 p-3 pr-5 backdrop-blur-md" style={{ background: "rgba(255,255,255,0.22)" }}>
			<div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-300/40 flex items-center justify-center backdrop-blur-md">
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
							background: "linear-gradient(90deg, #0475FF 0%, #3B8FFF 100%)",
							transition: `width ${fading ? CARD_FADE : 1000}ms ${fading ? "ease" : "ease-out"}`,
						}}
					/>
				</div>
			</div>
		</div>
	);
}
