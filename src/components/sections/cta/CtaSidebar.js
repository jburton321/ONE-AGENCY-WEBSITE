import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const CtaSidebar = () => {
	return (
		<div
			className="tj-sidebar-cta"
			style={{
				backgroundImage: "url('/images/blog/widget-cta.webp')",
			}}
		>
			<div className="content">
				<div className="icon">
					<img src="/images/shapes/widget-cta-icon.png" alt="image" />
				</div>
				<h3>
					Need help? <br /> Feel free contact us
				</h3>
				<p>
					Delivering a Symphony of Digital Performance.
				</p>
			</div>
			<div className="cta-btn">
				<ButtonPrimary
					text={"Get in touch"}
					url={"/contact"}
					className={"white-btn"}
				/>

				<img
					className="shapes move-anim-2"
					src="/images/shapes/carrow.png"
					alt="shape"
				/>
			</div>
		</div>
	);
};

export default CtaSidebar;
