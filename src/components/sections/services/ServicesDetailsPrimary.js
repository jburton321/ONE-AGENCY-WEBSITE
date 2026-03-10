"use client";
import Image from "next/image";
import Link from "next/link";
import CtaSidebar from "../cta/CtaSidebar";

const ServicesDetailsPrimary = ({ option }) => {
	const { currentItem, items, currentId, variant = "service" } = option || {};
	const isSolution = variant === "solution";
	const overviewLabel = isSolution ? "Solution Overview" : "Service Overview";
	const sidebarTitle = isSolution ? "Related Solutions" : "Related Services";
	const getItemHref = (item) => (isSolution ? item.path : `/services/${item.id}`);
	const isActive = (item) => (isSolution ? currentItem?.slug === item.slug : currentId === item.id);
	const {
		title,
		titleLarge,
		id,
		iconName,
		img,
		desc1,
		desc2,
		desc,
		shortDesc,
		serviceOverview,
		keyFeatures,
		process,
		featureCards,
	} = currentItem || {};
	const overviewText = serviceOverview || process?.desc;
	const bulletItems = keyFeatures || process?.processItems || [];
	const defaultCards = [
		{ title: "Speed to market", desc: "Get campaigns live quickly with our tech stack and integrations; no long implementation cycles.", icon: "tji-quick" },
		{ title: "Proven results", desc: "Data-driven optimization and creative that converts; we focus on CPL, CPA and qualified leads.", icon: "tji-results" },
		{ title: "Transparent reporting", desc: "Real-time visibility in myONE Dash so you see performance and can scale with confidence.", icon: "tji-personalization" },
	];
	const cards = Array.isArray(featureCards) && featureCards.length > 0 ? featureCards : defaultCards;

	return (
		<section className="tj-service-area section-space">
			<div className="container">
				<div className="row rg-50">
					<div className="col-lg-8">
						<div className="tj-post-wrapper">
							<div className="tj-post-single-post mb-0">
								<div
									className="tj-post-thumb hover:shine wow fadeInUp"
									data-wow-delay="0.1s"
								>
									<Image
										src="/images/service/tj-service-1.webp"
										alt="post-image"
										width={870}
										height={498}
										style={{ height: "auto" }}
									/>
								</div>
								<h3 className="tj-post-title text-anim">{titleLarge}</h3>
								<div className="tj-entry-content">
									{desc1 && (
										<p className="wow fadeInUp" data-wow-delay="0.1s">
											{desc1}
										</p>
									)}
									{desc2 && (
										<p className="wow fadeInUp" data-wow-delay="0.3s">
											{desc2}
										</p>
									)}
									<div className="tj-check-list">
										<h4 className="text-anim">{overviewLabel}</h4>
										{overviewText && (
											<p className="wow fadeInUp" data-wow-delay="0.1s">
												{overviewText}
											</p>
										)}
									</div>
									{Array.isArray(bulletItems) && bulletItems.length > 0 && (
										<div
											className="service-check-list mt-4 wow fadeInUp"
											data-wow-delay="0.3s"
										>
											<ul>
												{bulletItems.map((item, idx) => (
													<li key={idx}>
														<i className="tji-double-check"></i>
														<span>{typeof item === "string" ? item : item?.text || item?.label}</span>
													</li>
												))}
											</ul>
										</div>
									)}
									<div className="service-images-wrap">
										<div className="row">
											<div className="col-sm-6">
												<div
													className="image-wrap hover:shine wow fadeInUp"
													data-wow-delay="0.5s"
												>
													<Image
														src="/images/service/tj-service-3.webp"
														alt="service-image"
														width={420}
														height={395}
														style={{ height: "auto" }}
													/>
												</div>
											</div>
											<div className="col-sm-6">
												<div
													className="image-wrap hover:shine wow fadeInUp"
													data-wow-delay="0.7s"
												>
													<Image
														src="/images/service/tj-service-4.webp"
														alt="service-image"
														width={420}
														height={395}
														style={{ height: "auto" }}
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="check-list mb-40">
										<h4 className="text-anim">Key features</h4>
										{desc && (
											<p className="wow fadeInUp" data-wow-delay="0.1s">
												{desc}
											</p>
										)}
										{shortDesc && shortDesc !== desc && (
											<p className="wow fadeInUp" data-wow-delay="0.3s">
												{shortDesc}
											</p>
										)}
									</div>
									<div className="row rg-30 justify-content-center">
										{cards
											? cards.map((card, idx) => (
													<div key={idx} className="col-md-4 col-sm-6">
														<div
															className="tj-feature wow fadeInUp"
															data-wow-delay={`${0.5 + idx * 0.2}s`}
														>
															<div className="tj-feature-icon">
																<i className={card.icon || "tji-quick"}></i>
															</div>
															<h5 className="tj-feature-title">{card.title}</h5>
															<div className="desc">
																<p>{card.desc}</p>
															</div>
														</div>
													</div>
											  ))
											: null}
									</div>

								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<aside className="tj-service-sidebar">
							{/* <!-- Service List --> */}
							<div
								className="tj-sidebar-widget wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<h5 className="tj-sidebar-widget-title">{sidebarTitle}</h5>
								<div className="service-category">
									<ul>
										{items?.length
											? items?.map((item, idx) => (
													<li key={idx}>
														<Link
															className={isActive(item) ? "active" : ""}
															href={getItemHref(item)}
														>
															{item.title}
															<i className="tji-angle-right"></i>
														</Link>
													</li>
											  ))
											: ""}
									</ul>
								</div>
							</div>
							{/* <!-- cta --> */}
							<div
								className="tj-sidebar-widget wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<CtaSidebar />
							</div>
						</aside>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesDetailsPrimary;
