import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../../test/utils/test-utils";
import SingleResult from "./SingleResult";

describe("SingleResult Component", () => {
    const correctAnswerProps = {
        props: {
            question: "What is 2 + 2?",
            answer: "4",
            choice: "4",
            index: 0,
            explanation: "Basic arithmetic",
        },
    };

    const incorrectAnswerProps = {
        props: {
            question: "What is the capital of France?",
            answer: "Paris",
            choice: "London",
            index: 1,
            explanation: "Paris is the capital and largest city of France.",
        },
    };

    describe("Correct Answer", () => {
        it("should display correct indicator for correct answer", () => {
            render(<SingleResult {...correctAnswerProps} />);
            expect(screen.getByText(/✅ correct/i)).toBeInTheDocument();
        });

        it("should display question number", () => {
            render(<SingleResult {...correctAnswerProps} />);
            expect(screen.getByText("Question 1")).toBeInTheDocument();
        });

        it("should display the question text", () => {
            render(<SingleResult {...correctAnswerProps} />);
            expect(screen.getByText(/what is 2 \\+ 2/i)).toBeInTheDocument();
        });

        it("should display the answer", () => {
            render(<SingleResult {...correctAnswerProps} />);
            expect(screen.getByText(/4/)).toBeInTheDocument();
        });

        it("should have green background for correct answer", () => {
            const { container } = render(<SingleResult {...correctAnswerProps} />);
            const resultDiv = container.querySelector(".bg-green-50");
            expect(resultDiv).toBeInTheDocument();
        });
    });

    describe("Incorrect Answer", () => {
        it("should display incorrect indicator for wrong answer", () => {
            render(<SingleResult {...incorrectAnswerProps} />);
            expect(screen.getByText(/❌ incorrect/i)).toBeInTheDocument();
        });

        it("should display question number", () => {
            render(<SingleResult {...incorrectAnswerProps} />);
            expect(screen.getByText("Question 2")).toBeInTheDocument();
        });

        it("should display the question text", () => {
            render(<SingleResult {...incorrectAnswerProps} />);
            expect(
                screen.getByText(/what is the capital of france/i),
            ).toBeInTheDocument();
        });

        it("should display user's incorrect answer", () => {
            render(<SingleResult {...incorrectAnswerProps} />);
            expect(screen.getByText(/your answer:/i)).toBeInTheDocument();
            expect(screen.getByText("London")).toBeInTheDocument();
        });

        it("should display the correct answer", () => {
            render(<SingleResult {...incorrectAnswerProps} />);
            expect(screen.getByText(/correct answer:/i)).toBeInTheDocument();
            expect(screen.getByText("Paris")).toBeInTheDocument();
        });

        it("should display explanation", () => {
            render(<SingleResult {...incorrectAnswerProps} />);
            expect(
                screen.getByText(/paris is the capital and largest city of france/i),
            ).toBeInTheDocument();
        });

        it("should have red background for incorrect answer", () => {
            const { container } = render(<SingleResult {...incorrectAnswerProps} />);
            const resultDiv = container.querySelector(".bg-red-50");
            expect(resultDiv).toBeInTheDocument();
        });
    });
});
