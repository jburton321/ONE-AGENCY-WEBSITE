import makePath from "@/libs/makePath";
import modifyNumber from "@/libs/modifyNumber";
import Link from "next/link";
import ButtonPrimary from "../buttons/ButtonPrimary";

const BlogCard8 = ({ blog, idx, currentIndex, handleCurrentIndex }) => {
	const { title, desc, id, img4, category, date, day, month } = blog || {};
	return (
		<div
			className={`h8-blog-item ${currentIndex === idx ? "active" : ""}	`}
			onMouseEnter={() => handleCurrentIndex(idx)}
		>
			<div className="blog-images">
				<img
					src={img4 ? img4 : "/images/blog/blog-thumb-1.webp"}
					alt="Images"
				/>
				<div className="blog-date">
					<span className="date">{modifyNumber(day)}</span>
					<span className="month">{month}</span>
				</div>
			</div>
			<div className="blog-content">
				<div className="blog-content-inner">
					<div className="blog-two-meta">
						<ul>
							<li>
								<Link
									className="meta-link"
									href={`/blogs?category=${makePath(category)}`}
								>
									{category}
								</Link>
							</li>
							<li>03 Comments</li>
						</ul>
					</div>
					<h4 className="title  under-line">
						<Link href={`/blogs/${id}`}>{title}</Link>
					</h4>
					<div className="desc">
						<p>
							In today dynamic business environment, the key to success lies. In
							today dnamic business environment.
						</p>
					</div>
					<div className="blog-button">
						<ButtonPrimary text={"Read more"} url={`/blogs/${id}`} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogCard8;
