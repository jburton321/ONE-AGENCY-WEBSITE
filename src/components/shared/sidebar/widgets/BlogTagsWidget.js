import getBlogTags from "@/libs/getBlogTags";
import makePath from "@/libs/makePath";
import Link from "next/link";

const BlogTagsWidget = () => {
	const tags = getBlogTags();

	return (
		<div className="tj-sidebar-widget wow fadeInUp" data-wow-delay="0.7s">
			<h5 className="tj-sidebar-widget-title">Tags</h5>
			<div className="tagcloud">
				{tags?.length
					? tags?.map((tag, idx) => (
							<Link key={idx} href={`/blogs?tag=${makePath(tag)}`}>
								{" "}
								{tag}
							</Link>
					  ))
					: ""}
			</div>
		</div>
	);
};

export default BlogTagsWidget;
