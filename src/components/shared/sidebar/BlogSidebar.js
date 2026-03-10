import CtaSidebar from "@/components/sections/cta/CtaSidebar";
import BlogCategoriesWidget from "./widgets/BlogCategoriesWidget";
import BlogTagsWidget from "./widgets/BlogTagsWidget";
import RecentBlogWidget from "./widgets/RecentBlogWidget";

const BlogSidebar = () => {
	return (
		<aside className="tj-post-sidebar">
			{/* <!-- search --> */}
			<div className="tj-sidebar-widget wow fadeInUp" data-wow-delay="0.1s">
				<h5 className="tj-sidebar-widget-title">Search here</h5>
				<div className="tj-widget__search sidebar-search">
					<form action="#" method="get">
						<input type="search" required="" name="s" placeholder="Search..." />
						<button type="submit">
							{" "}
							<i className="fa-regular fa-magnifying-glass"></i>{" "}
						</button>
					</form>
				</div>
			</div>
			{/* <!-- recent post --> */}
			<RecentBlogWidget />
			{/* <!-- category --> */}
			<BlogCategoriesWidget />
			{/* <!-- tags --> */}
			<BlogTagsWidget />
			{/* <!-- cta --> */}
			<div className="tj-sidebar-widget wow fadeInUp" data-wow-delay="0.1s">
				<CtaSidebar />
			</div>
		</aside>
	);
};

export default BlogSidebar;
