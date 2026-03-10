import Image from "next/image";
import Link from "next/link";

const ServiceCard4 = ({ service, idx, lastItem }) => {
	const { title, desc, id, totalProject, iconName, img, bgImg, svg } =
		service || {};
	return (
		<div className="service-style-4">
			<div className="thumb">
				<Image
					src={bgImg ? bgImg : "/images/service/h1-service-1.webp"}
					alt="image"
					width={645}
					height={670}
				/>
			</div>
			<div className="service-icon">
				<span>
					<i className={iconName ? iconName : "tji-optimization"}></i>
				</span>
			</div>
			<div className="service-content">
				<h4 className="title">
					<Link href={`/services/${id}`}>{title}</Link>
				</h4>
				<Link className="service-button" href={`/services/${id}`}>
					<i className="tji-arrow-right"></i>
				</Link>
			</div>
		</div>
	);
};

export default ServiceCard4;
