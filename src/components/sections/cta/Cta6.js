import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Link from "next/link";

const Cta6 = () => {
	return (
		<section className="tj-growth-section tjParallaxSection">
			<div
				className="tj-growth-bg tjParallaxImage"
				style={{ backgroundImage: "url(/images/growth/growth-bg.webp)" }}
			></div>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="growth-wrap">
							<div
								className="growth-content mt-0 wow fadeInUp"
								data-wow-delay="0.3s"
							>
								<h2 className="title text-anim">
									See how we drive real business growth
								</h2>
								<div className="video-btn-wrap">
									<PopupVideo>
										<Link
											className="video-btn glightbox  video-popup"
											href="https://www.youtube.com/watch?v=MLpWrANjFbI"
										>
											<span className="play-btn">
												<i className="tji-play"></i>
											</span>
											<span className="video-text">Play our reels</span>
										</Link>
									</PopupVideo>
								</div>
								<div className="icon-shape">
									<img src="/images/shapes/logo-icon-transparent.svg" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cta6;
