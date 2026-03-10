import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
const Funfact2 = () => {
	return (
		<section className="h10-counter-section">
			<div className="counter-wrapper">
				<div className="counter-item style-2">
					<div className="bottom-line d-md-none"></div>
					<div className="counter-item-inner">
						<FunfactSingle currentValue={96} symbol={"%"} />
						<span className="sub-title">Complete project</span>
					</div>
				</div>
				<div className="counter-item style-2">
					<div className="bottom-line d-md-none"></div>
					<div className="counter-item-inner">
						<FunfactSingle currentValue={20} symbol={"M"} />
						<span className="sub-title">Reach worldwide</span>
					</div>
				</div>
				<div className="counter-item style-2">
					<div className="bottom-line d-md-none"></div>
					<div className="counter-item-inner">
						<FunfactSingle currentValue={8} symbol={".5x"} />
						<span className="sub-title">Faster growth</span>
					</div>
				</div>
				<div className="counter-item style-2">
					<div className="bottom-line d-md-none"></div>
					<div className="counter-item-inner">
						<FunfactSingle currentValue={100} isSup={"+"} />
						<span className="sub-title">Awards archived</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Funfact2;
