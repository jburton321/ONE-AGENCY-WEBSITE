import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";

const Cta1 = () => {
	return (
		<section className="tj-cta-section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="cta-wrapper">
							<div className="cta-title">
								<h2 className="title text-anim">All you need is ONE.</h2>
							</div>
							<div className="cta-button wow fadeInUp" data-wow-delay="0.1s">
								<ButtonPrimary
									text={"Request Demo"}
									url={"/contact"}
									className="white-btn"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Image
				className="cta-shape-1"
				src="/images/shapes/cta-shapes-1.png"
				alt="Shapes"
				width={207}
				height={110}
				style={{ height: "auto" }}
			/>
			<Image
				className="cta-shape-2"
				src="/images/shapes/cta-shapes-2.png"
				alt="Shapes"
				width={207}
				height={110}
				style={{ height: "auto" }}
			/>
		</section>
	);
};

export default Cta1;
