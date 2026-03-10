import ProgressBar from "@/components/shared/progress/ProgressBar";
import Image from "next/image";

const Progress1 = () => {
	return (
		<section className="tj-progress-section section-space">
			<div
				className="progress-bg-images d-none d-lg-block"
				style={{
					backgroundImage: "url('/images/progress/h2-progress-2.webp')",
				}}
			></div>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 order-2 order-lg-1">
						<div className="progress-images">
							<Image
								src="/images/progress/h2-progress-1.webp"
								alt="Images"
								width={600}
								height={589}
								style={{ height: "auto" }}
							/>
						</div>
					</div>
					<div className="col-lg-6 order-1 order-lg-2">
						<div className="progress-right-content">
							<div className="sec-heading style-2">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
									// Transformative solution
								</span>
								<h2 className="sec-title text-anim">
									Trusted professionals with knowledge
								</h2>
								<div className="desc wow fadeInUp" data-wow-delay="0.3s">
									<p>
										Our mission is to empowers businesses off our all size too
										thrive in an businesses ever changing marketplaces. In
										today's dynamicis business environment, the key to success
										lies. Exceptionalis values through out strategic innovative
										consult business
									</p>
								</div>
								<div
									className="progress-style-2 wow fadeInUp"
									data-wow-delay="0.5s"
								>
									<div className="proggess-item">
										<div className="proggess-circle">
											<ProgressBar />
										</div>
										<div className="proggess-text">
											<span className="sub-title">
												Business <br /> consultants
											</span>
										</div>
									</div>
									<div className="proggess-item">
										<div className="proggess-circle">
											<ProgressBar value={75} />
										</div>
										<div className="proggess-text">
											<span className="sub-title">
												Clients <br /> communication
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

export default Progress1;
