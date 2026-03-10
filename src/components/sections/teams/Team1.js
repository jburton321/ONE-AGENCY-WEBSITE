"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import TeamCard from "@/components/shared/cards/TeamCard";
import Paginations from "@/components/shared/others/Paginations";
import usePagination from "@/hooks/usePagination";
import getTeamMembers from "@/libs/getTeamMembers";
import itemScrollAnimate from "@/libs/itemScrollAnimate";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Team1 = ({ type }) => {
	const items = getTeamMembers();
	const animContainerRef = useRef();
	useGSAP(
		() => {
			itemScrollAnimate(animContainerRef);
		},
		{ scope: animContainerRef }
	);
	const limit = type === 2 ? 8 : 4;
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
		<section ref={animContainerRef} className="tj-team-section section-space">
			<div className="container">
				{type === 2 ? (
					""
				) : (
					<div className="row">
						<div className="col-12">
							<div className="sec-heading style-2">
								<div className="sec-text">
									<span
										className="sub-title wow fadeInUp"
										data-wow-delay="0.1s"
									>
										// Meet our team
									</span>
									<h2 className="sec-title text-anim">Expert team members</h2>
								</div>
								<div
									className="d-none d-md-inline-block wow fadeInUp"
									data-wow-delay="0.3s"
								>
									<ButtonPrimary text={"More member"} url={"/team"} />
								</div>
							</div>
						</div>
					</div>
				)}
				<div className="row rg-30">
					{currentItems?.length
						? currentItems.map((item, idx) => (
								<div key={idx} className="col-xl-3 col-md-6 col-sm-6">
									<TeamCard teamMember={item} />
								</div>
						  ))
						: ""}
				</div>
				{type === 2 ? (
					""
				) : (
					<div
						className="team-btn d-md-none mt-40 text-center wow fadeInUp"
						data-wow-delay="0.9s"
					>
						<ButtonPrimary text={"More member"} url={"/team"} />
					</div>
				)}
				{type === 2 && totalItemsToShow < totalItems ? (
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

export default Team1;
