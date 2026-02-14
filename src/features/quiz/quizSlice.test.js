import { describe, it, expect } from "vitest";
import quizReducer, {
    initializeQuizData,
    initializeQuizDataAi,
    setCurrent,
    setDirection,
    setUserChoice,
    selectQuizData,
    selectIsQuizEmpty,
} from "./quizSlice";

describe("quizSlice", () => {
    const initialState = {
        current: 0,
        direction: 0,
        categoryId: null,
        quizId: null,
        quizData: [],
    };

    it("should return the initial state", () => {
        expect(quizReducer(undefined, { type: "unknown" })).toEqual(initialState);
    });

    describe("reducers", () => {
        it("should handle setCurrent", () => {
            const actual = quizReducer(initialState, setCurrent(3));
            expect(actual.current).toBe(3);
        });

        it("should handle setDirection", () => {
            const actual = quizReducer(initialState, setDirection(1));
            expect(actual.direction).toBe(1);
        });

        it("should handle setUserChoice", () => {
            const stateWithQuiz = {
                ...initialState,
                current: 0,
                quizData: [
                    { id: 1, question: "Q1", choices: ["A", "B"], choice: null },
                    { id: 2, question: "Q2", choices: ["C", "D"], choice: null },
                ],
            };

            const actual = quizReducer(stateWithQuiz, setUserChoice("A"));
            expect(actual.quizData[0].choice).toBe("A");
            expect(actual.quizData[1].choice).toBeNull();
        });

        it("should handle initializeQuizDataAi", () => {
            const aiQuizData = [
                {
                    id: 1,
                    question: "AI Question",
                    choices: ["A", "B", "C", "D"],
                },
            ];

            const actual = quizReducer(
                initialState,
                initializeQuizDataAi({ aiQuizData }),
            );

            expect(actual.quizData).toHaveLength(1);
            expect(actual.quizData[0]).toHaveProperty("answer");
            expect(actual.quizData[0]).toHaveProperty("choice");
        });
    });

    describe("selectors", () => {
        it("selectQuizData should return quiz state", () => {
            const state = {
                quiz: {
                    current: 2,
                    direction: 1,
                    categoryId: "test",
                    quizId: "quiz1",
                    quizData: [{ id: 1 }],
                },
            };

            const result = selectQuizData(state);
            expect(result).toEqual(state.quiz);
        });

        it("selectIsQuizEmpty should return true when quizData is empty", () => {
            const state = {
                quiz: {
                    ...initialState,
                    quizData: [],
                },
            };

            expect(selectIsQuizEmpty(state)).toBe(true);
        });

        it("selectIsQuizEmpty should return false when quizData has items", () => {
            const state = {
                quiz: {
                    ...initialState,
                    quizData: [{ id: 1 }],
                },
            };

            expect(selectIsQuizEmpty(state)).toBe(false);
        });
    });
});
