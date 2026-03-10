import Image from "next/image";

const TestimonialsCard3 = ({ testimonial }) => {
	const { authorName, authorDesig, desc, img2, logoImg, logoImgLight } =
		testimonial ? testimonial : {};
	return (
		<div className="swiper-slide testimonial-style-3">
			<div className="testimonial-content-box">
				<div className="testimonial-content">
					<div className="desc">
						<p>
							Just short note to say thank you to all the managerial leadership
							training. It was an fantastic course and the last 3 days were
							simply brilliants... an to excellent are programmed for Sydney in
							a corporations which into servied well longs just a short note say
							thank you the managerial leadership.
						</p>
					</div>
					<div className="testimonial-author">
						<div className="testimonial-rating">
							<div className="star-fill">
								<div className="star-ratings">
									<div className="fill-ratings" style={{ width: "73%" }}>
										<span>★★★★★</span>
									</div>
									<div className="empty-ratings">
										<span>★★★★★</span>
									</div>
								</div>
							</div>
						</div>
						<h5 className="title">{authorName}</h5>
						<span className="designation">{authorDesig}</span>
					</div>
				</div>
			</div>
			<div className="testimonial-infos">
				<div className="testimonial-quote">
					<i className="tji-right-quote"></i>
				</div>
				<div className="testimonial-images">
					<Image
						src={img2 ? img2 : "/images/testimonial/h3-test-1.png"}
						alt="Images"
						width={96}
						height={96}
					/>
				</div>
			</div>
		</div>
	);
};

export default TestimonialsCard3;
