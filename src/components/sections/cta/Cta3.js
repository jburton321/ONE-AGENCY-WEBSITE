import Image from "next/image";

const Cta3 = () => {
	return (
		<section className="h4-cta-section">
			<div className="thumb">
				<Image
					src="/images/home-4/cta/h4-cta-bg.webp"
					alt="image"
					width={1920}
					height={310}
				/>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="h4-cta-wrapper">
							<div className="h4-cta-shape">
								<Image
									src="/images/home-4/cta/cta-logo.svg"
									alt="image"
									width={290}
									height={390}
								/>
							</div>
							<div className="h4-cta-newsletter">
								<h2 className="title text-anim">Subscribe to our newsletter</h2>
								<div
									className="newsletter-form style-4 wow fadeInUp"
									data-wow-delay="0.4s"
								>
									<form>
										<div className="form-input">
											<input
												type="email"
												id="email"
												name="email"
												placeholder="Enter email"
												required=""
											/>
											<button type="submit">
												<i className="fa-solid fa-paper-plane"></i> Subscribe
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cta3;
