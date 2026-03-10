import makePath from "@/libs/makePath";
import modifyNumber from "@/libs/modifyNumber";
import Image from "next/image";
import Link from "next/link";

const BlogCard2 = ({ blog, type, isSidebar, idx }) => {
	const { title, desc, id, img2, detailsImg, category, date, day, month } =
		blog || {};
	return (
		<div
			className={`blog-style-2  ${type === 2 ? "wow fadeInUp" : "left-swipe"}`}
			data-wow-delay={
				type === 2
					? `0.${
							isSidebar ? (idx % 2) + 1 + (idx % 2) : (idx % 3) + 1 + (idx % 3)
					  }s`
					: "0s"
			}
		>
			<div className="blog-images">
				<Image
					src={
						type === 2 && detailsImg
							? detailsImg
							: img2
							? img2
							: "/images/blog/h2-blog-1.webp"
					}
					alt="Images"
					width={630}
					height={405}
					style={{ height: "auto" }}
				/>
				<div className="blog-date">
					<span className="date">{modifyNumber(day)}</span>
					<span className="month">{month}</span>
				</div>
			</div>
			<div className="blog-content">
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
				<h4 className="title under-line">
					<Link href={`/blogs/${id}`}>{title}</Link>
				</h4>
				<div className="desc">
					<p>
						In today's dynamic business environment, the key to success lies in
						strategic planning.
					</p>
				</div>
				<div className="blog-button">
					<Link className="blog-btn text-btn" href={`/blogs/${id}`}>
						Read more <i className="tji-arrow-right"></i>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BlogCard2;
