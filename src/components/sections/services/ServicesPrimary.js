"use client";
import ServiceCard2 from "@/components/shared/cards/ServiceCard2";
import Paginations from "@/components/shared/others/Paginations";
import usePagination from "@/hooks/usePagination";
import getALlServices from "@/libs/getALlServices";
import makeWowDelay from "@/libs/makeWowDelay";

const ServicesPrimary = () => {
	const items = getALlServices();
	const limit = 8;
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
		<div className="tj-service-area section-space">
			<div className="container">
				<div className="row rg-30">
					{currentItems?.length
						? currentItems?.map((item, idx) => (
								<div
									key={idx}
									className="col-lg-4 col-md-6 wow fadeInUp"
									data-wow-delay={makeWowDelay(idx, 0.1)}
								>
									<ServiceCard2 service={item} idx={idx} type={2} />
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
		</div>
	);
};

export default ServicesPrimary;
