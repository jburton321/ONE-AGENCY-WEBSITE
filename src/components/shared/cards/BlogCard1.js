import makePath from "@/libs/makePath";
import Image from "next/image";
import Link from "next/link";

const BlogCard1 = ({ blog, idx }) => {
	const { title, desc, id, img1, category, date, day, month } = blog || {};
	return (
		<div className="blog-item wow fadeInUp" data-wow-delay={`0.${idx + 1}s`}>
			<div className="blog-images hover:shine">
				<Link href={`/blogs/${id}`}>
					<Image
						src={img1 ? img1 : "/images/blog/blog-thumb-1.webp"}
						alt="Images"
						width={1144}
						height={736}
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
						<li>02 Comments</li>
					</ul>
				</div>
				<h4 className="blog-title">
					<Link href={`/blogs/${id}`}>{title}</Link>
				</h4>
				{idx === 0 ? (
					<div className="desc">
						In {"today's"} dynamic business environment, the key to success lies
						in strategic planning and operational execution organisations.
					</div>
				) : (
					""
				)}
				<Link className="blog-button text-btn" href={`/blogs/${id}`}>
					Read more <i className="tji-arrow-right"></i>
				</Link>
				<div className="blog-meta meta-2 mb-0">
					<ul>
						<li>{date}</li>
						<li>02 Comments</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default BlogCard1;
