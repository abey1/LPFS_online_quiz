import data from "../data/data.js";

const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const prepareQuizData = (categoryId, quizId) => {
  const rawData = shuffleArray(data[categoryId].quizzes[quizId]);

  return rawData.map((item) => ({
    ...item,
    answer: item.choices[0],
    choices: shuffleArray(item.choices),
    choice: null,
  }));
};
