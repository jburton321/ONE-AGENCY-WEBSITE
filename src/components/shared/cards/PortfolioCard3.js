"use client";
import Image from "next/image";
import Link from "next/link";

const PortfolioCard3 = ({
	portfolio,
	handleCurrentIndex,
	currentIndex,
	idx,
}) => {
	const { title, img2, id, tags } = portfolio ? portfolio : {};

	return (
		<div
			className={`project-style-3 ${currentIndex === idx ? "active" : ""}`}
			onMouseEnter={() => handleCurrentIndex(idx)}
		>
			<div className="project-thumb">
				<div className="image">
					<Image
						src={img2 ? img2 : "/images/project/h2-project-1.webp"}
						alt="Images"
						width={573}
						height={525}
					/>
					/
				</div>
				<div className="project-default-content">
					<span>
						<i className="tji-arrow-right"></i>
					</span>
					<h3 className="title">{title}</h3>
				</div>
			</div>
			<div className="project-content-box">
				<div className="project-tags">
					<ul>
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
				<div className="project-text">
					<h3 className="title">
						<Link href={`/portfolios/${id}`}>{title}</Link>
					</h3>
					<div className="desc">
						<p>
							In today's dynamic business environment, the key to success lies
							strategics our planning and operational business.
						</p>
					</div>
					<div className="project-button">
						<Link className="project-btn text-btn" href={`/portfolios/${id}`}>
							Learn more <i className="tji-arrow-right"></i>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PortfolioCard3;
