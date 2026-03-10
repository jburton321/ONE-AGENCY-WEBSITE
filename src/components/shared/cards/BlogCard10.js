import makePath from "@/libs/makePath";
import modifyNumber from "@/libs/modifyNumber";
import Link from "next/link";

const BlogCard10 = ({ blog, idx }) => {
	const { title, desc, id, img6, category, date, day, month } = blog || {};
	return (
		<div
			className="h10-blog_item wow fadeInUp"
			data-wow-delay={`0.${idx + 2}s`}
		>
			{idx > 1 ? (
				""
			) : (
				<>
					{idx === 0 ? (
						<div
							className="blog_image"
							style={{
								backgroundImage: `url('${
									img6 ? img6 : "/images/blog/tj-blog-8.webp"
								}')`,
							}}
							data-bg-image="/images/blog/tj-blog-8.webp"
						></div>
					) : (
						<div className="blog_thumb">
							<img src={img6 ? img6 : "/images/blog/tj-blog-2.webp"} alt="" />
						</div>
					)}
					<div className="blog-date">
						<span className="day">{modifyNumber(day)}</span>
						<span className="month">{month}</span>
					</div>
				</>
			)}

			<div className="blog_content">
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
				<h4 className="blog_title">
					<Link href={`/blogs/${id}`}>{title}</Link>
				</h4>
				{idx === 1 ? (
					<Link className="blog_btn text-btn-2" href={`/blogs/${id}`}>
						<span className="icon">
							<i className="tji-angle-right"></i>
						</span>
						<span className="text">Learn more</span>
						<span className="icon">
							<i className="tji-angle-right"></i>
						</span>
					</Link>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default BlogCard10;
