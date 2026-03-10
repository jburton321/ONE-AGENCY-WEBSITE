import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FormSelect from "@/components/shared/Inputs/FormSelect";
import Link from "next/link";

const Contact1 = () => {
	return (
		<section
			className="tj-contact-section"
			style={{ backgroundImage: "url('/images/shapes/contact-bg.png')" }}
		>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="contact-wrapper">
							<div className="contact-left-content">
								<div className="sec-heading style-2">
									<span
										className="sub-title wow fadeInUp"
										data-wow-delay="0.1s"
									>
										// Meet our team
									</span>
									<h2 className="sec-title text-anim">
										Let’s discuss further to get better results
									</h2>
									<div className="desc wow fadeInUp" data-wow-delay="0.3s">
										<p>
											Our mission is to empowers businesses off our all size too
											thrive in an businesses ever changing marketplaces. In
											today's dynamicis business environment, the key to success
											lies.
										</p>
									</div>
									<div
										className="contact-button wow fadeInUp"
										data-wow-delay="0.5s"
									>
										<ButtonPrimary
											text={"Contact us"}
											url={"/contact"}
											className={"white-btn"}
										/>
									</div>
								</div>
							</div>
							<div
								className="contact-form-one wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<h3 className="title">
									Feel free to get in touch or visit our location.
								</h3>
								<div className="contact-item">
									<div className="contact-text">
										<i className="fa-solid fa-envelope"></i>
										<Link href="mailto:support@solvior.com">
											support@solvior.com
										</Link>
									</div>
									<div className="contact-text">
										<i className="fa-sharp fa-solid fa-location-dot"></i>
										Elviraton, CA 48998
									</div>
								</div>
								<form>
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
											</div>
										</div>
										<div className="col-12">
											<div className="form-input input-textarea">
												<textarea
													id="message"
													name="message"
													placeholder="Type message"
												/>
											</div>
										</div>
										<div className="submit-button">
											<ButtonPrimary
												text={"Send message"}
												type="submit"
												className={"white-btn"}
											/>
										</div>
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

export default Contact1;
