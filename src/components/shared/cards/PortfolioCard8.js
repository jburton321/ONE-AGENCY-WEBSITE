"use client";
import Link from "next/link";

const PortfolioCard8 = ({ portfolio, idx }) => {
	const { title, img4, id, tags } = portfolio ? portfolio : {};
	return (
		<>
			<div className="h8-case-study-banner">
				<img
					src={img4 ? img4 : "/images/project/h8-project-1.webp"}
					alt="Images"
				/>
				<Link className="icon-btn" href={`/portfolios/${id}`}>
					<i className="tji-arrow-right"></i>
				</Link>
			</div>
			<div className="case-study-content h8-case-study-content">
				<div className="case-study-text">
					<h4 className="title">
						<Link href={`/portfolios/${id}`}>{title}</Link>
					</h4>
				</div>
				<div className="h8-case-study-category">
					<ul>
						{tags?.length
							? tags?.map((tag, idx) => (
									<li key={100 + idx}>
										{" "}
										<Link href={`/portfolios`}>{tag}</Link>
									</li>
							  ))
							: ""}
					</ul>
				</div>
			</div>
		</>
	);
};

export default PortfolioCard8;
