import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Link from "next/link";

const Cta5 = () => {
	return (
		<section className="h6-cta-section">
			<div className="container-fluid px-0">
				<div className="row g-md-0 align-items-center ">
					<div className="col-md-6">
						<div className="h6-cta-image">
							<img src="/images/cta/h6-cta-bg.webp" alt="img" />
						</div>
					</div>
					<div className="col-md-6">
						<div className="h6-cta-content">
							<div className="sec-heading style-2">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
									// BUILD THE FUTURE
								</span>
								<h2 className="sec-title text-anim">
									Hiring thinkers and doers for consulting
								</h2>
								<div className="desc wow fadeInUp" data-wow-delay="0.3s">
									<p>
										Our mission is to empowers businesses off all size to thrive
										in an our businesses.
									</p>
								</div>
								<div
									className="contact-button mt-30 wow fadeInUp"
									data-wow-delay="0.5s"
								>
									<ButtonPrimary
										text={"Join with us"}
										url={"/contact"}
										className={"white-btn"}
									/>

									<Link className="call-btn-style-2" href="tel:18884521505">
										<span className="icon">
											<i className="tji-phone"></i>
										</span>
										<span className="text">1-888-452-1505</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="h6-cta-shape ">
				<div className="move-anim">
					<i className="tji-brand"></i>
				</div>
			</div>
		</section>
	);
};

export default Cta5;
