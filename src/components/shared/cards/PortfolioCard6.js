import modifyNumber from "@/libs/modifyNumber";
import Link from "next/link";

const PortfolioCard6 = ({ portfolio, idx, lastItem }) => {
	const { title, img, id, tags } = portfolio ? portfolio : {};
	return (
		<div className={`h6-project-item ${idx < lastItem ? "project-stack" : ""}`}>
			<div className="project_image">
				<img src={img ? img : "/images/project/h1-project-1.webp"} alt="" />
			</div>
			<div className="project_content">
				<div className="project_content_inner">
					<span className="no">{modifyNumber(idx + 1)}.</span>
					<h3 className="title">
						<Link href={`/portfolios/${id}`}>{title}</Link>
					</h3>
					<div className="desc">
						Our consultant specialize in delivering rapid, actionable solutions
						that address your most pressing business on challenges. Whether you
						are facing.
					</div>

					<Link className="icon-btn project_btn" href={`/portfolios/${id}`}>
						<i className="tji-arrow-right"></i>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PortfolioCard6;
