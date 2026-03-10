"use client";
import modifyNumber from "@/libs/modifyNumber";
import Link from "next/link";

const Paginations = ({ paginationDetails, type }) => {
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
	} = paginationDetails;
	return (
		<div
			className={`tj-pagination d-flex ${
				type === 2 ? "" : "justify-content-center"
			}`}
		>
			<ul>
				<li
					style={{
						display: currentpage > 0 ? "inline-block" : "none",
					}}
				>
					<Link
						className="page-numbers prev"
						href="#"
						onClick={e =>
							handleCurrentPage(e, currentpage < 1 ? 0 : currentpage - 1)
						}
					>
						<i className="tji-arrow-left"></i>
					</Link>
				</li>
				{currentPaginationItems?.map((item, idx) => (
					<li key={idx}>
						<Link
							className={`page-numbers ${
								item === currentpage ? "current" : ""
							}`}
							href="#"
							onClick={e => handleCurrentPage(e, item)}
						>
							{modifyNumber(item + 1)}
						</Link>
					</li>
				))}

				<li
					style={{
						display:
							currentpage < paginationItems?.length - 1
								? "inline-block"
								: "none",
					}}
				>
					<Link
						className="page-numbers next"
						href="#"
						onClick={e =>
							handleCurrentPage(
								e,
								currentpage > totalPages - 2 ? totalPages - 1 : currentpage + 1
							)
						}
					>
						<i className="tji-arrow-right"></i>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Paginations;
