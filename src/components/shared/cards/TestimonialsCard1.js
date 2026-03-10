import Image from "next/image";

const TestimonialsCard1 = ({ testimonial }) => {
	const { authorName, authorDesig, desc, img, logoImg, logoImgLight } =
		testimonial ? testimonial : {};
	return (
		<div className="testimonial-item">
			<div className="testimonial-content">
				<div className="testimonial-quote">
					<i className="tji-right-quote"></i>
				</div>
				<div className="desc">
					<p>{desc}</p>
				</div>
			</div>
			<div className="tj-testimonial-author">
				<div className="author-images">
					<Image
						src={img ? img : "/images/testimonial/h1-test-1.webp"}
						alt="Images"
						width={97}
						height={98}
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
		</div>
	);
};

export default TestimonialsCard1;
