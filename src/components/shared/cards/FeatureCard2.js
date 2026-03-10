const FeatureCard2 = ({ feature, idx }) => {
	const { icon, title, desc } = feature ? feature : {};
	return (
		<div className="feature-item style-4">
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

export default FeatureCard2;
