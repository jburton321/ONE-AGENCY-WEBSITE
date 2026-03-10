import { gsap } from "@/libs/gsap.config";
const tjImageParallex = containerRef => {
	let mediaMatch = gsap.matchMedia();
	mediaMatch.add("(min-width: 768px)", () => {
		const animContainer = gsap.utils.toArray(".tjParallaxSection");
		if (animContainer?.length) {
			animContainer.forEach((section, i) => {
				const image = section.querySelector(".tjParallaxImage");
				if (image) {
					gsap.to(image, {
						y: "-25%",
						ease: "none",
						scrollTrigger: {
							trigger: section,
							start: "top bottom",
							end: "bottom top",
							scrub: true,
						},
					});
				}
			});
		}
	});
};
export default tjImageParallex;
