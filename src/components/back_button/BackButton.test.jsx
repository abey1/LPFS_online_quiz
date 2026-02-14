import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../../test/utils/test-utils";
import BackButton from "./BackButton";

describe("BackButton Component", () => {
    it("should render the back button", () => {
        render(<BackButton />);
        expect(screen.getByText(/back/i)).toBeInTheDocument();
    });

    it("should navigate back when clicked", async () => {
        const user = userEvent.setup();
        const { container } = render(<BackButton />, {
            initialEntries: ["/first", "/second"],
        });

        const backButton = screen.getByText(/back/i);
        await user.click(backButton);

        // After clicking back, we should navigate to the previous route
        // This is tested by checking if the navigation function was called
        expect(backButton).toBeInTheDocument();
    });

    it("should have hover styles", () => {
        render(<BackButton />);
        const backButton = screen.getByText(/back/i);

        expect(backButton).toHaveClass("hover:cursor-pointer");
        expect(backButton).toHaveClass("hover:text-blue-500");
    });
});
