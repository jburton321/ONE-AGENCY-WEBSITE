import makePath from "@/libs/makePath";
import Image from "next/image";
import Link from "next/link";

const BlogCard3 = ({ blog, idx }) => {
	const { title, desc, id, img2, category, date, day, month } = blog || {};
	return (
		<div className="blog-style-3 right-swipe">
			<div className="blog-images">
				<Link href={`/blogs/${id}`}>
					<Image
						src={img2 ? img2 : "/images/blog/h2-blog-1.webp"}
						alt="Images"
						width={630}
						height={460}
						style={{ height: "auto" }}
					/>
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

export default BlogCard3;
