import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../../test/utils/test-utils";
import Loading from "./Loading";

describe("Loading Component", () => {
    it("should render loading message", () => {
        render(<Loading />);
        expect(screen.getByText(/generating your quiz/i)).toBeInTheDocument();
    });

    it("should render three animated dots", () => {
        const { container } = render(<Loading />);
        const dots = container.querySelectorAll(".animate-bounce");
        expect(dots).toHaveLength(3);
    });

    it("should have blue colored dots", () => {
        const { container } = render(<Loading />);
        const dots = container.querySelectorAll(".bg-blue-500");
        expect(dots).toHaveLength(3);
    });

    it("should have pulsing text animation", () => {
        render(<Loading />);
        const text = screen.getByText(/generating your quiz/i);
        expect(text).toHaveClass("animate-pulse");
    });
});
