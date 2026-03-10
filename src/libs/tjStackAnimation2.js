import { gsap } from "@/libs/gsap.config";
const tjStackAnimation2 = selector => {
	let mediaMatch = gsap.matchMedia();
	const serviceStack = gsap.utils.toArray(selector);
	mediaMatch.add("(min-width: 992px)", () => {
		serviceStack.forEach(item => {
			gsap.to(item, {
				scrollTrigger: {
					trigger: item,
					scrub: true,
					start: "top top",
					pin: true,
					pinSpacing: false,
					markers: false,
				},
			});
		});
	});
};
export default tjStackAnimation2;
