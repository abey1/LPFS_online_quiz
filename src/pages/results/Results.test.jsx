import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../../test/utils/test-utils";
import Results from "./Results";

describe("Results Page", () => {
    const mockQuizData = [
        {
            id: 1,
            question: "Question 1",
            choices: ["A", "B", "C", "D"],
            answer: "A",
            choice: "A",
        },
        {
            id: 2,
            question: "Question 2",
            choices: ["E", "F", "G", "H"],
            answer: "E",
            choice: "F",
        },
        {
            id: 3,
            question: "Question 3",
            choices: ["I", "J", "K", "L"],
            answer: "I",
            choice: "I",
        },
    ];

    it("should render results heading", () => {
        render(<Results />, {
            preloadedState: {
                quiz: {
                    current: 0,
                    direction: 0,
                    categoryId: "test",
                    quizId: "quiz1",
                    quizData: mockQuizData,
                },
            },
        });

        expect(
            screen.getByRole("heading", { name: /results/i }),
        ).toBeInTheDocument();
    });

    it("should calculate and display correct score", () => {
        render(<Results />, {
            preloadedState: {
                quiz: {
                    current: 0,
                    direction: 0,
                    categoryId: "test",
                    quizId: "quiz1",
                    quizData: mockQuizData,
                },
            },
        });

        // 2 out of 3 correct
        expect(screen.getByText(/your score: 2 \\/ 3 / i)).toBeInTheDocument();
    });

    it("should display all questions with results", () => {
        render(<Results />, {
            preloadedState: {
                quiz: {
                    current: 0,
                    direction: 0,
                    categoryId: "test",
                    quizId: "quiz1",
                    quizData: mockQuizData,
                },
            },
        });

        expect(screen.getByText("Question 1")).toBeInTheDocument();
        expect(screen.getByText("Question 2")).toBeInTheDocument();
        expect(screen.getByText("Question 3")).toBeInTheDocument();
    });

    it("should show correct and incorrect indicators", () => {
        render(<Results />, {
            preloadedState: {
                quiz: {
                    current: 0,
                    direction: 0,
                    categoryId: "test",
                    quizId: "quiz1",
                    quizData: mockQuizData,
                },
            },
        });

        const correctIndicators = screen.getAllByText(/✅ correct/i);
        const incorrectIndicators = screen.getAllByText(/❌ incorrect/i);

        expect(correctIndicators).toHaveLength(2);
        expect(incorrectIndicators).toHaveLength(1);
    });

    it("should render retake quiz button", () => {
        render(<Results />, {
            preloadedState: {
                quiz: {
                    current: 0,
                    direction: 0,
                    categoryId: "test",
                    quizId: "quiz1",
                    quizData: mockQuizData,
                },
            },
        });

        expect(
            screen.getByRole("button", { name: /retake quiz/i }),
        ).toBeInTheDocument();
    });

    it("should render back button", () => {
        render(<Results />, {
            preloadedState: {
                quiz: {
                    current: 0,
                    direction: 0,
                    categoryId: "test",
                    quizId: "quiz1",
                    quizData: mockQuizData,
                },
            },
        });

        expect(screen.getByText(/back/i)).toBeInTheDocument();
    });

    it("should calculate perfect score correctly", () => {
        const perfectQuizData = mockQuizData.map((q) => ({
            ...q,
            choice: q.answer,
        }));

        render(<Results />, {
            preloadedState: {
                quiz: {
                    current: 0,
                    direction: 0,
                    categoryId: "test",
                    quizId: "quiz1",
                    quizData: perfectQuizData,
                },
            },
        });

        expect(screen.getByText(/your score: 3 \\/ 3 / i)).toBeInTheDocument();
    });

    it("should calculate zero score correctly", () => {
        const zeroScoreQuizData = mockQuizData.map((q) => ({
            ...q,
            choice: q.choices.find((c) => c !== q.answer),
        }));

        render(<Results />, {
            preloadedState: {
                quiz: {
                    current: 0,
                    direction: 0,
                    categoryId: "test",
                    quizId: "quiz1",
                    quizData: zeroScoreQuizData,
                },
            },
        });

        expect(screen.getByText(/your score: 0 \\/ 3 / i)).toBeInTheDocument();
    });
});
