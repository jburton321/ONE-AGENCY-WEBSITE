"use client";
import PortfolioCard1 from "@/components/shared/cards/PortfolioCard1";
import Paginations from "@/components/shared/others/Paginations";
import usePagination from "@/hooks/usePagination";
import getPortfolio from "@/libs/getPortfolio";
const PortfoliosPrimary = () => {
	const items = getPortfolio();
	const limit = 6;
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
	return (
		<section className="tj-project-area section-space">
			<div className="container">
				<div className="row rg-30">
					{currentItems?.length
						? currentItems?.map((item, idx) => (
								<div key={idx} className="col-xl-4 col-md-6">
									<PortfolioCard1 key={idx} portfolio={item} />
								</div>
						  ))
						: ""}
				</div>
				{/* <!-- post pagination --> */}
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
		</section>
	);
};

export default PortfoliosPrimary;
