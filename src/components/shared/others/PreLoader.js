"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const PreLoader = ({ isDefaultPreLoader }) => {
	const [isShowUi, setIshowUi] = useState(false);
	useEffect(() => {
		let checkIsShowUi;
		if (isDefaultPreLoader) {
			setIshowUi(null);
		} else {
			setIshowUi(true);
		}
		// return () => clearTimeout(checkIsShowUi);
	}, [isDefaultPreLoader]);
	return (
		<div
			className="d-none preloader"
			style={{
				opacity: isShowUi ? 0 : 1,
				transition: "all 0.3s linear",
				display: isShowUi === null ? "none" : "",
				zIndex: isShowUi ? -99999 : 99999,
			}}
		>
			<div className="loading-container">
				<div className="loading"></div>
				<div id="loading-icon">
					<Image
						src="/images/loader.svg"
						alt="loader"
						width={55}
						height={55}
						style={{ height: "auto" }}
					/>
				</div>
			</div>
		</div>
	);
};

export default PreLoader;
