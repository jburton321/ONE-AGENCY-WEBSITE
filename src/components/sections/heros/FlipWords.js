"use client";

import { useEffect, useState, useCallback } from "react";

const FLIP_WORDS = ["ROI", "Growth", "Reach", "Creative", "Revenue", "Results"];
const WORD_HEIGHT = 1.15;
const HOLD_MS = 2200;
const SLIDE_MS = 500;

export default function FlipWords() {
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
						className="block leading-none"
						style={{ color: "#0475FF", height: `${WORD_HEIGHT}em`, lineHeight: `${WORD_HEIGHT}em`, display: "flex", alignItems: "flex-end" }}
					>
						{word}
					</span>
				))}
			</span>
		</span>
	);
}
