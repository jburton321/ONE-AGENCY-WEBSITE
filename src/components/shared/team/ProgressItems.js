"use client";
import tjProgressBar from "@/libs/tjProgressBar";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const ProgressItems = () => {
	const animContainerRef = useRef();
	useGSAP(() => {
		tjProgressBar(animContainerRef);
	});
	return (
		<div className="team-details__skills" ref={animContainerRef}>
			<h4 className="team-details__subtitle text-anim">Professional skills</h4>
			<p className="wow fadeInUp" data-wow-delay="0.3s">
				Our mission is to empowers businesses size to thrivie in ses ever
				changing marketplace We are committed to the delivering exceptionals the
				value thro strategic ins innovative approaches. Our consulting of our
				missing empowers
			</p>
			<ul className="tj-progress__list wow fadeInUp" data-wow-delay="0.5s">
				<li>
					<h6 className="tj-progress__title">Business consultants</h6>
					<div className="tj-progress">
						<div className="tj-progress__bar" data-perchant="90">
							<span className="tj-progress__perchant">90%</span>
						</div>
					</div>
				</li>
				<li>
					<h6 className="tj-progress__title">Client communication</h6>
					<div className="tj-progress">
						<div className="tj-progress__bar" data-perchant="82">
							<span className="tj-progress__perchant">82%</span>
						</div>
					</div>
				</li>
				<li>
					<h6 className="tj-progress__title">Business strategy</h6>
					<div className="tj-progress">
						<div className="tj-progress__bar" data-perchant="88">
							<span className="tj-progress__perchant">88%</span>
						</div>
					</div>
				</li>
				<li>
					<h6 className="tj-progress__title">Digital marketing</h6>
					<div className="tj-progress">
						<div className="tj-progress__bar" data-perchant="90">
							<span className="tj-progress__perchant">90%</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default ProgressItems;
