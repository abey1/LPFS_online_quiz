import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
const PAGE_TITLES = {
  "/": "Home",
  "/categories": "Categories",
  "/howto": "How to",
  "/category": "Category",
  "/quiz": "Quiz",
  "/results": "Results",
};

function getTitleFromPath(pathname, pageTitles) {
  return (
    Object.keys(pageTitles)
      // only keys that are a prefix of the pathname
      .filter((key) => pathname === key || pathname.startsWith(key + "/"))
      // longest match wins
      .sort((a, b) => b.length - a.length)[0]
  );
}

const Nav = () => {
  const [title, setTitle] = useState("Home");
  const location = useLocation();
  React.useEffect(() => {
    const currentTitleKey = getTitleFromPath(location.pathname, PAGE_TITLES);
    const currentTitle = PAGE_TITLES[currentTitleKey] || "Unknown Page";
    setTitle(currentTitle);
  }, [location.pathname]);
  return (
    <div>
      <h1>Nav : {title}</h1>
    </div>
  );
};

export default Nav;
