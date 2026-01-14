# 🧠 Online Quiz Application

A modern, interactive quiz application that allows users to select categories, take quizzes, receive instant feedback, and review results. The project is designed with clean UX, clear navigation, and scalable architecture, following Agile epics and user stories.

---

## 📌 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [User Flow](#user-flow)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [State Management](#state-management)
- [Routing](#routing)
- [Testing](#testing)
- [Accessibility & UX](#accessibility--ux)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

---

## 📝 Overview

The **Online Quiz Application** provides a structured and engaging way for users to test their knowledge across multiple categories. Users are guided from onboarding through quiz completion, with clear instructions, progress tracking, and detailed results.

The project was implemented following Agile principles, with clearly defined **epics, features, and user stories**, and is suitable for educational, training, or assessment use cases.

---

## ✨ Features

### 🔹 Quiz Setup & Onboarding
- Home page with quiz introduction
- Instructions page explaining rules and scoring
- Simple and intuitive start flow

### 🔹 Quiz Experience
- Category selection (e.g., General Knowledge, Physics, Math)
- Multiple quizzes per category
- One-question-at-a-time interface
- Progress indicator (e.g., Question 2 of 5)
- Previous / Next navigation

### 🔹 Scoring & Feedback
- Automatic scoring on submission
- Final score summary
- Review of correct and incorrect answers
- Option to restart the quiz or return home

### 🔹 UX & Reliability
- Clean, responsive UI
- Graceful handling of invalid routes (404 page)
- Reset logic for retaking quizzes

---

## 🔄 User Flow

1. **Home Page** – User learns about the quiz and starts
2. **How It Works** – Instructions and scoring explanation
3. **Category Selection** – User selects a topic
4. **Quiz Selection** – User selects a quiz within the category
5. **Quiz Page** – User answers questions sequentially
6. **Results Page** – User reviews score and feedback
7. **Restart / Home** – User can retry or exit

---

## 🛠 Tech Stack

- **Frontend:** React (Vite)
- **Styling:** CSS / Tailwind CSS (or equivalent)
- **State Management:** Context API / Redux (as implemented)
- **Routing:** React Router
- **Build Tool:** Vite

---

## 📂 Project Structure

```
src/
├── components/      # Reusable UI components
├── pages/           # Route-level pages (Home, Quiz, Results, etc.)
├── data/            # Quiz questions and categories
├── store/           # State management (Redux / Context)
├── routes/          # Application routes
├── styles/          # Global and component styles
└── main.jsx         # App entry point
```

---

## 🚀 Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/online-quiz-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd online-quiz-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser at:
   ```
   http://localhost:5173
   ```

---

## ▶️ Usage

- Select a quiz category
- Choose a quiz
- Answer all questions
- Submit to view results
- Restart or return home as desired

---

## 🧠 State Management

The application maintains quiz state including:
- Selected category and quiz
- Current question index
- User answers
- Final score

State is reset when restarting the quiz to ensure a clean experience.

---

## 🧭 Routing

Key routes include:

| Route | Description |
|------|-------------|
| `/` | Home page |
| `/how-to` | Instructions page |
| `/categories` | Category selection |
| `/categories/:category` | Quiz selection |
| `/quiz` | Main quiz experience |
| `/results` | Results and feedback |
| `*` | 404 Not Found |

---

## 🧪 Testing

- Manual testing for user flows
- Edge cases handled (no answers, invalid routes)
- Ready for extension with automated tests (Jest / React Testing Library)

---

## ♿ Accessibility & UX

- Clear visual hierarchy
- Readable fonts and contrast
- Button-based navigation
- User-friendly feedback messages

---

## 🔮 Future Enhancements

- Timed quizzes
- User authentication
- Persistent score history
- Difficulty levels
- Admin panel for quiz creation
- Backend integration (API-based quizzes)

---

## 🤝 Contributing

Contributions are welcome:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

---

## 📄 License

This project is licensed under the **MIT License**. Feel free to use, modify, and distribute for educational or commercial purposes.

---

**Built with ❤️ as a complete, user-centered quiz experience.**

