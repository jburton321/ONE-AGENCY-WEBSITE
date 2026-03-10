"use client";
import modifyNumber from "@/libs/modifyNumber";
import { useEffect, useRef } from "react";

const Process5 = () => {
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
			title: "Diagnosis & researcher",
			img: "/images/process/h9-process-1.webp",
			desc: "We dive deep into business uncovering strengths, bottleneck hidden opportunities through workshop, interview",
			btnText: "Book discovery call",
		},
		{
			id: 2,
			title: "Business planning",
			img: "/images/process/h9-process-2.webp",
			desc: "Clear picture of where you are, we build a tailored strategy aligned with your goals however scaling operation.",
			btnText: "Explore map",
		},
		{
			id: 3,
			title: "Execution & Support",
			img: "/images/process/h9-process-3.webp",
			desc: "Roll up our sleeves and work side-by-side with your team to implement the hands-on support to performance.",
			btnText: "Book consultation",
		},
	];
	return (
		<section className="h9-process section-space">
			<div className="container">
				<div className="row ">
					<div className="col-12">
						<div className="sec-heading sec-heading-centered style-2">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								[ OUR WORKING PROCESS ]
							</span>
							<h2 className="sec-title text-anim">
								Three steps transform for our business
							</h2>
						</div>
					</div>

					<div className="col-12">
						<div className="h9-process-inner">
							{process?.length
								? process?.map(({ id, title, desc, img, btnText }, idx) => (
										<div
											key={idx}
											className="h9-process-item wow fadeInLeft"
											data-wow-delay={`.${idx + 1 + 2}s`}
										>
											<div className="process-img">
												<img
													src={img ? img : "/images/process/h9-process-1.webp"}
													alt="Images"
												/>
											</div>
											<div className="process-content">
												<span className="step">{modifyNumber(idx + 1)}.</span>
												<h4 className="title">{title}</h4>
												<div className="desc">
													<p>{desc}</p>
												</div>
											</div>
											{idx >= process.length - 1 ? (
												""
											) : (
												<span className="step-text">STEPS.</span>
											)}
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

export default Process5;
