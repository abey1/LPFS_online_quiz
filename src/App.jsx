import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Howto from "./pages/howto/Howto";
import Categories from "./pages/categories/Categories";
import Category from "./pages/category/Category";
import Quiz from "./pages/quiz/Quiz";
import PageNotFound from "./pages/404/PageNotFound";
import Results from "./pages/results/Results";
import Root from "./pages/root/Root";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/LPFS_online_quiz/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/LPFS_online_quiz/howto" element={<Howto />} />
      <Route path="/LPFS_online_quiz/categories" element={<Categories />} />
      <Route
        path="/LPFS_online_quiz/category/:categoryId"
        element={<Category />}
      />
      <Route
        path="/LPFS_online_quiz/category/:categoryId/quiz/:quizId"
        element={<Quiz />}
      />
      <Route path="/LPFS_online_quiz/results" element={<Results />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div className="container mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
