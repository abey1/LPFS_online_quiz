import { describe, it, expect, beforeAll, afterAll, afterEach } from "vitest";
import { configureStore } from "@reduxjs/toolkit";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import gemgenaiReducer, {
    toggleHelp,
    setTopic,
    setDifficulty,
    setCount,
    setFulfilledToFalse,
    fetchGemGenAIData,
    selectGemGenAI,
} from "./gemgenaiSlice";

// Setup MSW server
const server = setupServer(
    http.post(
        "https://lpfs-online-quiz-backend.onrender.com/generate-quiz",
        () => {
            return HttpResponse.json({
                questions: [
                    {
                        id: 1,
                        question: "Test question",
                        choices: ["A", "B", "C", "D"],
                    },
                ],
            });
        },
    ),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("gemgenaiSlice", () => {
    const initialState = {
        showHelp: false,
        isPending: false,
        fulfilled: false,
        error: null,
        aiquestions: [],
        topic: "",
        difficulty: "easy",
        count: 5,
    };

    it("should return the initial state", () => {
        expect(gemgenaiReducer(undefined, { type: "unknown" })).toEqual(
            initialState,
        );
    });

    describe("reducers", () => {
        it("should handle toggleHelp", () => {
            const actual = gemgenaiReducer(initialState, toggleHelp());
            expect(actual.showHelp).toBe(true);

            const toggled = gemgenaiReducer(actual, toggleHelp());
            expect(toggled.showHelp).toBe(false);
        });

        it("should handle setTopic", () => {
            const actual = gemgenaiReducer(initialState, setTopic("JavaScript"));
            expect(actual.topic).toBe("JavaScript");
        });

        it("should handle setDifficulty", () => {
            const actual = gemgenaiReducer(initialState, setDifficulty("hard"));
            expect(actual.difficulty).toBe("hard");
        });

        it("should handle setCount", () => {
            const actual = gemgenaiReducer(initialState, setCount(10));
            expect(actual.count).toBe(10);
        });

        it("should handle setFulfilledToFalse", () => {
            const stateWithFulfilled = { ...initialState, fulfilled: true };
            const actual = gemgenaiReducer(stateWithFulfilled, setFulfilledToFalse());
            expect(actual.fulfilled).toBe(false);
        });
    });

    describe("fetchGemGenAIData async thunk", () => {
        it("should set isPending to true when pending", () => {
            const action = { type: fetchGemGenAIData.pending.type };
            const state = gemgenaiReducer(initialState, action);

            expect(state.isPending).toBe(true);
            expect(state.error).toBeNull();
            expect(state.fulfilled).toBe(false);
        });

        it("should set fulfilled state with data on success", async () => {
            const store = configureStore({
                reducer: { gemgenai: gemgenaiReducer },
                preloadedState: {
                    gemgenai: {
                        ...initialState,
                        topic: "React",
                        difficulty: "medium",
                        count: 5,
                    },
                },
            });

            await store.dispatch(fetchGemGenAIData());
            const state = store.getState().gemgenai;

            expect(state.isPending).toBe(false);
            expect(state.fulfilled).toBe(true);
            expect(state.error).toBeNull();
            expect(state.aiquestions).toHaveLength(1);
            expect(state.aiquestions[0]).toHaveProperty("question");
        });

        it("should set error state on failure", async () => {
            // Override the handler to return an error
            server.use(
                http.post(
                    "https://lpfs-online-quiz-backend.onrender.com/generate-quiz",
                    () => {
                        return HttpResponse.json(
                            { error: "Failed to generate quiz" },
                            { status: 500 },
                        );
                    },
                ),
            );

            const store = configureStore({
                reducer: { gemgenai: gemgenaiReducer },
                preloadedState: {
                    gemgenai: {
                        ...initialState,
                        topic: "React",
                        difficulty: "easy",
                        count: 5,
                    },
                },
            });

            await store.dispatch(fetchGemGenAIData());
            const state = store.getState().gemgenai;

            expect(state.isPending).toBe(false);
            expect(state.fulfilled).toBe(false);
            expect(state.error).toBeTruthy();
        });
    });

    describe("selectors", () => {
        it("selectGemGenAI should return gemgenai state", () => {
            const state = {
                gemgenai: {
                    ...initialState,
                    topic: "Testing",
                },
            };

            const result = selectGemGenAI(state);
            expect(result).toEqual(state.gemgenai);
            expect(result.topic).toBe("Testing");
        });
    });
});
