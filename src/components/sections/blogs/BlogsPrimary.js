import BlogSingle from "@/components/shared/blogs/BlogSingle";
import Paginations from "@/components/shared/others/Paginations";
import BlogSidebar from "@/components/shared/sidebar/BlogSidebar";
import usePagination from "@/hooks/usePagination";
import { useEffect } from "react";

const BlogsPrimary = ({ filteredItems }) => {
	const items = [...filteredItems];
	const limit = 3;
	// get pagination details
	const {
		currentItems,
		currentpage,
		setCurrentpage,
		paginationItems,
		currentPaginationItems,
		totalPages,
		handleCurrentPage,
		firstItem,
		lastItem,
	} = usePagination(items, limit);
	const totalItems = items?.length;
	const totalItemsToShow = currentItems?.length;
	useEffect(() => {
		setCurrentpage(0);
	}, [totalItems]);
	return (
		<section className="tj-post-area section-space">
			<div className="container">
				<div className="row rg-50">
					<div className="col-lg-8">
						<div className="tj-post-wrapper">
							{currentItems?.length
								? currentItems?.map((blog, idx) => (
										<BlogSingle key={idx} blog={blog} />
								  ))
								: ""}

							{/* <!-- pagination --> */}
							{totalItemsToShow < totalItems ? (
								<Paginations
									paginationDetails={{
										currentItems,
										currentpage,
										setCurrentpage,
										paginationItems,
										currentPaginationItems,
										totalPages,
										handleCurrentPage,
										firstItem,
										lastItem,
									}}
								/>
							) : (
								""
							)}
						</div>
					</div>
					<div className="col-lg-4">
						<BlogSidebar />
					</div>
				</div>
			</div>
		</section>
	);
};

export default BlogsPrimary;
