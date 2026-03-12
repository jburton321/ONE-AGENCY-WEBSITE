"use client";

import { useEffect, useRef, useState } from "react";

export default function CIQHero() {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.15 }
		);
		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<section id="technology" ref={ref} className="relative overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 w-full h-full" style={{ zIndex: 0, background: "#F8FAFC" }} />

			<div className="relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
					{/* Left — Copy */}
					<div
						className={`backdrop-blur-[40px] bg-white/90 border border-white/50 rounded-none py-8 md:py-12 px-5 sm:px-8 lg:pl-20 lg:pr-12 shadow-[0_12px_64px_rgba(0,0,0,0.2),inset_0_2px_0_rgba(255,255,255,0.9),inset_0_-2px_0_rgba(255,255,255,0.35)] transition-all duration-700 ${
							visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
						}`}
					>
						<div className="sec-heading mb-6">
							<span className="sub-title">POWERED BY PARTNERSHIP</span>
						</div>
						<h2 className="sec-title text-anim text-3xl md:text-4xl lg:text-5xl mb-10 uppercase leading-tight">
							YOUR LEADS WORK HARDER.
							<br />
							<span className="text-blue-600">WE BUILT AN AI THAT CLOSES THEM.</span>
						</h2>
						<div className="desc space-y-5 sm:space-y-6">
							<p>
								ONE Agency gets you in front of the right buyers. But what happens the moment they
								click? Most agencies send traffic to a landing page and hope. We don&apos;t hope. We
								&nbsp;deploy.
							</p>
							<p>
								We&apos;ve partnered exclusively with ConversionIQ — the most sophisticated
								autonomous AI sales platform on the market — to make sure every lead your campaign
								generates gets engaged, qualified, and converted. Automatically. In real time.
								Without you lifting a&nbsp;finger.
							</p>
							<p className="font-bold">
								This is what happens when best-in-class lead acquisition meets best-in-class
								conversion intelligence: your pipeline stops&nbsp;leaking.
							</p>
						</div>
					</div>

					{/* Right — ConversionIQ Logo */}
					<div
						className={`relative overflow-hidden transition-all duration-700 delay-200 min-h-[300px] sm:min-h-[400px] lg:min-h-0 ${
							visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
						}`}
					>
						<div className="absolute inset-0">
							<div
								className="relative flex items-center justify-center p-8 border h-full"
								style={{
									background:
										"linear-gradient(rgb(37, 99, 235) 0%, rgb(29, 78, 216) 40%, rgb(0, 26, 95) 100%)",
									borderColor: "rgba(37, 99, 235, 0.3)",
								}}
							>
								<img
									src="/home/ciq.svg"
									alt="Conversion IQ"
									className="object-contain w-full drop-shadow-2xl"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
