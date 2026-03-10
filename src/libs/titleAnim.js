import { gsap } from "@/libs/gsap.config";

const titleAnim = () => {
	const animItems = gsap.utils.toArray(".text-anim");
	if (animItems.length) {
		animItems.forEach((element) => {
			gsap.from(element, {
				duration: 0.6,
				delay: 0.1,
				y: 20,
				autoAlpha: 0,
				ease: "power2.out",
				scrollTrigger: { trigger: element, start: "top 85%" },
			});
		});
	}
};

export default titleAnim;
