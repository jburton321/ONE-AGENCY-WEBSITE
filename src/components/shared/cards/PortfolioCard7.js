"use client";
import Link from "next/link";

const PortfolioCard7 = ({ portfolio, idx }) => {
	const { title, img3, id, tags } = portfolio ? portfolio : {};
	return (
		<div
			className="h5-case-study-item-inner"
			style={{
				backgroundImage: `url('${
					img3 ? img3 : "/images/project/h7-project-1.webp"
				}')`,
			}}
		>
			<div className="case-study-content">
				<div className="case-study-text">
					<div className="title">
						<h3>
							<Link href={`/portfolios/${id}`}>{title}</Link>
						</h3>
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
					</div>
					<Link className="icon-btn" href={`/portfolios/${id}`}>
						<i className="tji-arrow-right"></i>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PortfolioCard7;
