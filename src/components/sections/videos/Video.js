import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Link from "next/link";

const Video = () => {
	return (
		<section className="tj-video-section tjParallaxSection">
			<div
				className="tj-video-bg tjParallaxImage"
				style={{ backgroundImage: "url('/images/bg/h10-video-bg.webp')" }}
			></div>
			<div className="video-btn-wrap">
				<PopupVideo>
					<Link
						className="video-btn glightbox video-popup"
						href="https://www.youtube.com/watch?v=MLpWrANjFbI"
					>
						<span className="play-btn">
							<i className="tji-play"></i>
						</span>
					</Link>
				</PopupVideo>
			</div>
		</section>
	);
};

export default Video;
