import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";

const About5 = () => {
	return (
		<section className="tj-about-section-five section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="about-wrapper-four">
							<div
								className="about-images-group-three hover:shine wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<img src="/images/about/h5-about-1.webp" alt="Images" />
								<div className="about-circle">
									<div className="circle-wrap">
										<img
											className="rotate-image"
											src="/images/shapes/h5-about-circle.png"
											alt="image"
										/>
										<span className="logo-icon">
											<img src="/images/icons/logo-icon.svg" alt="" />
										</span>
									</div>
								</div>
								<span className="establish-text">
									<span>Reach</span> 20M
								</span>
							</div>
							<div className="about-content-five">
								<div className="sec-heading style-4">
									<span
										className="sub-title wow fadeInUp"
										data-wow-delay="0.3s"
									>
										ABOUT OUR COMPANY
									</span>
									<h2 className="sec-title text-anim">
										Crafting success tailored solution for each & every
										challenges
									</h2>
								</div>
								<div className="desc wow fadeInUp" data-wow-delay="0.7s">
									<p>
										Our mission is to empoiwers businesses off our all size too
										thrive in an businesses changing marketplaces. In toda
										dynamicis business environment, the key to the success lies
										Our mission is to empower. Our consultancy excels in
										providing quick solutions tailored.
									</p>
								</div>
								<div className="about-funfact">
									<div className="counter-item">
										<FunfactSingle currentValue={8} symbol={".5x"} />
										<span className="sub-title">Faster growth</span>
									</div>
									<div className="counter-item">
										<FunfactSingle currentValue={20} symbol={"M"} />
										<span className="sub-title">Reach worldwide</span>
									</div>
								</div>
								<div
									className="about-button wow fadeInUp"
									data-wow-delay="0.9s"
								>
									<ButtonPrimary text={"Know More"} url={"/contact"} />
								</div>
							</div>
							<div
								className="about_images hover:shine wow fadeInUp"
								data-wow-delay="0.11s"
							>
								<img src="/images/about/h5-about-2.webp" alt="Images" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About5;
