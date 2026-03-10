"use client";
import makePath from "@/libs/makePath";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonPrimary from "../buttons/ButtonPrimary";
import PopupVideo from "../popup-video/PopupVideo";

const BlogSingle = ({ blog }) => {
	const {
		id,
		detailsImg,
		title,
		desc,
		blogTopList,
		category,
		slider,
		author,
		popupVideo,
		day,
		month,
		date,
		comments,
	} = blog ? blog : {};

	return (
		<article className="tj-post-item wow fadeInUp" data-wow-delay="0.1s">
			{slider?.length ? (
				<div>
					<Swiper
						slidesPerView={1}
						loop={true}
						speed={1200}
						navigation={{ nextEl: ".slider-next", prevEl: ".slider-prev" }}
						autoplay={{
							delay: 5000,
						}}
						modules={[Navigation, Autoplay]}
						className="blog-standard-slider"
					>
						{slider?.map((sliderImg, idx) => (
							<SwiperSlide key={idx}>
								<div className="tj-post-thumb">
									<Image
										src={sliderImg ? sliderImg : "/images/blog/tj-blog-5.webp"}
										alt="blog-image"
										width={870}
										height={498}
										style={{ height: "auto" }}
									/>
									<div className="tj-post-date">
										<span className="date">{day}</span>
										<span className="month">{month}</span>
									</div>
								</div>
							</SwiperSlide>
						))}
						<div className="blog-navigation">
							<button className="slider-prev">
								<span className="anim-icon">
									<i className="tji-arrow-left"></i>
									<i className="tji-arrow-left"></i>
								</span>
							</button>
							<button className="slider-next">
								<span className="anim-icon">
									<i className="tji-arrow-right"></i>
									<i className="tji-arrow-right"></i>
								</span>
							</button>
						</div>
					</Swiper>
				</div>
			) : (
				<>
					<div className="tj-post-thumb">
						<Image
							src={detailsImg ? detailsImg : "/images/blog/tj-blog-1.webp"}
							alt="blog-image"
							width={870}
							height={498}
							style={{ height: "auto" }}
						/>
						{popupVideo ? (
							<PopupVideo>
								<Link
									className="play-btn glightbox video-popup"
									href={popupVideo}
								>
									<i className="fa-sharp fa-solid fa-play"></i>
								</Link>
							</PopupVideo>
						) : (
							""
						)}

						<div className="tj-post-date">
							<span className="date">{day}</span>
							<span className="month">{month}</span>
						</div>
					</div>
				</>
			)}

			<div className="tj-post-content">
				<div className="tj-post-meta">
					<ul>
						<li>
							<Link href={`/blogs?category=${makePath(category)}`}>
								{category}
							</Link>
						</li>
						<li>
							<span>03 Comments</span>
						</li>
					</ul>
				</div>
				<h3 className="tj-post-title">
					<Link href={`/blogs/${id}`}>{title}</Link>
				</h3>
				<div className="tj-post-excerpt">
					Our mission is to empowers businesses size to thrive in an businesses
					ever changing marketplace. We are committed to the delivering
					exceptionals the value through strategic inset, innovative approaches.
					Our consulting of our missing empower businesses of all sizes to
					delivering...
				</div>
				<div className="tj-post-btn">
					<ButtonPrimary text={"Read more"} url={`/blogs/${id}`} />
				</div>
			</div>
		</article>
	);
};

export default BlogSingle;
