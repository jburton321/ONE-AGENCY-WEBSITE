import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import InfinityMesh from "@/components/shared/InfinityMesh";

const Cta1 = () => {
	return (
		<section className="tj-cta-section relative overflow-hidden">
			<div
				className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 overflow-hidden pointer-events-none"
				style={{ width: 1920, minWidth: 1920 }}
			>
				<InfinityMesh
					className="absolute inset-0 pointer-events-none"
					style={{ width: 1920, minWidth: 1920, height: "100%" }}
					cameraZ={45}
					meshScale={4}
				/>
			</div>
			<div className="container relative z-10">
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
		</section>
	);
};

export default Cta1;
