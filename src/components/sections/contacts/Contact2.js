import FormSelect from "@/components/shared/Inputs/FormSelect";
import Link from "next/link";

const Contact2 = () => {
	return (
		<section
			className="h9-contact-section"
			style={{ backgroundImage: "url('/images/bg/h9-contact-bg.jpg" }}
		>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="h9-contact-wrapper">
							<div className="sec-heading style-2 ">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
									[ OUR SUCESS STORIES ]
								</span>
								<h2 className="sec-title text-anim">
									See how we drive real <span>business</span> growth
								</h2>
								<div className="desc wow fadeInUp" data-wow-delay="0.4s">
									Our mission is to empowers businesses off our all size too
									thrive in an businesses ever changing marketplaces. In today's
									dynamicis business environment, the key to success lies.
								</div>
								<div
									className="video-btn-wrap wow fadeInUp"
									data-wow-delay="0.5s"
								>
									<Link
										className="video-btn vbox-item"
										href="milto:support@solvior.com"
									>
										<span className="play-btn">
											<i className="tji-email"></i>
										</span>
										<span className="video-text">support@solvior.com</span>
									</Link>
								</div>
							</div>

							<div
								className="h9-contact-form_wrap wow fadeInUp"
								data-wow-delay="0.3s"
							>
								<h3 className="form_title">
									Feel free to get in touch or visit our location.
								</h3>
								<div className="form">
									<form action="index-9.html">
										<div className="row gx-3">
											<div className="col-sm-6">
												<div className="form-group">
													<input
														type="text"
														name="name"
														id="name"
														placeholder="Full name*"
														required
													/>
												</div>
											</div>
											<div className="col-sm-6">
												<div className="form-group">
													<input
														type="email"
														name="email"
														id="email"
														placeholder="Email address*"
														required
													/>
												</div>
											</div>
											<div className="col-sm-6">
												<div className="form-group">
													<input
														type="tel"
														name="phone"
														id="phone"
														placeholder="Phone number*"
														required
													/>
												</div>
											</div>
											<div className="col-sm-6">
												<div className="form-group">
													<FormSelect
														id={"contact"}
														className="nice-select"
														defaultValue={"Chose a option"}
														items={[
															{ value: "1", name: "Chose a option" },
															{ value: "2", name: "IT consulting" },
															{ value: "3", name: "Market research" },
															{ value: "4", name: "Business process" },
															{ value: "5", name: "Business consultancy" },
															{ value: "6", name: "Digital marketing" },
															{ value: "7", name: "Branding design" },
														]}
													/>
												</div>
											</div>
											<div className="col-12">
												<div className="form-group">
													<textarea
														name="message"
														id="message"
														placeholder="Type message here..."
													></textarea>
												</div>
											</div>
										</div>
										<div className="form-button">
											<button type="submit">
												Submit now <i className="fa-solid fa-paper-plane"></i>
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

export default Contact2;
