const Cta8 = () => {
	return (
		<section className="h9-cta-section">
			<div
				className="h9-cta-inner"
				data-bg-image="/images/cta/h9-cta-bg.webp"
			>
				<div className="container mr-0">
					<div className="row">
						<div className="col-12">
							<div className="h9-cta-wrapper ">
								<div
									className="newsletter-title wow fadeInUp"
									data-wow-delay="0.2s"
								>
									<h3 className="title">Join ONE Agency—get insights and updates</h3>
								</div>
								<div
									className="newsletter-form wow fadeInUp"
									data-wow-delay="0.4s"
								>
									<form>
										<div className="form-input">
											<input
												type="email"
												id="subEmail"
												name="email"
												placeholder="Enter email"
												required=""
											/>
											<button type="submit" className="tj-primary-btn">
												<span className="btn_inner">
													<span className="btn_text">
														<span>Subscribe now</span>
													</span>
													<span className="btn_icon">
														<span>
															<i>
																<img
																	src="/images/icons/notification.svg"
																	alt=""
																/>
															</i>
															<i>
																<img
																	src="/images/icons/notification.svg"
																	alt=""
																/>
															</i>
														</span>
													</span>
												</span>
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cta8;
