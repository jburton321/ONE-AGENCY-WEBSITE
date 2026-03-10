import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: false,
	async redirects() {
		return [
			{ source: "/home-1", destination: "/", permanent: false },
			{ source: "/home-01", destination: "/", permanent: false },
		];
	},
};

export default nextConfig;
