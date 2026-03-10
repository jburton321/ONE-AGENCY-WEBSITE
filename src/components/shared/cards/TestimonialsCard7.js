const TestimonialsCard7 = ({ testimonial, type }) => {
	const { authorName, authorDesig, desc, img, logoImg, logoImgLight } =
		testimonial ? testimonial : {};
	return (
		<div className="h9-testimonial-item">
			<div className="testimonial-content">
				<div className="testimonial-quote">
					<i className="tji-right-quote"></i>
				</div>
				<div className="desc">
					<p>
						“Partnering with Consulting Firm has been a transformative
						experience for our organization. Their expert guidance through our
						market expansion strategy was invaluable. They helped us navigate
						complex regulatory environments and develop a clear, actionable plan
						that has led to successful transformative experience for our
						organization.”
					</p>
				</div>
			</div>
		</div>
	);
};

export default TestimonialsCard7;
