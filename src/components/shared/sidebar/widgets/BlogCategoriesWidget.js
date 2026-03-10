import countDataLength from "@/libs/countDataLength";
import filterItems from "@/libs/filterItems";
import getBlogCategories from "@/libs/getBlogCategories";
import getBlogs from "@/libs/getBlogs";
import makePath from "@/libs/makePath";
import Link from "next/link";

const BlogCategoriesWidget = () => {
	const categories = getBlogCategories();
	const blogs = getBlogs();
	return (
		<div
			className="tj-sidebar-widget widget_categories wow fadeInUp"
			data-wow-delay="0.5s"
		>
			<h5 className="tj-sidebar-widget-title">Categories</h5>
			<ul>
				{categories?.length
					? categories?.map((category, idx) => (
							<li key={idx}>
								<Link href={`/blogs?category=${makePath(category)}`}>
									{category}
								</Link>{" "}
								(
								{countDataLength(
									filterItems(blogs, "category", makePath(category))
								)}
								)
							</li>
					  ))
					: ""}
			</ul>
		</div>
	);
};

export default BlogCategoriesWidget;
