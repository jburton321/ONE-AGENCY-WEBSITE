import modifyNumber from "@/libs/modifyNumber";
import Link from "next/link";

const ServiceCard9 = ({ service, idx, lastItem }) => {
	const { title, id, iconName, img } = service || {};
	return (
		<div className="h9-services-item">
			<div className="h9-services-item-inner">
				<div className="service-icon">
					<i className={iconName ? iconName : "tji-optimization"}></i>
				</div>
				<span className="number">{modifyNumber(idx + 1)}.</span>
				<div className="service-content">
					<h4 className="title">
						<Link href={`/services/${id}`}>{title}</Link>
					</h4>
					<div className="check-list-one">
						<ul>
							<li>
								<i className="tji-double-check"></i>Expertise and experience
							</li>
							<li>
								<i className="tji-double-check"></i>Client Centric approach
							</li>
							<li>
								<i className="tji-double-check"></i>Commitment excellences
							</li>
						</ul>
					</div>
				</div>
			</div>
			<Link className="service-btn" href={`/services/${id}`}>
				<span className=" text-btn">
					Learn more <i className="tji-angle-right"></i>
				</span>
			</Link>
		</div>
	);
};

export default ServiceCard9;
