import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../../test/utils/test-utils";
import Question from "./Question";

describe("Question Component", () => {
    const mockQuestion = {
        question: "What is React?",
        choices: [
            "A JavaScript library",
            "A programming language",
            "A database",
            "An operating system",
        ],
        choice: null,
    };

    it("should render the question text", () => {
        render(<Question {...mockQuestion} />);
        expect(screen.getByText("What is React?")).toBeInTheDocument();
    });

    it("should render all answer choices", () => {
        render(<Question {...mockQuestion} />);

        expect(screen.getByText("A JavaScript library")).toBeInTheDocument();
        expect(screen.getByText("A programming language")).toBeInTheDocument();
        expect(screen.getByText("A database")).toBeInTheDocument();
        expect(screen.getByText("An operating system")).toBeInTheDocument();
    });

    it("should render radio inputs for each choice", () => {
        render(<Question {...mockQuestion} />);

        const radioInputs = screen.getAllByRole("radio");
        expect(radioInputs).toHaveLength(4);
    });

    it("should dispatch setUserChoice action when a choice is clicked", async () => {
        const user = userEvent.setup();
        const { store } = render(<Question {...mockQuestion} />, {
            preloadedState: {
                quiz: {
                    current: 0,
                    direction: 0,
                    categoryId: null,
                    quizId: null,
                    quizData: [mockQuestion],
                },
            },
        });

        const firstChoice = screen.getByText("A JavaScript library");
        await user.click(firstChoice);

        const state = store.getState();
        expect(state.quiz.quizData[0].choice).toBe("A JavaScript library");
    });

    it("should show the selected choice as checked", () => {
        const questionWithChoice = {
            ...mockQuestion,
            choice: "A JavaScript library",
        };

        render(<Question {...questionWithChoice} />);

        const radioInputs = screen.getAllByRole("radio");
        const checkedInput = radioInputs.find((input) => input.checked);

        expect(checkedInput).toBeDefined();
        expect(checkedInput.value).toBe("A JavaScript library");
    });

    it("should not have any checked radio when choice is null", () => {
        render(<Question {...mockQuestion} />);

        const radioInputs = screen.getAllByRole("radio");
        const checkedInputs = radioInputs.filter((input) => input.checked);

        expect(checkedInputs).toHaveLength(0);
    });
});
