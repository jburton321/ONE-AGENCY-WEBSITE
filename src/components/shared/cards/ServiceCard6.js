import Link from "next/link";

const ServiceCard6 = ({ service, idx, lastItem }) => {
	const { title, id, iconName, img } = service || {};
	return (
		<div
			className="h6-services-item-inner"
			style={{
				backgroundImage: `url('${
					img ? img : "/images/service/h1-service-1.webp"
				}')`,
			}}
		>
			<div className="service_shape"></div>

			<div className="service_icon">
				<i className={iconName ? iconName : "tji-optimization"}></i>
			</div>

			<div className="service_content">
				<h4 className="title">
					<Link href={`/services/${id}`}>{title}</Link>
				</h4>

				<Link className="icon-btn-2 service_btn" href={`/services/${id}`}>
					<span className="btn-icon">
						<i className="tji-arrow-right"></i>
					</span>
					<span className="btn-text">Learn more</span>
				</Link>
			</div>
		</div>
	);
};

export default ServiceCard6;
