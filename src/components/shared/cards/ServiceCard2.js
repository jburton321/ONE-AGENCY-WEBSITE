import modifyNumber from "@/libs/modifyNumber";
import Image from "next/image";
import Link from "next/link";

const ServiceCard2 = ({ service, idx, lastItem }) => {
	const { title, desc, id, totalProject, iconName, img, bgImg, svg } =
		service || {};
	return (
		<div className="service-style-2">
			<div className="service-icon">
				<i className={iconName ? iconName : "tji-optimization"}></i>
			</div>
			<div className="service-content">
				<span className="number">{modifyNumber(id)}</span>
				<h4 className="title">
					<Link href={`/services/${id}`}>{title}</Link>
				</h4>
				<div className="desc">
					<p>
						In today's dynamic business environment, the key to success lies
						strategics our planning and operational business.
					</p>
				</div>
				<Link className="service-button text-btn" href={`/services/${id}`}>
					Get optimization <i className="tji-arrow-right"></i>
				</Link>
			</div>
			<div className="thumb">
				<Image
					src={bgImg ? bgImg : "/images/service/h1-service-1.webp"}
					alt="image"
					width={645}
					height={670}
					style={{ width: "100%", height: "100%" }}
				/>
			</div>
		</div>
	);
};

export default ServiceCard2;
