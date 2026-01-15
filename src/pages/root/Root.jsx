import { Outlet } from "react-router-dom";
import Nav from "../../components/nav/Nav";
import { useLocation, matchPath } from "react-router-dom";

const Root = () => {
  const { pathname } = useLocation();
  const isQuizPage = (pathname) => {
    return matchPath("category/:categoryId/quiz/:quizId", pathname);
  };

  return (
    <>
      {isQuizPage(pathname) ? null : <Nav />}
      <div className="px-4 md:px-8 lg:px-16  min-h-screen">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
