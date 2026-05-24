import { render, screen } from "@testing-library/react";

import { HomePage } from "@/pages/home";

describe("HomePage", () => {
	it("renders the hello world heading", () => {
		render(<HomePage />);
		expect(
			screen.getByRole("heading", { name: /hello world/i }),
		).toBeInTheDocument();
	});

	it("renders the subtitle text", () => {
		render(<HomePage />);
		expect(screen.getByText(/your app starts here/i)).toBeInTheDocument();
	});
});
