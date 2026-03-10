import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const Cta4 = () => {
	return (
		<section className="h5-cta-section">
			<div className="thumb">
				<img src="/images/cta/h5-cta-bg.webp" alt="image" />
			</div>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="h5-cta-wrapper">
							<h2 className="sec-title text-anim">
								Need a consultation services?
							</h2>
							<div className="h5-cta-contact wow fadeInUp" data-wow-delay=".3s">
								<ButtonPrimary
									text={"Free consultation"}
									url={"mailto:support@solvior.com"}
									iconName={"tji-email"}
								/>
								<ButtonPrimary
									text={"1-888-452-1505"}
									url={"tel:1-888-452-1505"}
									iconName={"tji-phone"}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cta4;
