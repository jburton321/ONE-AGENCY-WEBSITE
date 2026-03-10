import Link from "next/link";

const ButtonHeaderContact = ({ type }) => {
	return (
		<Link
			className={`header_contact d-none  d-xl-inline-flex`}
			href="tel:18884521505"
		>
			{type === 2 ? (
				<i className="tji-phone"></i>
			) : (
				<span className="icon">
					<i className="tji-phone"></i>
				</span>
			)}

			{type === 2 ? (
				"1-888-452-1505"
			) : (
				<span className="text">1-888-452-1505</span>
			)}
		</Link>
	);
};

export default ButtonHeaderContact;
