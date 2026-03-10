"use client";
import FormSelect from "@/components/shared/Inputs/FormSelect";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const HeaderTop = ({ type }) => {
	const [curretHeight, setCurrentHeight] = useState(null);
	const headerTopRef = useRef();

	useEffect(() => {
		const headerTop = headerTopRef.current;
		if (headerTop && type === 2) {
			const headerTopWrapper = headerTop.querySelector(".header-topbar_wrap");
			setCurrentHeight(headerTopWrapper.offsetHeight);
		}
	}, [type]);

	return (
		<div
			className={`header-topbar ${
				type === 3 ? "header-10-topbar" : type === 2 ? " header-9-topbar" : ""
			}`}
			style={
				type === 2 && curretHeight !== null
					? { height: `${curretHeight}px`, padding: "0px" }
					: {}
			}
			ref={headerTopRef}
		>
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<div className="header-topbar_wrap">
							<div className="topbar_note">
								{type == 2 ? (
									<img src="/images/icons/verified.svg" alt="" />
								) : (
									<i className="tji-check"></i>
								)}{" "}
								Trusted partner in business excellence
								<Link href="/contact">
									<span>Join us now</span>
									<i className="tji-angle-right"></i>
								</Link>
							</div>

							{type === 2 ? (
								<button
									onClick={() => {
										setCurrentHeight(0);
									}}
									type="button"
									className="header-topbar-toggler"
								>
									<svg
										width="14"
										height="14"
										viewBox="0 0 18 18"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M17 1L1 17"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
										<path
											d="M1 1L17 17"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
								</button>
							) : (
								<div className="topbar_infos">
									<div className="info_item">
										<span>
											<i className="tji-clock"></i>
										</span>
										<span>Mon - Friday : 9:00 - 18:00</span>
									</div>
									<div className="info_item">
										<span>
											<i className="tji-email"></i>
										</span>
										<Link href="mailto:support@solvior.com">
											support@solvior.com
										</Link>
									</div>
									<div className="info_item">
										{type === 3 || type === 4 ? (
											<>
												<span>
													<i className="tji-phone"></i>
												</span>
												<Link href="tel:+1009544-7818">+1 (009) 544-7818</Link>
											</>
										) : (
											<FormSelect
												id={"language"}
												name={"language"}
												className="nice-select"
												defaultValue={"English"}
												items={[
													{
														value: "1",
														name: "English",
													},
													{ value: "2", name: "Arabic" },
													{ value: "3", name: "Spanish" },
												]}
											/>
										)}
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderTop;
