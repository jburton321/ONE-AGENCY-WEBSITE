import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FormSelect from "@/components/shared/Inputs/FormSelect";

const Contact5 = () => {
	return (
		<section className="tj-contact-area section-bottom-space">
			<div className="container">
				<div className="row rg-50">
					{/* <!-- contact form --> */}
					<div className="col-lg-6">
						<div
							className="contact-form-one style-2 wow fadeInUp"
							data-wow-delay="0.1s"
						>
							<h3 className="title text-anim">
								Let's level up your <span>digital campaigns.</span> We'll be in touch soon.
							</h3>
							<form action="#">
								<div className="row">
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="text"
												id="first"
												name="name"
												placeholder="Full name*"
												required=""
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="email"
												id="emailOne"
												name="email"
												placeholder="Email address*"
												required=""
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="tel"
												id="tel"
												name="tel"
												placeholder="Phone number*"
												required=""
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<div className="tj-nice-select-box">
												<div className="tj-select">
													<FormSelect
														id={"contact"}
														className="nice-select"
														defaultValue={"Choose a solution"}
														items={[
															{ value: "1", name: "Choose a solution" },
															{ value: "2", name: "Customer Acquisition" },
															{ value: "3", name: "Performance Creative" },
															{ value: "4", name: "Data & targeting" },
															{ value: "5", name: "Software & integration" },
															{ value: "6", name: "Request Demo" },
															{ value: "7", name: "General inquiry" },
														]}
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="col-12">
										<div className="form-input input-textarea">
											<textarea
												id="message"
												name="message"
												placeholder="Comments"
											></textarea>
										</div>
									</div>
									<div className="submit-button">
										<ButtonPrimary text={"Send message"} type="submit" />
									</div>
								</div>
							</form>
						</div>
					</div>
					{/* <!-- contact map --> */}
					<div className="col-lg-6">
						<div className="google-map wow fadeInUp" data-wow-delay="0.3s">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96840.74259815917!2d-74.21035326499913!3d40.66794886378488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1742025261462!5m2!1sen!2sbd"
								style={{ border: 0 }}
								allowFullScreen=""
								loading="lazy"
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact5;
