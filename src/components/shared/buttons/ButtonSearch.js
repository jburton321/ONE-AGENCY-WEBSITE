const ButtonSearch = ({ headerType, handleSearchToggler }) => {
	return (
		<button
			className={`header_search ${
				headerType === 7 || headerType === 8 || headerType === 10
					? "header_contact "
					: ""
			} d-none ${
				headerType === 3 || headerType === 4
					? "d-xl-inline-flex"
					: "d-lg-inline-flex"
			}`}
			onClick={() => handleSearchToggler(true)}
		>
			{headerType === 7 ||
			headerType === 8 ||
			headerType === 9 ||
			headerType === 10
				? ""
				: headerType === 4
				? "Search"
				: "Explore"}
			{headerType === 7 ||
			headerType === 8 ||
			headerType === 9 ||
			headerType === 10 ? (
				<span className="icon">
					<i className="tji-search"></i>
				</span>
			) : (
				<i className="tji-search"></i>
			)}
		</button>
	);
};

export default ButtonSearch;
