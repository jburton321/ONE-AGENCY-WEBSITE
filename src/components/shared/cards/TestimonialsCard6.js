const TestimonialsCard6 = ({
	testimonial,
	handleCurrentIndex,
	currentIndex,
	idx,
}) => {
	const { authorName, authorDesig, desc, img, logoImg, logoImgLight } =
		testimonial ? testimonial : {};
	return (
		<div
			className={`testimonial-style-2 h7-testimonial-single ${
				currentIndex === idx ? "active" : ""
			}	`}
			onClick={() => handleCurrentIndex(idx)}
		>
			<div className="testimonial-content">
				<div className="h7-testimonial-title">
					<h4 className="title">
						{authorName}
						<i className="tji-plus"></i>
					</h4>
				</div>

				<div className="testimonial-content-inner">
					<div className="testimonial-quote">
						<i className="tji-right-quote"></i>
					</div>
					<div className="desc">
						<p>
							Partnering with ONE Agency has been a transformative experience for
							our organization. Their expert guidance through our market
							expansion strategy was invaluable. They helped us navigate complex
							regulatory environments and develop a clear, actionable plan that
							has led to successful
						</p>
					</div>
					<div className="testimonial-author">
						<div className="author-images">
							<img
								src={img ? img : "/images/testimonial/h1-test-1.webp"}
								alt="Images"
							/>
						</div>
						<div className="author-text">
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
							<h4 className="title">{authorName}</h4>
							<span className="designation">{authorDesig}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestimonialsCard6;
