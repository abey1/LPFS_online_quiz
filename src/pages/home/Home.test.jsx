import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../../test/utils/test-utils";
import Home from "./Home";

describe("Home Page", () => {
    it("should render welcome heading", () => {
        render(<Home />);
        expect(
            screen.getByRole("heading", { name: /welcome to online quiz/i }),
        ).toBeInTheDocument();
    });

    it("should render description text", () => {
        render(<Home />);
        expect(
            screen.getByText(/challenge your knowledge with our exciting quizzes/i),
        ).toBeInTheDocument();
    });

    it("should render Start Quiz button", () => {
        render(<Home />);
        expect(
            screen.getByRole("button", { name: /start quiz/i }),
        ).toBeInTheDocument();
    });

    it("should render How it works button", () => {
        render(<Home />);
        expect(
            screen.getByRole("button", { name: /how it works/i }),
        ).toBeInTheDocument();
    });

    it("should have link to categories page", () => {
        render(<Home />);
        const startButton = screen.getByRole("button", { name: /start quiz/i });
        const link = startButton.closest("a");
        expect(link).toHaveAttribute("href", "/categories");
    });

    it("should have link to howto page", () => {
        render(<Home />);
        const howtoButton = screen.getByRole("button", { name: /how it works/i });
        const link = howtoButton.closest("a");
        expect(link).toHaveAttribute("href", "/howto");
    });

    it("should render logo image", () => {
        render(<Home />);
        const logo = screen.getByAltText(/online quiz logo/i);
        expect(logo).toBeInTheDocument();
    });
});
