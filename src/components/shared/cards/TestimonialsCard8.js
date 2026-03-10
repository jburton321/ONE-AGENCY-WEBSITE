const TestimonialsCard8 = ({ testimonial }) => {
	const { authorName, authorDesig, desc, img2, logoImg, logoImgLight } =
		testimonial ? testimonial : {};
	return (
		<div className="testimonial-item h10-testimonial-item style-6 ">
			<div className="testimonial-content">
				<div className="tj-testimonial-author">
					<div className="author-images">
						<img
							src={img2 ? img2 : "/images/testimonial/h6-test-1.webp"}
							alt="Images"
						/>
					</div>
					<div className="author-content">
						<div className="author-text">
							<h4 className="author-name">{authorName}</h4>
							<span className="sub-title">{authorDesig}</span>
						</div>
					</div>
				</div>
				<div className="author-rating">
					<div className="star-ratings">
						<div className="fill-ratings" style={{ width: "100%" }}>
							<span>★★★★★</span>
						</div>
						<div className="empty-ratings">
							<span>★★★★★</span>
						</div>
					</div>
				</div>
				<div className="desc">
					<p>
						“Our experience on Solvior has been nothing short of exceptional.
						From one, their team demonstrated a deep understanding of our
						industry and quickly identified key areas for improvement
						recommendations From one, their team demonstrated.”
					</p>
				</div>
			</div>
		</div>
	);
};

export default TestimonialsCard8;
