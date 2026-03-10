import makePath from "@/libs/makePath";
import modifyNumber from "@/libs/modifyNumber";
import Image from "next/image";
import Link from "next/link";

const BlogCard4 = ({ blog, idx }) => {
	const { title, desc, id, img2, category, date, day, month } = blog || {};
	return (
		<div className="blog-style-4 left-swipe">
			<div className="blog-images">
				<Link href={`/blogs/${id}`}>
					<Image
						src={img2 ? img2 : "/images/blog/h2-blog-1.webp"}
						alt="Images"
						width={630}
						height={405}
					/>
				</Link>
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
				<div className="blog-button">
					<Link className="blog-btn text-btn" href={`/blogs/${id}`}>
						Read more <i className="tji-arrow-right"></i>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BlogCard4;
