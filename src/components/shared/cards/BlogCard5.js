import makePath from "@/libs/makePath";
import Link from "next/link";

const BlogCard5 = ({ blog, idx }) => {
	const { title, desc, id, img2, category, date, day, month } = blog || {};
	return (
		<div className="blog-style-3 style-5 wow fadeInUp" data-wow-delay="0.2s">
			<div className="blog-images">
				<Link href={`/blogs/${id}`}>
					<img src={img2 ? img2 : "/images/blog/h2-blog-1.webp"} alt="Images" />
				</Link>
				<div className="blog_category">
					<ul>
						<li>
							<Link href={`/blogs?category=${makePath(category)}`}>
								{category}
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="blog-content">
				<div className="blog-three-meta">
					<ul>
						<li>{date}</li>
						<li>03 Comments</li>
					</ul>
				</div>
				<h4 className="title under-line">
					<Link href={`/blogs/${id}`}>{title}</Link>
				</h4>
				<div className="blog-button">
					<Link className="blog-btn blog-btn-2" href={`/blogs/${id}`}>
						<span className="btn-icon">
							<i className="tji-arrow-right"></i>
						</span>
						<span className="btn-text">Read more</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BlogCard5;
