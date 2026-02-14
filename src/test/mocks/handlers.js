import { http, HttpResponse } from "msw";

export const handlers = [
    // Mock the AI quiz generation endpoint
    http.post(
        "https://lpfs-online-quiz-backend.onrender.com/generate-quiz",
        async ({ request }) => {
            const body = await request.json();
            const { topic, difficulty, count } = body;

            // Return mock quiz data
            return HttpResponse.json({
                questions: Array.from({ length: count || 5 }, (_, i) => ({
                    id: i + 1,
                    question: `${topic} question ${i + 1} (${difficulty})`,
                    choices: [
                        `Correct answer for question ${i + 1}`,
                        `Wrong answer 1 for question ${i + 1}`,
                        `Wrong answer 2 for question ${i + 1}`,
                        `Wrong answer 3 for question ${i + 1}`,
                    ],
                })),
            });
        },
    ),
];
