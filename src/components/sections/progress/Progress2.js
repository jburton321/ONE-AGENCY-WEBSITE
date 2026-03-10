import ProgressBar from "@/components/shared/progress/ProgressBar";

const Progress2 = () => {
	return (
		<section className="h4-progress-section tjParallaxSection">
			<div
				className="h4-progress-bg tjParallaxImage"
				style={{
					backgroundImage: "url('/images/home-4/skill/h4-skill-bg.webp')",
				}}
			></div>

			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="h4-progress text-sm-end">
							<div
								className="progress-style-2 mt-0 wow fadeInUp"
								data-wow-delay="0.5s"
							>
								<div className="proggess-item">
									<div className="proggess-circle">
										<ProgressBar size={140} value={88} />
									</div>
									<div className="proggess-text">
										<span className="sub-title">Performance marketing</span>
									</div>
								</div>
								<div className="proggess-item">
									<div className="proggess-circle">
										<ProgressBar size={140} value={75} />
									</div>
									<div className="proggess-text">
										<span className="sub-title">Clients communication</span>
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

export default Progress2;
