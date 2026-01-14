# 🗺️ ALL PAGES IN THE ONLINE QUIZ PROJECT

---

## 1️⃣ Home Page

**Route:** `/`

### Purpose

- Introduces the quiz
- First interaction point
- Satisfies onboarding user stories

### Features Covered

- EPIC 1: Quiz Setup & User Onboarding

### User Stories Mapped

- “As a user, I want to understand what the quiz is about”
- “As a user, I want to start the quiz easily”

### UI Elements

- App title
- Short description
- **Start Quiz** button
- **How It Works** link

---

## 2️⃣ How-To / Instructions Page

**Route:** `/how-to`

### Purpose

- Explains how the quiz works
- Required by the brief explicitly

### Features Covered

- EPIC 1: Quiz Setup & User Onboarding

### User Stories Mapped

- “As a user, I want instructions before starting”
- “As a user, I want to know how scoring works”

### UI Elements

- Step-by-step instructions
- Icons or numbered steps
- **Back** button
- **Start Quiz** button

---

## 3️⃣ Category Selection Page

**Route:** `/categories`

### Purpose

- Allows user to choose a quiz category
- Supports multiple quiz themes (general knowledge, physics, math, etc.)

### Features Covered

- EPIC 2: Quiz Experience

### User Stories Mapped

- “As a user, I want to choose a topic”
- “As a user, I want different quiz types”

### UI Elements

- Category cards (General Knowledge, Physics, Math, etc.)
- Clickable category buttons

---

## 4️⃣ Quiz Selection Page

**Route:** `/categories/:category`

### Purpose

- Allows user to choose `quiz1`, `quiz2`, etc. inside a category

### Features Covered

- EPIC 2: Quiz Experience

### User Stories Mapped

- “As a user, I want to choose a specific quiz”
- “As a user, I want multiple quizzes per category”

### UI Elements

- Quiz list (Quiz 1, Quiz 2)
- Short description
- **Start** button per quiz

---

## 5️⃣ Quiz Page (Main Quiz Experience)

**Route:** `/quiz`

### Purpose

- Core of the application
- Displays questions, options, and navigation

### Features Covered

- EPIC 2: Quiz Experience
- EPIC 5: State Management

### User Stories Mapped

- “As a user, I want to answer one question at a time”
- “As a user, I want to navigate questions”
- “As a user, I want my answers saved”

### UI Elements

- Progress indicator (Question X of 5)
- Question card
- Multiple-choice radio buttons
- **Previous / Next** buttons
- **Submit Quiz** button (last question)

---

## 6️⃣ Results / Feedback Page

**Route:** `/results`

### Purpose

- Shows score and feedback
- Required by the brief

### Features Covered

- EPIC 3: Scoring & Feedback

### User Stories Mapped

- “As a user, I want to see my score”
- “As a user, I want to see correct answers”
- “As a user, I want feedback on performance”

### UI Elements

- Score summary (e.g. 4 / 5)
- List of questions with:
  - Correct / Incorrect labels
  - Correct answer shown
- **Restart Quiz** button
- **Go Home** button

---

## 7️⃣ Restart / Reset Flow (Logical Page)

**Route:** `/restart` (optional – logic only)

### Purpose

- Clears Redux state
- Allows retaking quiz

### Features Covered

- EPIC 3 & EPIC 5

### User Stories Mapped

- “As a user, I want to try again”

### UI Elements

- Often just redirects (no visible page)
- Triggered by button click

---

## 8️⃣ 404 / Not Found Page (Optional but Professional)

**Route:** `*`

### Purpose

- Handles broken routes
- Improves UX and polish

### Features Covered

- EPIC 4: UI / UX

### UI Elements

- Friendly error message
- **Back to Home** button
