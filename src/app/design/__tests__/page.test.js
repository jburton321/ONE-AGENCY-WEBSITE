import { render, screen } from "@testing-library/react";
import DesignPage from "../page";

describe("Design page", () => {
	it("renders design system title and main sections", () => {
		render(<DesignPage />);
		expect(screen.getByRole("heading", { name: /Solvior design system/i })).toBeInTheDocument();
		expect(screen.getByText(/Colors/i)).toBeInTheDocument();
		expect(screen.getByText(/Typography/i)).toBeInTheDocument();
		expect(screen.getByText(/Spacing/i)).toBeInTheDocument();
		expect(screen.getByText(/Breakpoints/i)).toBeInTheDocument();
	});

	it("renders link back to site", () => {
		render(<DesignPage />);
		const link = screen.getByRole("link", { name: /Back to site/i });
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute("href", "/");
	});

	it("renders theme primary color token", () => {
		render(<DesignPage />);
		expect(screen.getByText("Theme Primary")).toBeInTheDocument();
		expect(screen.getByText("#0075ff")).toBeInTheDocument();
	});
});
