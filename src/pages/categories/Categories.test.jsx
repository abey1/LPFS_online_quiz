import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../../test/utils/test-utils";
import Categories from "./Categories";

// Mock the data module
vi.mock("../../data/data", () => ({
    default: {
        generalKnowledge: {
            name: "General Knowledge",
            description: "Test your general knowledge",
            quizzes: {},
        },
        science: {
            name: "Science",
            description: "Science questions",
            quizzes: {},
        },
    },
}));

describe("Categories Page", () => {
    it("should render categories heading", () => {
        render(<Categories />);
        expect(
            screen.getByRole("heading", { name: /categories/i }),
        ).toBeInTheDocument();
    });

    it("should render category items from data", () => {
        render(<Categories />);
        expect(screen.getByText(/general knowledge/i)).toBeInTheDocument();
        expect(screen.getByText(/science/i)).toBeInTheDocument();
    });

    it("should render back button", () => {
        render(<Categories />);
        expect(screen.getByText(/back/i)).toBeInTheDocument();
    });
});
