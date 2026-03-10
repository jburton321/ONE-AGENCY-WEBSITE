"use client";

import tjProgressBar from "@/libs/tjProgressBar";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Skills1 = () => {
	const animContainerRef = useRef();
	useGSAP(() => {
		tjProgressBar(animContainerRef);
	});
	return (
		<section
			ref={animContainerRef}
			className="tj-skill-section"
			style={{
				backgroundImage: "url('/images/experience/experience-bg.webp')",
			}}
		>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="skill-wrapper">
							<h2 className="title text-anim">Tech stack and expertise</h2>
							<div className="desc wow fadeInUp" data-wow-delay="0.1s">
								<p>
									Our proprietary tech stack, persuasive creative and actionable data analytics overcome the failures of other major advertisers.
								</p>
							</div>
							<div
								className="tj-progress-bar wow fadeInUp"
								data-wow-delay="0.3s"
							>
								<ul className="tj-progress__list style-2 mt-0">
									<li>
										<h6 className="tj-progress__title">Paid media & targeting</h6>
										<div className="tj-progress">
											<div className="tj-progress__bar" data-perchant="90">
												<span className="tj-progress__perchant">90%</span>
											</div>
										</div>
									</li>
									<li>
										<h6 className="tj-progress__title">Creative & data analytics</h6>
										<div className="tj-progress">
											<div className="tj-progress__bar" data-perchant="82">
												<span className="tj-progress__perchant">82%</span>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills1;
