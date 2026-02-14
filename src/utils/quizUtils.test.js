import { describe, it, expect, vi } from "vitest";
import { prepareQuizData } from "./quizUtils";
import data from "../data/data";

// Mock the data module
vi.mock("../data/data", () => ({
    default: {
        testCategory: {
            quizzes: {
                testQuiz: [
                    {
                        id: 1,
                        question: "Question 1",
                        choices: ["Answer A", "Answer B", "Answer C", "Answer D"],
                    },
                    {
                        id: 2,
                        question: "Question 2",
                        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
                    },
                ],
            },
        },
    },
}));

describe("quizUtils", () => {
    describe("prepareQuizData", () => {
        it("should prepare quiz data from local data", () => {
            const result = prepareQuizData("testCategory", "testQuiz", null);

            expect(result).toHaveLength(2);
            expect(result[0]).toHaveProperty("id");
            expect(result[0]).toHaveProperty("question");
            expect(result[0]).toHaveProperty("choices");
            expect(result[0]).toHaveProperty("answer");
            expect(result[0]).toHaveProperty("choice", null);
            expect(result[0].choices).toHaveLength(4);
        });

        it("should set answer as the first choice from original data", () => {
            const result = prepareQuizData("testCategory", "testQuiz", null);

            // The answer should be one of the original choices
            expect(result[0].choices).toContain(result[0].answer);
        });

        it("should shuffle choices", () => {
            // Run multiple times to check if shuffling occurs
            const results = Array.from({ length: 10 }, () =>
                prepareQuizData("testCategory", "testQuiz", null),
            );

            // Check if at least one result has different order
            const firstChoices = results.map((r) => r[0].choices[0]);
            const allSame = firstChoices.every((choice) => choice === firstChoices[0]);

            // With 4 choices and 10 runs, it's extremely unlikely all are the same if shuffling works
            expect(allSame).toBe(false);
        });

        it("should prepare quiz data from AI data", () => {
            const aiData = [
                {
                    id: 1,
                    question: "AI Question 1",
                    choices: ["AI Answer A", "AI Answer B", "AI Answer C", "AI Answer D"],
                },
            ];

            const result = prepareQuizData(null, null, aiData);

            expect(result).toHaveLength(1);
            expect(result[0].question).toBe("AI Question 1");
            expect(result[0]).toHaveProperty("answer");
            expect(result[0]).toHaveProperty("choice", null);
            expect(result[0].choices).toHaveLength(4);
        });

        it("should initialize choice as null for all questions", () => {
            const result = prepareQuizData("testCategory", "testQuiz", null);

            result.forEach((question) => {
                expect(question.choice).toBeNull();
            });
        });
    });
});
