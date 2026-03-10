const ButtonMenuToggler = ({
	isMobile,
	type,
	headerType,
	handleMobileToggler,
}) => {
	return (
		<>
			{type ? (
				<button
					className={`menu_btn ${isMobile ? "d-lg-none" : ""}`}
					onClick={() => handleMobileToggler(true)}
				>
					<span className="line">
						<span></span>
						<span></span>
						<span></span>
					</span>
				</button>
			) : (
				<button
					className={`menu_btn ${
						isMobile
							? "d-lg-none"
							: headerType === 3 || headerType == 4 || headerType == 6
							? "d-none d-xl-inline-flex"
							: ""
					}`}
					onClick={() => handleMobileToggler(true)}
				>
					Menu
					<span className="cubes">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</span>
				</button>
			)}
		</>
	);
};

export default ButtonMenuToggler;
