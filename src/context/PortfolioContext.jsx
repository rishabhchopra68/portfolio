import { createContext, useState } from "react";
import TodoList from "../images/projects/TodoList.PNG";
import Clock from "../images/projects/Clock.PNG";
import Portfolio from "../images/projects/Portfolio.PNG";
import Quiz from "../images/projects/Quiz.PNG";
import SearchBar from "../images/projects/SearchBar.PNG";

export const PortfolioContext = createContext(null);

const PortfolioContextProvider = ({ children }) => {
  const [projects, setProjects] = useState([
    {
      name: "Quiz",
      image: Quiz,
      projectlink: "https://quiz-app-mu-azure.vercel.app/",
      codelink: "https://github.com/rishabhchopra68/quiz-app",
    },
    {
      name: "To do list",
      image: TodoList,
      projectlink: "https://to-do-list-teal-theta.vercel.app/",
      codelink: "https://github.com/rishabhchopra68/ToDoList",
    },
    {
      name: "Clock",
      image: Clock,
      projectlink: "https://clock-ashen.vercel.app/",
      codelink: "https://github.com/rishabhchopra68/clock/tree/main",
    },
    {
      name: "Search bar",
      image: SearchBar,
      projectlink: "https://search-bar-tan.vercel.app/",
      codelink: "https://github.com/rishabhchopra68/search-bar",
    },
    {
      name: "Portfolio",
      image: Portfolio,
      codelink: "https://github.com/rishabhchopra68/portfolio",
    },
  ]);

  const context = {
    projects,
    setProjects,
  };

  return (
    <PortfolioContext.Provider value={context}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContextProvider;
