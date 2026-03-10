"use client";
import modifyNumber from "@/libs/modifyNumber";
import Link from "next/link";
import { useEffect, useRef } from "react";

const Process4 = () => {
	const containerRef = useRef(null);
	const lineRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;
		const lineActive = lineRef.current;
		const items = container?.querySelectorAll(".process-item");

		if (!container || !lineActive || !items?.length) return;

		const totalPortion = 100 / items.length;

		const handleEnter = (idx, item) => {
			items.forEach(el => el.classList.remove("active"));
			lineActive.style.left = `${totalPortion * idx}%`;

			item.classList.add("active");
		};

		items.forEach((item, idx) => {
			item.addEventListener("mouseenter", () => handleEnter(idx, item));
		});

		// Cleanup listeners on unmount
		return () => {
			items.forEach((item, idx) => {
				item.removeEventListener("mouseenter", () => handleEnter(idx, item));
			});
		};
	}, []);

	const process = [
		{
			id: 1,
			title: (
				<>
					Diagnosis and <br /> researchr
				</>
			),
			desc: "We dive deep into your business—uncovering strengths, bottlenecks, and hidden opportunities through workshops.",
			btnText: "Book discovery call",
		},
		{
			id: 2,
			title: (
				<>
					Tailored business <br /> planning
				</>
			),
			desc: "Clear picture of where you are, we build a tailored strategy aligned with your goals—whether it’s scaling operations.",
			btnText: "Explore map",
		},
		{
			id: 3,
			title: (
				<>
					Execution and <br /> Support
				</>
			),
			desc: "Roll up our sleeves and work side-by-side with your team to implement the strategy. From hands-on support to performance.",
			btnText: "Book consultation",
		},
	];
	return (
		<section
			ref={containerRef}
			id="tj-process-2"
			className="h8-process section-space"
		>
			<div className="container">
				<div className="row ">
					<div className="col-12">
						<div className="sec-heading h8-section-heading sec-heading-centered style-4">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								OUR WORKING PROCESS{" "}
							</span>
							<h2 className="sec-title text-anim">
								Three steps transform for our business
							</h2>
						</div>
					</div>

					<div className="col-12">
						<div className="h8-process-inner ">
							<div className="process-line">
								<div className="process-line-active" ref={lineRef}></div>
							</div>
							{process?.length
								? process?.map(({ id, title, desc, btnText }, idx) => (
										<div
											className={`process-item style-4 ${
												idx === 0 ? "active" : ""
											}  wow fadeInLeft`}
											data-wow-delay={`0.${idx + 2 + idx}s`}
											key={idx}
										>
											<div className="process-index">
												<span>{modifyNumber(idx + 1)} </span>
											</div>
											<div className="process-content">
												<h5 className="title">{title}</h5>
												<div className="desc">
													<p>{desc}</p>
												</div>
												<Link
													className="service-button text-btn"
													href={`/services/${id}`}
												>
													{btnText} <i className="tji-angle-right"></i>
												</Link>
											</div>
										</div>
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Process4;
