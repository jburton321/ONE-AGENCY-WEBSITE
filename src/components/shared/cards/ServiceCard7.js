import Link from "next/link";

const ServiceCard7 = ({ service, idx, lastItem }) => {
	const { title, id, iconName, img } = service || {};
	return (
		<div className="service-style-3 wow fadeInUp" data-wow-delay="0.1s">
			<div className="service-title">
				<div className="service-icon">
					<span>
						<i className={iconName ? iconName : "tji-optimization"}></i>
					</span>
				</div>
				<h4 className="title">
					<Link href={`/services/${id}`}>{title}</Link>
				</h4>
			</div>
			<div className="service-right">
				<div className="desc">
					<p>
						In today's dynamic business environment, the key to success lies
						strategics our planning and operational business.
					</p>
				</div>
				<div className="service-button">
					<Link className="blog-btn-2" href={`/services/${id}`}>
						<span className="btn-icon">
							<i className="tji-arrow-right"></i>
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard7;
