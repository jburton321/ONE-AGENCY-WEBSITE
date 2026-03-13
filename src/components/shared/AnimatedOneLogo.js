"use client";

import { useEffect, useRef, useState } from "react";

/* Paths from ONE-Agency-Logo.svg - ONE shape (4 paths) */
const ONE_PATHS = [
	"M615.5,186v-49.5h135l-53-42h-82v-10.6c0-22.1,17.9-40,40-40h171.8c13,0,24.5,6.5,31.4,16.5h47.5C896.2,25.6,864,0,825.8,0h-170.6c-46.2,0-83.7,37.5-83.7,83.7v90.8l4.9,3.6c8.8,6,14.6,8,26.2,7.9h12.9Z",
	"M858.7,169.5c-6.9,10-18.4,16.5-31.4,16.5h-227.4c-9.3,0-17.8-3.2-24.5-8.7l-7.9-5.8L346.8,6.2C341.4,2.2,334.9,0,328.2,0H108.5C36.1,18.8,44,82.2,44,82.2c0-21.1,17.1-38.2,38.2-38.2h227.3c9.3,0,17.8,3.2,24.5,8.7l12.6,9.3h0s216.4,162,216.4,162c5.2,3.9,11.5,6,18,6h220c54.5-11.7,57.8-60.5,57.8-60.5h0Z",
	"M338,146.3V55.6s-6.1-5.1-10.7-7.3c-5.5-2.7-9.3-4.1-17.9-4.3h-15.5v102c0,12.5,2.4,35.9-20.9,40H82.2c-21.1,0-38.2-17.1-38.2-38.2v-65.6C44,61.1,48.5,14.5,108.5.5V0h-24.8C37.5,0,0,37.5,0,83.7v62.6c0,46.2,37.5,83.7,83.7,83.7h199.5c18,0,34.6-9.8,43-25.8,14.2-26.8,11.8-46.9,11.8-58Z",
	"M858.7,169.5c-4.5,22.4-13.9,50.3-57.8,60.5h24.8c38.2,0,70.4-25.4,80.4-60.5h-47.5Z",
];

/* Paths from ONE-Agency-Logo.svg - AGENCY letters (6 paths) */
const AGENCY_LETTER_PATHS = [
	"M108.1,303.5l16.3,45h-5.9l-6.8-18.7h-12.2l-6.9,18.7h-5.9l16.5-45h4.9ZM110,324.9l-4.3-11.9-4.3,11.9h8.7,0Z",
	"M264.1,342.3c-4.6,4.4-10,6.6-16.1,6.6s-12.1-2.2-16.6-6.8c-4.5-4.5-6.8-9.9-6.8-16.2s2.2-11.6,6.8-16.2c4.5-4.5,10-6.8,16.6-6.8s11.7,2.3,16.7,6.9l-3.9,3.5c-4.1-3.6-8.4-5.5-12.8-5.5s-8.9,1.8-12.4,5.2c-3.5,3.5-5.2,7.8-5.2,12.8s1.7,9.4,5.2,12.8c3.5,3.5,7.6,5.2,12.4,5.2s7.6-1.1,10.4-3.4v-13.7h5.6v15.4h0Z",
	"M393,303.5v4.9h-18.8v15.1h18.8v4.9h-18.8v15.1h18.8v4.9h-24.5v-45h24.5Z",
	"M503.4,303.5l25.6,35.9v-35.9h5.7v45h-6.2l-25-35v35h-5.7v-45h5.6Z",
	"M674.5,338.5l3.9,3.5c-5.1,4.6-10.6,6.9-16.7,6.9s-12.1-2.2-16.6-6.8c-4.5-4.5-6.8-9.9-6.8-16.2s2.2-11.6,6.8-16.2c4.5-4.5,10-6.8,16.6-6.8s11.7,2.3,16.7,6.9l-3.9,3.5c-4.1-3.6-8.4-5.5-12.8-5.5s-8.9,1.8-12.4,5.2c-3.5,3.5-5.2,7.8-5.2,12.8s1.7,9.4,5.2,12.8c3.5,3.5,7.6,5.2,12.4,5.2s8.7-1.8,12.8-5.5Z",
	"M794.8,330.2l-15.4-26.8h6.2l12,20.8,12-20.8h6.2l-15.4,26.8v18.2h-5.7v-18.2h0Z",
];

const ONE_GRADIENT_IDS = ["one-logo-linear", "one-logo-linear1", "one-logo-linear2", "one-logo-linear3"];

const BASE_OPACITY = 0.15;
const DRAW_DURATION = 1800;
const STAGGER = 120;
const HOLD_DURATION = 3000;
const DIM_DURATION = 800;
const TYPE_DELAY_START = 900;
const TYPE_LETTER_INTERVAL = 80;
const GRADIENT_FADE_DURATION = 600;
const GRADIENT_FADE_DELAY = 150;

export default function AnimatedOneLogo({ active = true, className = "", style, subtitle }) {
	const pathRefs = useRef([]);
	const gradientPathRefs = useRef([]);
	const letterRefs = useRef([]);
	const lengths = useRef([]);
	const [ready, setReady] = useState(false);
	const timerRef = useRef(0);
	const typeTimersRef = useRef([]);

	const useTextSubtitle = !!subtitle;
	const letterCount = useTextSubtitle ? 1 : AGENCY_LETTER_PATHS.length;

	useEffect(() => {
		const measured = [];
		pathRefs.current.forEach((el) => {
			if (el) {
				const len = el.getTotalLength();
				measured.push(len);
				el.style.strokeDasharray = `${len}`;
				el.style.strokeDashoffset = `${len}`;
			}
		});
		lengths.current = measured;

		gradientPathRefs.current.forEach((el) => {
			if (el) el.style.fillOpacity = `${BASE_OPACITY}`;
		});

		letterRefs.current.forEach((el) => {
			if (el) el.style.opacity = `${BASE_OPACITY}`;
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
			for (let i = 0; i < letterCount; i++) {
				const t = window.setTimeout(() => {
					const el = letterRefs.current[i];
					if (!el) return;
					el.style.transition = useTextSubtitle
						? "opacity 600ms ease"
						: "opacity 250ms ease, transform 250ms ease";
					el.style.opacity = "1";
					if (!useTextSubtitle) el.style.transform = "translateY(0)";
				}, TYPE_DELAY_START + i * TYPE_LETTER_INTERVAL);
				typeTimersRef.current.push(t);
			}
		}

		function dimLetters() {
			for (let i = 0; i < letterCount; i++) {
				const el = letterRefs.current[i];
				if (!el) return;
				const delay = i * 40;
				el.style.transition = `opacity ${DIM_DURATION}ms ease ${delay}ms`;
				el.style.opacity = `${BASE_OPACITY}`;
			}
		}

		function drawIn() {
			const totalDrawTime = (ONE_PATHS.length - 1) * STAGGER + DRAW_DURATION;

			pathRefs.current.forEach((el, i) => {
				if (!el) return;
				const len = lengths.current[i];
				const delay = i * STAGGER;
				el.style.transition = "none";
				el.style.strokeDashoffset = `${len}`;
				requestAnimationFrame(() => {
					requestAnimationFrame(() => {
						el.style.transition = `stroke-dashoffset ${DRAW_DURATION}ms cubic-bezier(0.22, 0.61, 0.36, 1) ${delay}ms`;
						el.style.strokeDashoffset = "0";
					});
				});
			});

			gradientPathRefs.current.forEach((el, i) => {
				if (!el) return;
				const delay = totalDrawTime + GRADIENT_FADE_DELAY + i * 60;
				el.style.transition = "none";
				el.style.fillOpacity = `${BASE_OPACITY}`;
				requestAnimationFrame(() => {
					requestAnimationFrame(() => {
						el.style.transition = `fill-opacity ${GRADIENT_FADE_DURATION}ms ease ${delay}ms`;
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
				el.style.transition = `stroke-dashoffset ${DIM_DURATION}ms ease ${delay}ms`;
				el.style.strokeDashoffset = `${lengths.current[i]}`;
			});
			gradientPathRefs.current.forEach((el, i) => {
				if (!el) return;
				const delay = i * 50;
				el.style.transition = `fill-opacity ${DIM_DURATION}ms ease ${delay}ms`;
				el.style.fillOpacity = `${BASE_OPACITY}`;
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
	}, [active, ready, useTextSubtitle, letterCount]);

	const label = subtitle ? `ONE ${subtitle} logo` : "ONE Agency logo";

	return (
		<svg viewBox="0 0 906.2 348.9" preserveAspectRatio="xMidYMid meet" className={className} style={style} aria-label={label}>
			<defs>
				<linearGradient id="one-logo-linear" x1="739.2" y1="347.1" x2="738.5" y2="181" gradientTransform="translate(0 350) scale(1 -1)" gradientUnits="userSpaceOnUse">
					<stop offset="0" stopColor="#1a1a1a" />
					<stop offset=".5" stopColor="#2d2d2d" />
					<stop offset=".7" stopColor="#3d3d3d" />
					<stop offset=".9" stopColor="#4a4a4a" />
				</linearGradient>
				<linearGradient id="one-logo-linear1" x1="43.7" y1="235" x2="858.8" y2="235" gradientTransform="translate(0 350) scale(1 -1)" gradientUnits="userSpaceOnUse">
					<stop offset="0" stopColor="#0f0f0f" />
					<stop offset=".2" stopColor="#1a1a1a" />
					<stop offset=".4" stopColor="#252525" />
					<stop offset=".5" stopColor="#2d2d2d" />
					<stop offset=".6" stopColor="#353535" />
					<stop offset=".8" stopColor="#3d3d3d" />
					<stop offset="1" stopColor="#4a4a4a" />
				</linearGradient>
				<linearGradient id="one-logo-linear2" x1="-5.6" y1="39" x2="347" y2="214.5" gradientUnits="userSpaceOnUse">
					<stop offset="0" stopColor="#1a1a1a" />
					<stop offset=".4" stopColor="#2d2d2d" />
					<stop offset=".7" stopColor="#3d3d3d" />
					<stop offset="1" stopColor="#4a4a4a" />
				</linearGradient>
				<linearGradient id="one-logo-linear3" x1="859.3" y1="119.4" x2="821.8" y2="321.4" gradientTransform="translate(0 350) scale(1 -1)" gradientUnits="userSpaceOnUse">
					<stop offset="0" stopColor="#1a1a1a" />
					<stop offset=".4" stopColor="#2d2d2d" />
					<stop offset=".7" stopColor="#3d3d3d" />
					<stop offset="1" stopColor="#4a4a4a" />
				</linearGradient>
			</defs>
			{/* Layer 1: Gradient fill - fades in after stroke completes */}
			<g>
				{ONE_PATHS.map((d, i) => (
					<path
						key={`one-fill-${i}`}
						ref={(el) => { gradientPathRefs.current[i] = el; }}
						d={d}
						fill={`url(#${ONE_GRADIENT_IDS[i]})`}
						style={{ fillOpacity: BASE_OPACITY }}
					/>
				))}
			</g>
			{/* Layer 2: Stroke outline - draws first */}
			<g>
				{ONE_PATHS.map((d, i) => (
					<path
						key={`one-stroke-${i}`}
						ref={(el) => { pathRefs.current[i] = el; }}
						d={d}
						fill="none"
						stroke="#1a1a1a"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				))}
			</g>
			{useTextSubtitle ? (
				<text
					ref={(el) => { letterRefs.current[0] = el; }}
					x="453"
					y="320"
					fill="#1a1a1a"
					fontSize="42"
					fontWeight="600"
					fontFamily="var(--tj-ff-heading), sans-serif"
					letterSpacing="0.18em"
					textAnchor="middle"
					style={{ opacity: BASE_OPACITY, textTransform: "uppercase" }}
				>
					{subtitle}
				</text>
			) : (
				AGENCY_LETTER_PATHS.map((d, i) => (
					<path
						key={`letter-${i}`}
						ref={(el) => { letterRefs.current[i] = el; }}
						d={d}
						fill="#1a1a1a"
						style={{ opacity: BASE_OPACITY }}
					/>
				))
			)}
		</svg>
	);
}
