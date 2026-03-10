import Link from "next/link";
import React from "react";
const HeroInner = ({ title, text, breadcrums = [], noNeedTitleAnim }) => {
	return (
		<section
			className="tj-page-header"
			style={{ backgroundImage: `url('/images/bg/pheader-bg.webp')` }}
		>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="tj-page-header-content text-center">
							<h1
								className={`tj-page-title ${
									noNeedTitleAnim ? "" : "text-anim"
								}`}
							>
								{title}
							</h1>
							<div className="tj-page-link wow fadeInUp" data-wow-delay="0.1s">
								<span>
									<Link href="/">
										<span>Home</span>
									</Link>
								</span>
								<span>/</span>
								{breadcrums?.length
									? breadcrums?.map(({ name, path }, idx) => (
											<React.Fragment key={idx}>
												<span>
													<Link href={path ? path : "/"}>
														<span>{name}</span>
													</Link>
												</span>
												<span>/</span>
											</React.Fragment>
									  ))
									: ""}
								<span>
									<span>{text}</span>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroInner;
