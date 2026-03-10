"use client";
import Link from "next/link";

const PortfolioCard5 = ({ portfolio, idx }) => {
	const { title, img, id, tags } = portfolio ? portfolio : {};
	return (
		<div
			className="h5-case-study-item-inner"
			style={{
				backgroundImage: `url('${
					img ? img : "/images/project/h1-project-1.webp"
				}')`,
			}}
		>
			<div className="case-study-content">
				<ul className="category">
					{tags?.length
						? tags?.map((tag, idx) => (
								<li key={100 + idx}>
									{" "}
									<Link href={`/portfolios`}>{tag}</Link>
								</li>
						  ))
						: ""}
				</ul>
				<div className="case-study-text">
					<h3 className="title">
						<Link href={`/portfolios/${id}`}>{title}</Link>
					</h3>
					<Link className="icon-btn" href={`/portfolios/${id}`}>
						<i className="tji-arrow-right"></i>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PortfolioCard5;
