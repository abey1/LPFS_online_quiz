import logo from "./online_quiz.png";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="flex items-center justify-between py-4 bg-white w-full shadow-md">
      <div className="px-4 md:px-8 lg:px-16">
        <h1 className="text-xl font-semibold">
          <Link to="/">
            {<img src={logo} alt="Online Quiz Logo" className="h-8 w-auto" />}
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Nav;
