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
									ONE Agency hyperscales digital growth through customer acquisition
									and performance creative. We deliver a symphony of digital
									performance and actionable data analytics. Request Demo today.
								</div>
								<div
									className="video-btn-wrap wow fadeInUp"
									data-wow-delay="0.5s"
								>
									<Link
										className="video-btn vbox-item"
										href="mailto:info@oneagency.com"
									>
										<span className="play-btn">
											<i className="tji-email"></i>
										</span>
										<span className="video-text">info@oneagency.com</span>
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
														defaultValue={"Choose an option"}
														items={[
															{ value: "1", name: "Choose an option" },
															{ value: "2", name: "Paid Search" },
															{ value: "3", name: "Paid Social" },
															{ value: "4", name: "Performance Creative" },
															{ value: "5", name: "Marketing Automation" },
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
