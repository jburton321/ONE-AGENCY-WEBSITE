"use client";
import Link from "next/link";

const PortfolioCard9 = ({
	portfolio,
	handleCurrentIndex,
	currentIndex,
	idx,
}) => {
	const { title, img5, id, tags } = portfolio ? portfolio : {};

	return (
		<div
			className={` h5-case-study-item h9-case-study-item ${
				currentIndex === idx ? "active" : ""
			}`}
			onMouseEnter={() => handleCurrentIndex(idx)}
		>
			<div
				className="h5-case-study-item-inner h9-case-study-item-inner"
				style={{
					backgroundImage: `url(${
						img5 ? img5 : "/images/project/h9-project-1.webp"
					})`,
				}}
			>
				<div className="case-study-content">
					<div className="case-study-text">
						<div className="title-area">
							<h3 className="title">
								<Link href={`/portfolios/${id}`}>{title}</Link>
							</h3>
							<ul className="category">
								{tags?.length
									? tags?.map((tag, idx) => (
											<li key={idx + 11}>
												<Link key={100 + idx} href={`/portfolios`}>
													{tag}
												</Link>
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
		</div>
	);
};

export default PortfolioCard9;
