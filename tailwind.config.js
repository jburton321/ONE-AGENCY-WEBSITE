/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				common: {
					white: "var(--tj-color-common-white)",
					"white-2": "var(--tj-color-common-white-2)",
					black: "var(--tj-color-common-black)",
					"black-2": "var(--tj-color-common-black-2)",
					"black-3": "var(--tj-color-common-black-3)",
				},
				heading: {
					primary: "var(--tj-color-heading-primary)",
				},
				text: {
					body: "var(--tj-color-text-body)",
					"body-2": "var(--tj-color-text-body-2)",
				},
				theme: {
					primary: "var(--tj-color-theme-primary)",
					dark: "var(--tj-color-theme-dark)",
					bg: "var(--tj-color-theme-bg)",
					"bg-2": "var(--tj-color-theme-bg-2)",
				},
				border: {
					1: "var(--tj-color-border-1)",
					2: "var(--tj-color-border-2)",
					3: "var(--tj-color-border-3)",
				},
				red: {
					1: "var(--tj-color-red-1)",
				},
			},
			fontFamily: {
				body: "var(--tj-ff-body)",
				heading: "var(--tj-ff-heading)",
			},
			fontSize: {
				body: "var(--tj-fs-body)",
				p: "var(--tj-fs-p)",
				h1: "var(--tj-fs-h1)",
				h2: "var(--tj-fs-h2)",
				h3: "var(--tj-fs-h3)",
				h4: "var(--tj-fs-h4)",
				h5: "var(--tj-fs-h5)",
				h6: "var(--tj-fs-h6)",
			},
			fontWeight: {
				thin: "var(--tj-fw-thin)",
				elight: "var(--tj-fw-elight)",
				light: "var(--tj-fw-light)",
				regular: "var(--tj-fw-regular)",
				medium: "var(--tj-fw-medium)",
				sbold: "var(--tj-fw-sbold)",
				bold: "var(--tj-fw-bold)",
				ebold: "var(--tj-fw-ebold)",
				black: "var(--tj-fw-black)",
			},
			screens: {
				xxs: "390px",
				xs: "576px",
				sm: "768px",
				md: "992px",
				lg: "1200px",
				xl: "1400px",
				xxl: "1600px",
				xxxl: "1800px",
			},
			spacing: {
				30: "30px",
				40: "40px",
				50: "50px",
				60: "60px",
				70: "70px",
				80: "80px",
				120: "120px",
			},
		},
	},
	plugins: [],
};
