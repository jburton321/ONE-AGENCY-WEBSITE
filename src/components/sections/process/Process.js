"use client";
import modifyNumber from "@/libs/modifyNumber";
import { useState } from "react";

const Process = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const handleCurrentIndex = idx => {
		setCurrentIndex(idx);
	};
	const process = [
		{
			id: 1,
			title: "Understand business",
			desc: "Our consultancy excels in providing quick solutions tailored to your business challenges",
		},
		{
			id: 1,
			title: "Custom strategy",
			desc: "Our consultancy excels in providing quick solutions tailored to your business challenges",
		},
		{
			id: 1,
			title: "Execute & optimize",
			desc: "Our consultancy excels in providing quick solutions tailored to your business challenges",
		},
	];
	return (
		<section className="h5-process-section">
			<div
				className="h5-process-image"
				style={{
					backgroundImage: "url('/images/process/h5-process-img.webp')",
				}}
			></div>
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="sec-heading style-4">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								HOW ITS WORKS
							</span>
							<h2 className="sec-title text-anim">
								Three steps to transform your business
							</h2>
						</div>

						<div className="h5-process_wrap">
							{process?.length
								? process?.map(({ id, title, desc }, idx) => (
										<div
											key={idx}
											className={`h5-process_item ${
												currentIndex === idx ? "active" : ""
											} wow fadeInLeft`}
											data-wow-delay={`0.${idx + 1 + idx}s`}
											onMouseEnter={() => handleCurrentIndex(idx)}
										>
											<span className="line"></span>
											<div className="step">{modifyNumber(id)}.</div>
											<h5 className="title">{title}</h5>
											<div className="desc">{desc}</div>
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

export default Process;
