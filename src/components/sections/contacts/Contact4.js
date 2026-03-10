const Contact4 = () => {
	return (
		<section className="tj-faq-search">
			<div className="container">
				<div className="tj-faq-search-wrap section-space">
					<div className="row justify-content-center">
						<div className="col-lg-8 col-md-9 text-center">
							<div className="sec-heading mb-0">
								<h2 className="sec-title text-anim">
									Hi, how we <span>support</span> you?
								</h2>
							</div>
							<div
								className="faq-search-form mt-30 wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<form action="#">
									<div className="faq-search">
										<input type="text" placeholder="Ask a question" />
										<label>
											<i className="tji-search"></i>
										</label>
										<button type="submit">
											<span className="btn-text">
												<span>Search</span>
											</span>
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact4;
