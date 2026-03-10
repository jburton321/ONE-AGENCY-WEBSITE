const FeatureCard3 = ({ feature, type, idx }) => {
	const { icon, title, desc } = feature ? feature : {};
	return (
		<div
			className="feature-item h8-feature-item style-4  wow fadeInUp"
			data-wow-delay={`0.${idx + 3}s`}
		>
			<div className="feature-icon svg-animate">{icon}</div>
			<div className="feature-content">
				<h5 className="title">{title}</h5>
				<div className="desc">
					<p>{desc}</p>
				</div>
			</div>
		</div>
	);
};

export default FeatureCard3;
