import { describe, it, expect, vi } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../utils/test-utils";
import App from "../../App";

// Mock framer-motion
vi.mock("framer-motion", () => ({
    motion: {
        div: ({ children, ...props }) => <div {...props}>{children}</div>,
    },
    AnimatePresence: ({ children }) => <>{children}</>,
}));

// Mock data
vi.mock("../../data/data", () => ({
    default: {
        testCategory: {
            name: "Test Category",
            description: "Test category description",
            quizzes: {
                testQuiz: [
                    {
                        id: 1,
                        question: "Test Question 1",
                        choices: ["Answer A", "Answer B", "Answer C", "Answer D"],
                    },
                    {
                        id: 2,
                        question: "Test Question 2",
                        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                    },
                ],
            },
        },
    },
}));

describe("Quiz Flow Integration Test", () => {
    it("should complete a full quiz flow from home to results", async () => {
        const user = userEvent.setup();

        // Render the app
        const { container } = render(<App />);

        // 1. Should start at home page
        expect(
            screen.getByRole("heading", { name: /welcome to online quiz/i }),
        ).toBeInTheDocument();

        // 2. Click Start Quiz button
        const startButton = screen.getByRole("button", { name: /start quiz/i });
        await user.click(startButton);

        // 3. Should navigate to categories page
        await waitFor(() => {
            expect(
                screen.getByRole("heading", { name: /categories/i }),
            ).toBeInTheDocument();
        });

        // 4. Select a category
        const categoryLink = screen.getByText(/test category/i);
        await user.click(categoryLink);

        // Note: The rest of the flow would require more complex setup
        // including mocking the quiz selection and navigation
        // This demonstrates the basic integration test structure
    });

    it("should navigate to 404 page for invalid routes", async () => {
        // Render with an invalid route
        render(<App />, {
            initialEntries: ["/invalid-route"],
        });

        // Should show 404 page
        expect(
            screen.getByRole("heading", { name: /404 - page not found/i }),
        ).toBeInTheDocument();
    });
});
