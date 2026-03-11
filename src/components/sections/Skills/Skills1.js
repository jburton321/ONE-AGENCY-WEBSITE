"use client";

import { useEffect, useState } from "react";
import getALlServices from "@/libs/getALlServices";

const SKILLS = [
	{ title: "Paid media & targeting", percent: 90, delay: 0 },
	{ title: "Creative & data analytics", percent: 82, delay: 0.3 },
];

function AnimatedBar({ title, percent, delay }) {
	const [counting, setCounting] = useState(0);

	useEffect(() => {
		let frame;
		let start = null;
		const fillDuration = 2000;
		const holdDuration = 2000;
		const emptyDuration = 800;
		const pauseDuration = 600;
		const totalCycle = fillDuration + holdDuration + emptyDuration + pauseDuration;
		const initialDelay = delay * 1000;

		function tick(ts) {
			if (!start) start = ts;
			const elapsed = Math.max(0, ts - start - initialDelay);
			const cyclePos = elapsed % totalCycle;

			let pct = 0;
			if (elapsed < 0) {
				pct = 0;
			} else if (cyclePos < fillDuration) {
				const t = cyclePos / fillDuration;
				pct = t * t * (3 - 2 * t);
			} else if (cyclePos < fillDuration + holdDuration) {
				pct = 1;
			} else if (cyclePos < fillDuration + holdDuration + emptyDuration) {
				const t = (cyclePos - fillDuration - holdDuration) / emptyDuration;
				pct = 1 - t;
			} else {
				pct = 0;
			}

			setCounting(Math.round(pct * percent));
			frame = requestAnimationFrame(tick);
		}

		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [percent, delay]);

	return (
		<li>
			<h6 className="tj-progress__title">{title}</h6>
			<div className="tj-progress">
				<div
					className="tj-progress__bar"
					style={{ width: `${counting}%`, transition: "none" }}
				>
					<span className="tj-progress__perchant">{counting}%</span>
				</div>
			</div>
		</li>
	);
}

const Skills1 = () => {
	const services = getALlServices();
	const additionalServices = services.map((s) => s.title);
	const doubled = [...additionalServices, ...additionalServices];

	return (
		<section
			className="tj-skill-section"
			style={{
				backgroundImage: "url('/images/experience/experience-bg.webp')",
			}}
		>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="skill-wrapper skill-wrapper--enhanced">
							<h2 className="title text-anim">Tech stack and expertise</h2>
							<div className="desc wow fadeInUp" data-wow-delay="0.1s">
								<p>
									Our proprietary tech stack, persuasive creative and actionable data analytics overcome the failures of other major advertisers.
								</p>
							</div>
							<div className="tj-progress-bar wow fadeInUp" data-wow-delay="0.3s">
								<ul className="tj-progress__list style-2 mt-0">
									{SKILLS.map((skill) => (
										<AnimatedBar
											key={skill.title}
											title={skill.title}
											percent={skill.percent}
											delay={skill.delay}
										/>
									))}
								</ul>
							</div>

							{additionalServices.length > 0 && (
								<div className="skills-services-marquee">
									<div className="skills-services-marquee__label">
										Additional services
									</div>
									<div className="skills-services-marquee__track">
										<div className="skills-services-marquee__scroll">
											{doubled.map((name, i) => (
												<div key={i} className="skills-services-marquee__item">
													<i className="tji-check-circle" />
													<span>{name}</span>
												</div>
											))}
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills1;
