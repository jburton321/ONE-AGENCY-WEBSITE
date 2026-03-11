"use client";

import { useEffect, useRef, useState } from "react";

export default function useScrollReveal(delay = 0) {
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
