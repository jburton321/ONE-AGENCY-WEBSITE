"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ServiceCard8 from "@/components/shared/cards/ServiceCard8";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import getALlServices from "@/libs/getALlServices";
import Link from "next/link";

const Services8 = () => {
	const services = getALlServices()?.slice(0, 5);
	return (
		<section className="h8-services-section section-space">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="h8-services-wrapper">
							<div className="h8-services-left">
								<div className="tj-sticky-top">
									<div
										className="h8-video hover:shine wow fadeInUp"
										data-wow-delay="0.3s"
									>
										<img
											src="/images/video/h8-video-img.jpg"
											alt="post-image"
										/>
										<PopupVideo>
											<Link
												className="play_btn glightbox video-popup"
												href="https://www.youtube.com/watch?v=eEzD-Y97ges"
											>
												<i className="fa-sharp fa-solid fa-play"></i>
											</Link>
										</PopupVideo>
									</div>
									<div className="h8-services-left-content">
										<h2 className="title text-anim">
											Services Built for <span>Business</span> goal Success
										</h2>
										<div className="wow fadeInUp" data-wow-delay="0.7s">
											<ButtonPrimary
												text={"More services"}
												url={"/services"}
												className={"d-none d-lg-inline-flex"}
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="h8-services-right">
								<div className="h8-services-list">
									{services?.length
										? services?.map((service, idx) => (
												<ServiceCard8 key={idx} service={service} idx={idx} />
										  ))
										: ""}
								</div>

								<div className="mobile_btn text-center d-lg-none">
									<ButtonPrimary text={"More services"} url={"/services"} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services8;
