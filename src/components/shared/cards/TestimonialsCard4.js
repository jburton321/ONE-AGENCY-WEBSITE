const TestimonialsCard4 = ({ testimonial }) => {
	const { authorName, authorDesig, desc, img, logoImg, logoImgLight } =
		testimonial ? testimonial : {};
	return (
		<div className="h5-testimonial-item">
			<div className="author">
				<div className="author-images">
					<img
						src={img ? img : "/images/testimonial/h1-test-1.webp"}
						alt="Images"
					/>
				</div>
				<div className="author-content">
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
					<div className="author-text">
						<h4 className="author-name">{authorName}</h4>
						<span className="sub-title">{authorDesig}</span>
					</div>
				</div>
			</div>
			<div className="content">
				<div className="quote-icon">
					<i className="tji-right-quote"></i>
				</div>
				<div className="desc">
					<p>
						Their thorough market analysis and customized strategies helped us
						streamline our operations and improve our overall efficiency. We saw
						a significant increase in our bottom line and were able to make
						data-driven decisions that positively impacted our business. The
						ONE Agency was not just an advisor in our success
					</p>
				</div>
			</div>
		</div>
	);
};

export default TestimonialsCard4;
