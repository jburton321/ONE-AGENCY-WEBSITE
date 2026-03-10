import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Image from "next/image";
import Link from "next/link";
const Funfact3 = () => {
	return (
		<section className="tj-evolute-area">
			<div className="container-xxl-fluid  p-0 d-none d-xxl-block">
				<div className="row g-0">
					<div className="col-lg-7">
						<div className="tj-evolute">
							<span
								className="tj-evolute-title mb-30 wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<i className="tji-star-2"></i>Our evolution
							</span>
							<div className="desc mb-60 wow fadeInUp" data-wow-delay="0.3s">
								"ONE Agency started with a vision to hyperscale digital growth for
								brands through customer acquisition and performance creative. We
								evolved into a trusted partner for companies around the globe.
								Our journey began with a simple idea: deliver a symphony of
								digital performance. Our core values of integrity, innovation,
								and excellence guide everything we do—leading the wave in
								intelligent marketing."
							</div>
							<div className="tj-evolute-counter">
								<div className="counter-item">
									<FunfactSingle currentValue={93} symbol={"%"} />
									<span className="sub-title">Complete project</span>
								</div>
								<div className="counter-item">
									<FunfactSingle currentValue={20} symbol={"M"} />
									<span className="sub-title">Reach worldwide</span>
								</div>
								<div className="counter-item">
									<FunfactSingle currentValue={8} symbol={".5x"} />
									<span className="sub-title">Faster growth</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="tj-evolute-image hover:shine">
							<Image
								src="/images/about/evolute.webp"
								alt="evolute"
								width={715}
								height={650}
								style={{ height: "auto" }}
							/>
							<div className="about-video-box style-2">
								<div className="video-box">
									<PopupVideo>
										<Link
											className="circle glightbox video-popup"
											href="https://www.youtube.com/watch?v=GGf1JjSAKP4"
										>
											<i className="fa-sharp fa-solid fa-play"></i>
										</Link>
									</PopupVideo>
								</div>
								<span className="sub-title">Click for watch</span>
								<h5 className="title">See our latest video</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container d-xxl-none">
				<div className="row rg-50 align-items-center">
					<div className="col-xl-6 col-12">
						<div className="tj-evolute">
							<span className="tj-evolute-title mb-30">
								<i className="tji-star-2"></i>Our evolution
							</span>
							<div className="desc mb-60">
								"ONE Agency started with a vision to hyperscale digital growth for
								brands through customer acquisition and performance creative. We
								evolved into a trusted partner for companies around the globe.
								Our journey began with a simple idea: deliver a symphony of
								digital performance. Our core values of integrity, innovation,
								and excellence guide everything we do—leading the wave in
								intelligent marketing."
							</div>
							<div className="tj-evolute-counter">
								<div className="counter-item">
									<FunfactSingle currentValue={93} symbol={"%"} />
									<span className="sub-title">Complete project</span>
								</div>
								<div className="counter-item">
									<FunfactSingle currentValue={20} symbol={"M"} />
									<span className="sub-title">Reach worldwide</span>
								</div>
								<div className="counter-item">
									<FunfactSingle currentValue={8} symbol={".5x"} />
									<span className="sub-title">Faster growth</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-6 col-12">
						<div className="tj-evolute-image">
							<img src="/images/about/evolute.webp" alt="evolute" />
							<div className="about-video-box style-2">
								<div className="video-box">
									<PopupVideo>
										<Link
											className="circle glightbox video-popup"
											href="https://www.youtube.com/watch?v=GGf1JjSAKP4"
										>
											<i className="fa-sharp fa-solid fa-play"></i>
										</Link>
									</PopupVideo>
								</div>
								<span className="sub-title">Click for watch</span>
								<h5 className="title">See our latest video</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Funfact3;
