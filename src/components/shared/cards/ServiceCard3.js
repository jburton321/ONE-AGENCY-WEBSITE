import modifyNumber from "@/libs/modifyNumber";
import Link from "next/link";

const ServiceCard3 = ({ service, idx, lastItem }) => {
	const { title, desc, id, totalProject, iconName, img, bgImg2, svg } =
		service || {};
	return (
		<div
			className="service-style-3 wow fadeInUp"
			data-wow-delay={`0.${idx + 1 + idx}s`}
		>
			<div
				className="service-image"
				style={{ backgroundImage: `url('${bgImg2}')` }}
			></div>
			<div className="service-title">
				<h4 className="title">
					<span>{modifyNumber(idx + 1)}.</span>
					<Link href={`/services/${id}`}>{title}</Link>
				</h4>
			</div>
			<div className="desc">
				<p>
					In today's dynamic business environment, the key to success lies
					strategic our planning and operational business.
				</p>

				<div className="service-button d-lg-none">
					<Link href={`/services/${id}`} className="text-btn">
						Learn more <i className="tji-angle-right"></i>
					</Link>
				</div>
			</div>
			<div className="service-button d-none d-lg-inline-block">
				<Link href={`/services/${id}`} className="text-btn">
					Learn more <i className="tji-angle-right"></i>
				</Link>
			</div>
		</div>
	);
};

export default ServiceCard3;
