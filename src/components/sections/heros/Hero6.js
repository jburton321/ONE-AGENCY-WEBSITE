"use client";

import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import HeroSlider from "@/components/shared/sliders/HeroSlider";
import Image from "next/image";
import { heroCopy } from "@/data/home-copy";
const copy = heroCopy[6];

const Hero6 = () => {
	return (
		<section className="h6-hero-section">
			<div className="container">
				<div className="row">
					<div className="h6-hero-wrapper">
						<div className="h6-hero-content">
							<div className="sub-title wow fadeInRight" data-wow-delay="0s">
								<i className="tji-check"></i> {copy.subTitle}
							</div>
							<h1 className="hero-title text-anim">
								{copy.title} <span>{copy.titleHighlight}</span>
							</h1>
							<div className="desc wow fadeInUp" data-wow-delay="0.3s">
								<p>{copy.desc}</p>
							</div>
							<div className="hero-btn-area wow fadeInUp" data-wow-delay="0.5s">
								<ButtonPrimary text={copy.ctaPrimary} url={"/contact"} />
								<ButtonPrimary text={copy.ctaSecondary} url={"/about"} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="h6-slider-area wow fadeIn" data-wow-delay="0.8s">
				<HeroSlider />
			</div>
			<div className="hero-shapes-1 move-anim">
				<Image
					src="/images/shapes/h4-hero-shape-1.svg"
					alt="Shapes"
					width={180}
					height={180}
					style={{ height: "auto" }}
				/>
			</div>
			<div className="hero-shapes-2 move-anim">
				<Image
					src="/images/shapes/h4-hero-shape-1.svg"
					alt="Shapes"
					width={180}
					height={180}
					style={{ height: "auto" }}
				/>
			</div>
		</section>
	);
};

export default Hero6;
