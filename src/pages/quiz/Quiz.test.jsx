import { describe, it, expect, vi } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../../test/utils/test-utils";
import Quiz from "./Quiz";
import { initializeQuizData } from "../../features/quiz/quizSlice";

// Mock framer-motion to avoid animation issues in tests
vi.mock("framer-motion", () => ({
    motion: {
        div: ({ children, ...props }) => <div {...props}>{children}</div>,
    },
    AnimatePresence: ({ children }) => <>{children}</>,
}));

describe("Quiz Page", () => {
    const mockQuizData = [
        {
            id: 1,
            question: "Question 1",
            choices: ["A", "B", "C", "D"],
            answer: "A",
            choice: null,
        },
        {
            id: 2,
            question: "Question 2",
            choices: ["E", "F", "G", "H"],
            answer: "E",
            choice: null,
        },
        {
            id: 3,
            question: "Question 3",
            choices: ["I", "J", "K", "L"],
            answer: "I",
            choice: null,
        },
    ];

    it("should display current question", () => {
        render(<Quiz source="local" />, {
            preloadedState: {
                quiz: {
                    current: 0,
                    direction: 0,
                    categoryId: "test",
                    quizId: "quiz1",
                    quizData: mockQuizData,
                },
            },
            initialEntries: ["/category/test/quiz/quiz1"],
        });

        expect(screen.getByText("Question 1")).toBeInTheDocument();
    });

    it("should show progress indicator", () => {
        render(<Quiz source="local" />, {
            preloadedState: {
                quiz: {
                    current: 0,
                    direction: 0,
                    categoryId: "test",
                    quizId: "quiz1",
                    quizData: mockQuizData,
                },
            },
            initialEntries: ["/category/test/quiz/quiz1"],
        });

        expect(screen.getByText(/question 1 of 3/i)).toBeInTheDocument();
    });

    it("should have Previous and Next buttons", () => {
        render(<Quiz source="local" />, {
            preloadedState: {
                quiz: {
                    current: 1,
                    direction: 0,
                    categoryId: "test",
                    quizId: "quiz1",
                    quizData: mockQuizData,
                },
            },
            initialEntries: ["/category/test/quiz/quiz1"],
        });

        expect(screen.getByRole("button", { name: /previous/i })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /next/i })).toBeInTheDocument();
    });

    it("should disable Previous button on first question", () => {
        render(<Quiz source="local" />, {
            preloadedState: {
                quiz: {
                    current: 0,
                    direction: 0,
                    categoryId: "test",
                    quizId: "quiz1",
                    quizData: mockQuizData,
                },
            },
            initialEntries: ["/category/test/quiz/quiz1"],
        });

        const prevButton = screen.getByRole("button", { name: /previous/i });
        expect(prevButton).toBeDisabled();
    });

    it("should show finish button on last question", () => {
        render(<Quiz source="local" />, {
            preloadedState: {
                quiz: {
                    current: 2,
                    direction: 0,
                    categoryId: "test",
                    quizId: "quiz1",
                    quizData: mockQuizData,
                },
            },
            initialEntries: ["/category/test/quiz/quiz1"],
        });

        expect(screen.getByRole("button", { name: /finish/i })).toBeInTheDocument();
        expect(screen.queryByRole("button", { name: /next/i })).not.toBeInTheDocument();
    });

    it("should disable finish button until all questions are answered", () => {
        render(<Quiz source="local" />, {
            preloadedState: {
                quiz: {
                    current: 2,
                    direction: 0,
                    categoryId: "test",
                    quizId: "quiz1",
                    quizData: mockQuizData,
                },
            },
            initialEntries: ["/category/test/quiz/quiz1"],
        });

        const finishButton = screen.getByRole("button", { name: /finish/i });
        expect(finishButton).toBeDisabled();
    });

    it("should enable finish button when all questions are answered", () => {
        const answeredQuizData = mockQuizData.map((q) => ({ ...q, choice: q.answer }));

        render(<Quiz source="local" />, {
            preloadedState: {
                quiz: {
                    current: 2,
                    direction: 0,
                    categoryId: "test",
                    quizId: "quiz1",
                    quizData: answeredQuizData,
                },
            },
            initialEntries: ["/category/test/quiz/quiz1"],
        });

        const finishButton = screen.getByRole("button", { name: /finish/i });
        expect(finishButton).not.toBeDisabled();
    });

    it("should render quit button", () => {
        render(<Quiz source="local" />, {
            preloadedState: {
                quiz: {
                    current: 0,
                    direction: 0,
                    categoryId: "test",
                    quizId: "quiz1",
                    quizData: mockQuizData,
                },
            },
            initialEntries: ["/category/test/quiz/quiz1"],
        });

        expect(screen.getByText(/quit/i)).toBeInTheDocument();
    });
});
