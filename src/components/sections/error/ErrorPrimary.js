import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";

const ErrorPrimary = () => {
	return (
		<section className="tj-error__area not-found section-space">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col">
						<div className="tj-error__wrap text-center">
							<div className="tj-error__content">
								<div className="error_img mb-20">
									<Image
										src="/images/error/404.png"
										alt=""
										width={940}
										height={382}
										style={{ height: "auto" }}
									/>
								</div>
								<h2 className="error_title text-anim mb-20">
									Opps! Page not found
								</h2>
								<div className="error_desc mb-30">
									Page does not exist or some other error occurred. Go to our
									Home Page
								</div>
								<ButtonPrimary text={"Go back to home page"} url={"/"} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ErrorPrimary;
