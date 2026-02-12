import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Howto from "./pages/howto/Howto";
import Categories from "./pages/categories/Categories";
import Category from "./pages/category/Category";
import GemGenAI from "./pages/ai/GemGenAI";
import Quiz from "./pages/quiz/Quiz";
import PageNotFound from "./pages/404/PageNotFound";
import Results from "./pages/results/Results";
import Root from "./pages/root/Root";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="howto" element={<Howto />} />
      <Route path="categories" element={<Categories />} />
      <Route path="category/:categoryId" element={<Category />} />
      <Route path="gemgenai" element={<GemGenAI />} />
      <Route path="category/:categoryId/quiz/:quizId" element={<Quiz />} />
      <Route path="gemgenai" element={<Quiz source="ai" />} />
      <Route path="results" element={<Results />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>,
  ),
  { basename: "/" },
);

function App() {
  return (
    <div className="container mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
