import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ProcessItems from "@/components/shared/process/ProcessItems";
const Process3 = () => {
	return (
		<section id="tj-process" className="h7-process  section-space">
			<div className="container">
				<div className="row rg-50">
					<div className="col-xl-5 col-lg-5">
						<div className="process-left">
							<div className="sec-heading style-3">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.2s">
									HOW IT’S WORK
								</span>
								<h2 className="sec-title text-anim">
									Three steps transform for our business
								</h2>
							</div>
							<div className="case-btn wow fadeInUp" data-wow-delay="0.4s">
								<ButtonPrimary text={"Know more"} url={"/contact"} />
							</div>

							{/* <!-- banner img --> */}
							<div
								className="process-banner d-none d-lg-block wow fadeInUp"
								data-wow-delay=".5s"
							>
								<div className="process-banner-bg"></div>
								<img src="/images/process/h7-banner.webp" alt="" />
								<div className="about-circle h7-process-circle">
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
							</div>
						</div>
					</div>
					<div className="col-xl-7 col-lg-7">
						<div className="row ">
							<div className="col-12">
								<ProcessItems />
								{/* <!-- banner img --> */}
								<div className="process-banner d-block d-lg-none">
									<div className="process-banner-bg"></div>
									<img src="/images/process/h7-banner.webp" alt="" />
									<div className="about-circle h7-process-circle">
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
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Process3;
