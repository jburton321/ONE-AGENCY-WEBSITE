const TjMagicCursor = ({ type }) => {
	return (
		<>
			<div className="mouseCursor cursor-outer"></div>
			<div className="mouseCursor cursor-inner">
				<span>
					{type === 3 ? (
						<>
							View <br /> Project
						</>
					) : type === 2 ? (
						"Drag"
					) : (
						<>
							<i className="tji-angle-left"></i>Drag
							<i className="tji-angle-right"></i>
						</>
					)}
				</span>
			</div>
		</>
	);
};

export default TjMagicCursor;
