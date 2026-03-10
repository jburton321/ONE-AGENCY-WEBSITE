"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { TrendingUp } from "lucide-react";

function formatNumber(value, decimals) {
	const parts = value.toFixed(decimals).split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return parts.join(".");
}

function GainArrow({ started }) {
	const [pulse, setPulse] = useState(false);

	useEffect(() => {
		if (!started) return;
		const interval = setInterval(() => {
			setPulse(true);
			setTimeout(() => setPulse(false), 600);
		}, 2000 + Math.random() * 1500);
		return () => clearInterval(interval);
	}, [started]);

	return (
		<span
			className="live-stats__gain-arrow inline-flex items-center gap-0.5 ml-1.5"
			style={{
				opacity: started ? 1 : 0,
				transform: pulse ? "translateY(-2px)" : "translateY(0)",
			}}
		>
			<TrendingUp
				size={14}
				className="live-stats__gain-icon text-emerald-500"
				style={{
					filter: pulse ? "drop-shadow(0 0 6px rgba(52,211,153,0.6))" : "none",
				}}
			/>
		</span>
	);
}

const STATS = [
	{ end: 10576243, decimals: 0, prefix: "", label: "Qualified Leads Generated", rate: 0.8 },
	{ end: 105879269.89, decimals: 2, prefix: "$", label: "Media Spend Under Management", rate: 3.2 },
	{ end: 6904297451, decimals: 0, prefix: "", label: "Impressions Delivered", rate: 24 },
	{ end: 456615, decimals: 0, prefix: "", label: "E-Commerce Transactions", rate: 0.4 },
];

const RAMP_DURATION = 2000;

function easeOutExpo(t) {
	return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function AnimatedStat({ stat, started }) {
	const [display, setDisplay] = useState(`${stat.prefix}${formatNumber(0, stat.decimals)}`);
	const valueRef = useRef(0);

	useEffect(() => {
		if (!started) return;
		let raf;
		const t0 = performance.now();

		const tick = (now) => {
			const elapsed = now - t0;
			const rampProgress = Math.min(elapsed / RAMP_DURATION, 1);
			const rampedBase = easeOutExpo(rampProgress) * stat.end;
			const liveExtra = Math.max(0, elapsed / 1000) * stat.rate;
			const value = rampedBase + (rampProgress >= 1 ? liveExtra : 0);
			valueRef.current = value;
			setDisplay(`${stat.prefix}${formatNumber(value, stat.decimals)}`);
			raf = requestAnimationFrame(tick);
		};

		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [started, stat]);

	return (
		<div className="flex flex-col items-center text-center px-2">
			<span className="live-stats__value tabular-nums leading-none">
				{display}
				<GainArrow started={started} />
			</span>
			<span className="live-stats__label mt-1.5 leading-tight">{stat.label}</span>
		</div>
	);
}

export default function LiveStats() {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);
	const [started, setStarted] = useState(false);

	const onIntersect = useCallback(([entry]) => {
		if (entry?.isIntersecting) {
			setVisible(true);
			setStarted(true);
		}
	}, []);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(onIntersect, { threshold: 0.2 });
		observer.observe(ref.current);
		return () => observer.disconnect();
	}, [onIntersect]);

	return (
		<section ref={ref} className="relative w-full overflow-hidden bg-white">
			<div className="live-stats__gradient absolute inset-0 pointer-events-none" />

			<div
				className={`w-full section-px py-8 sm:py-10 transition-all duration-1000 ${
					visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
				}`}
			>
				<p className="live-stats__subtitle text-center tracking-wide mb-6 sm:mb-8">
					Live Media Spend, Impression & Lead Data
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-0 max-w-[80rem] mx-auto">
					{STATS.map((stat, i) => (
						<div
							key={i}
							className={`relative transition-all duration-700 ${
								visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
							}`}
							style={{ transitionDelay: `${i * 100 + 150}ms` }}
						>
							<AnimatedStat stat={stat} started={started} />
							{i % 2 === 0 && (
								<div className="live-stats__divider absolute right-0 top-1/2 -translate-y-1/2 w-px h-8" />
							)}
							{i < STATS.length - 2 && i % 2 === 1 && (
								<div className="live-stats__divider hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-8" />
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
