import modifyNumber from "@/libs/modifyNumber";
import Image from "next/image";

const History1 = () => {
	const history = [
		{
			title: "Founding and early years",
			desc: "ONE Agency was founded to hyperscale digital growth for brands through customer acquisition and performance creative. We are committed to delivering exceptional value through our symphony of digital performance.",
			images: [
				"/images/history/history-1.webp",
				"/images/history/history-2.webp",
			],
			year: 2008,
		},
		{
			title: "Expansion and growth",
			desc: "We expanded our proprietary tech stack and data analytics capabilities to serve brands across paid search, paid social and programmatic. Delivering exceptional value through strategic, innovative performance marketing.",
			images: [
				"/images/history/history-3.webp",
				"/images/history/history-4.webp",
			],
			year: 2012,
		},
		{
			title: "Innovation and industry leadership",
			desc: "ONE Agency became a leader in intelligent marketing, combining persuasive creative with MarTech integration and real-time visibility. We empower brands of all sizes to thrive in changing marketplaces.",
			images: [
				"/images/history/history-5.webp",
				"/images/history/history-6.webp",
			],
			year: 2016,
		},
		{
			title: "Global expansion and diversification",
			desc: "We opened locations in Orlando, Scottsdale, Uxbridge and Cancún. Our solutions now span Customer Acquisition, Performance Creative, Data, AI Solutions and Accelerated API Integrations for global brands.",
			images: [
				"/images/history/history-7.webp",
				"/images/history/history-8.webp",
			],
			year: 2020,
		},
		{
			title: "Looking ahead",
			desc: "Transforming the future of intelligent marketing. All you need is ONE. We remain committed to delivering exceptional value through customer acquisition, performance creative and actionable data analytics.",
			images: [
				"/images/history/history-9.webp",
				"/images/history/history-1.webp",
			],
			year: 2024,
		},
	];
	return (
		<section className="tj-history-area section-bottom-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="timeline">
							{history?.length
								? history?.map(({ title, desc, images, year }, idx) => (
										<div
											key={idx}
											className="timeline-inner wow fadeInUp"
											data-wow-delay={`0.${idx + 1 + idx}s`}
										>
											<div className="date">{year}</div>
											<div className="content">
												<div className="top">
													<span>{modifyNumber(idx + 1)}.</span>
													<h4 className="title">{title}</h4>
													<p>{desc}</p>
												</div>
												<div className="bottom">
													{images?.length
														? images?.map((img, idx) => (
																<Image
																	key={idx + 100}
																	src={
																		img ? img : "/images/history/history-1.webp"
																	}
																	alt="history"
																	width={241}
																	height={204}
																	style={{ height: "auto" }}
																/>
														  ))
														: ""}
												</div>
											</div>
										</div>
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default History1;
