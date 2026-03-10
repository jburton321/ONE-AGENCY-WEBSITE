import SmoothScroller from "@/components/shared/others/SmoothScroller";
import { Lato, Libre_Franklin } from "next/font/google";
import "react-range-slider-input/dist/style.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "venobox/dist/venobox.min.css";
import "./assets/css/animate.css";
import "./assets/css/font-awesome-pro.min.css";
import "./assets/css/glightbox.min.css";
import "./assets/css/meanmenu.css";
import "./assets/css/nice-select2.css";
import "./assets/css/odometer-theme-default.css";
import "./assets/css/solvior-icons.css";
import "./globals.scss";
import "./assets/css/bootstrap.min.css";
import "./tailwind.css";
export const metadata = {
	title: "ONE Agency – Digital Growth & Performance Marketing | Orlando",
	description: "Hyperscale digital growth through customer acquisition, UX/CX & MarTech. Proprietary tech stack, persuasive creative and actionable data.",
};

const lato = Lato({
	subsets: ["latin"],
	weight: ["100", "300", "400", "700", "900"],
	style: ["normal", "italic"],
	variable: "--tj-ff-body", // optional: set a CSS variable
});

const libreFranklin = Libre_Franklin({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	variable: "--tj-ff-heading",
});
export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			data-scroll-behavior="smooth"
			className={`${lato.variable} ${libreFranklin.variable}`}
		>
			<body>
				{children}
				<SmoothScroller />
			</body>
		</html>
	);
}
