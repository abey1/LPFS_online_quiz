import data from "../data/data.js";

const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const prepareQuizData = (categoryId, quizId, data1) => {
  let rawData = [];
  if (data1) {
    rawData = data1;
  } else {
    rawData = shuffleArray(data[categoryId].quizzes[quizId]);
    console.log("Raw quiz data in prepareQuizData:", rawData);
  }

  return rawData.map((item) => ({
    ...item,
    answer: item.choices[0],
    choices: shuffleArray(item.choices),
    choice: null,
  }));
};
