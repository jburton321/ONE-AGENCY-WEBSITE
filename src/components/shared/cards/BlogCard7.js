import makePath from "@/libs/makePath";
import Link from "next/link";

const BlogCard7 = ({ blog, idx }) => {
	const { title, desc, id, img3, category, date, day, month } = blog || {};
	return (
		<div
			className="blog-item wow fadeInUp"
			data-wow-delay={`0.${idx + 1 + idx}s`}
		>
			<div className="blog-images hover:shine">
				<Link href={`/blogs/${id}`}>
					<img
						src={img3 ? img3 : "/images/blog/blog-thumb-5.webp"}
						alt="Images"
					/>
				</Link>
			</div>
			<div className="blog-content">
				<div className="blog-meta">
					<ul>
						<li className="category">
							<Link href={`/blogs?category=${makePath(category)}`}>
								{category}
							</Link>
						</li>
						<li>{date}</li>
					</ul>
				</div>
				<h4 className="blog-title">
					<Link href={`/blogs/${id}`}>{title}</Link>
				</h4>

				<div className="desc">
					Specifics challenges, such as stagnating our growth, operational
					inefficiencies.
				</div>
			</div>
		</div>
	);
};

export default BlogCard7;
