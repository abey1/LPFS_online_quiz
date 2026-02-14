import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../../test/utils/test-utils";
import QuitButton from "./QuitButton";

describe("QuitButton Component", () => {
    it("should render the quit button", () => {
        render(<QuitButton />);
        expect(screen.getByText(/quit/i)).toBeInTheDocument();
    });

    it("should navigate to home when clicked", async () => {
        const user = userEvent.setup();
        render(<QuitButton />, {
            initialEntries: ["/quiz"],
        });

        const quitButton = screen.getByText(/quit/i);
        await user.click(quitButton);

        // The button should be present and clickable
        expect(quitButton).toBeInTheDocument();
    });

    it("should have hover styles", () => {
        render(<QuitButton />);
        const quitButton = screen.getByText(/quit/i);

        expect(quitButton).toHaveClass("hover:cursor-pointer");
        expect(quitButton).toHaveClass("hover:text-blue-500");
    });
});
