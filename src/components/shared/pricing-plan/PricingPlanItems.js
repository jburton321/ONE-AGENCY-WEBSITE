import Link from "next/link";

const PricingPlanItems = ({ isYearlyPlan }) => {
	return (
		<>
			<div className="col-xl-4 col-md-6">
				<div className="pricing__box right-swipe">
					<div className="pricing__header">
						<h4 className="pricing__package-name">Basic</h4>
						<div className="pricing__package-price">
							<span className="pricing__package-currency">$</span>
							<span className="price-number">{isYearlyPlan ? 29 : 19}</span>
							<span
								className="pricing__package-period period"
								data-year-period="/year"
								data-month-period="/month"
							>
								/{isYearlyPlan ? "year" : "month"}
							</span>
						</div>
						<div className="pricing__package-desc">
							<p>
								Save <span>20% offer</span> on performance marketing{" "}
								<span>93K clients</span>.
							</p>
						</div>
					</div>
					<div className="pricing__features-list">
						<ul>
							<li className="active">
								<i className="tji-double-check"></i> In-Depth consultation
							</li>
							<li className="active">
								<i className="tji-double-check"></i> Standard business
							</li>
							<li className="active">
								<i className="tji-double-check"></i> Quick email support
							</li>
							<li className="active">
								<i className="tji-double-check"></i> Monthly check-In
							</li>
							<li className="active">
								<i className="tji-double-check"></i> Progress reviews
							</li>
							<li>
								<i className="tji-double-check"></i> Flexible support{" "}
							</li>
							<li>
								<i className="tji-double-check"></i> 24/7 support
							</li>
						</ul>
					</div>
					<div className="pricing__btn">
						<Link href="/contact">
							<div className="btn-text">
								<span>Chose package</span>
							</div>
							<span className="btn-icon">
								<i className="tji-angle-right"></i>
								<i className="tji-angle-right"></i>
							</span>
						</Link>
					</div>
				</div>
			</div>
			<div className="col-xl-4 col-md-6">
				<div className="pricing__box active right-swipe">
					<div className="pricing__badge">
						<span>Recommended</span>
					</div>
					<div className="pricing__header">
						<h4 className="pricing__package-name">Business</h4>
						<div className="pricing__package-price">
							<span className="pricing__package-currency">$</span>
							<span
								className="price-number"
								data-year-price="69"
								data-month-price="49"
							>
								{isYearlyPlan ? 69 : 49}
							</span>
							<span
								className="pricing__package-period period"
								data-year-period="/year"
								data-month-period="/month"
							>
								/{isYearlyPlan ? "year" : "month"}
							</span>
						</div>
						<div className="pricing__package-desc">
							<p>
								Save <span>20% offer</span> on performance marketing{" "}
								<span>93K clients</span>.
							</p>
						</div>
					</div>
					<div className="pricing__features-list">
						<ul>
							<li className="active">
								<i className="tji-double-check"></i> In-Depth consultation
							</li>
							<li className="active">
								<i className="tji-double-check"></i> Standard business
							</li>
							<li className="active">
								<i className="tji-double-check"></i> Quick email support
							</li>
							<li className="active">
								<i className="tji-double-check"></i> Monthly check-In
							</li>
							<li className="active">
								<i className="tji-double-check"></i> Progress reviews
							</li>
							<li>
								<i className="tji-double-check"></i> Flexible support{" "}
							</li>
							<li>
								<i className="tji-double-check"></i> 24/7 support
							</li>
						</ul>
					</div>
					<div className="pricing__btn active">
						<Link href="/contact">
							<div className="btn-text">
								<span>Chose package</span>
							</div>
							<span className="btn-icon">
								<i className="tji-angle-right"></i>
								<i className="tji-angle-right"></i>
							</span>
						</Link>
					</div>
				</div>
			</div>
			<div className="col-xl-4 col-md-6">
				<div className="pricing__box right-swipe">
					<div className="pricing__header">
						<h4 className="pricing__package-name">Enterprise</h4>
						<div className="pricing__package-price">
							<span className="pricing__package-currency">$</span>
							<span
								className="price-number"
								data-year-price="129"
								data-month-price="99"
							>
								{isYearlyPlan ? 129 : 99}
							</span>
							<span
								className="pricing__package-period period"
								data-year-period="/year"
								data-month-period="/month"
							>
								/{isYearlyPlan ? "year" : "month"}
							</span>
						</div>
						<div className="pricing__package-desc">
							<p>
								Save <span>20% offer</span> on performance marketing{" "}
								<span>93K clients</span>.
							</p>
						</div>
					</div>
					<div className="pricing__features-list">
						<ul>
							<li className="active">
								<i className="tji-double-check"></i> In-Depth consultation
							</li>
							<li className="active">
								<i className="tji-double-check"></i> Standard business
							</li>
							<li className="active">
								<i className="tji-double-check"></i> Quick email support
							</li>
							<li className="active">
								<i className="tji-double-check"></i> Monthly check-In
							</li>
							<li className="active">
								<i className="tji-double-check"></i> Progress reviews
							</li>
							<li>
								<i className="tji-double-check"></i> Flexible support{" "}
							</li>
							<li>
								<i className="tji-double-check"></i> 24/7 support
							</li>
						</ul>
					</div>
					<div className="pricing__btn">
						<Link href="/contact">
							<div className="btn-text">
								<span>Chose package</span>
							</div>
							<span className="btn-icon">
								<i className="tji-angle-right"></i>
								<i className="tji-angle-right"></i>
							</span>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default PricingPlanItems;
