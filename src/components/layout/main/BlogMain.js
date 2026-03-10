"use client";
import BlogsPrimary from "@/components/sections/blogs/BlogsPrimary";
import HeroInner from "@/components/sections/heros/HeroInner";
import filterItems from "@/libs/filterItems";
import getBlogs from "@/libs/getBlogs";
import makeText from "@/libs/makeText";
import { useSearchParams } from "next/navigation";

const BlogMain = () => {
	const allItems = getBlogs();
	const category = useSearchParams()?.get("category");
	const tag = useSearchParams()?.get("tag");
	const author_role = useSearchParams()?.get("author_role");
	const search = useSearchParams()?.get("search");
	// Filter Items
	const filteredItems = filterItems(
		allItems,
		category
			? "category"
			: tag
			? "tags"
			: author_role
			? "role"
			: search
			? "search"
			: "",
		category
			? category
			: tag
			? tag
			: author_role
			? author_role
			: search
			? search
			: ""
	);

	return (
		<div>
			<HeroInner
				title={
					category
						? makeText(category, true)
						: tag
						? makeText(tag, true)
						: author_role
						? author_role
						: search
						? makeText(search, true)
						: "Blog"
				}
				text={
					category
						? `${makeText(category, true)}`
						: tag
						? ` ${makeText(tag, true)}`
						: author_role
						? `${author_role}`
						: search
						? `${makeText(search, true)}`
						: "Blog"
				}
				breadcrums={
					category || tag || author_role || search
						? [{ name: "Blogs", path: "/blogs" }]
						: []
				}
				noNeedTitleAnim={true}
			/>
			<BlogsPrimary filteredItems={filteredItems} />
		</div>
	);
};

export default BlogMain;
