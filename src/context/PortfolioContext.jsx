import { createContext, useState } from "react";
import TodoList from "../images/projects/TodoList.PNG";

export const PortfolioContext = createContext(null);

const PortfolioContextProvider = ({ children }) => {
  const [projects, setProjects] = useState([
    {
      name: "To do list",
      image: TodoList,
      projectlink: "https://to-do-list-teal-theta.vercel.app/",
      codelink: "https://github.com/rishabhchopra68/ToDoList",
    },
    {
      name: "Project2",
      image: TodoList,
      projectlink: "https://to-do-list-teal-theta.vercel.app/",
      codelink: "https://github.com/rishabhchopra68/ToDoList",
    },
    {
      name: "Project3",
      image: TodoList,
      projectlink: "https://to-do-list-teal-theta.vercel.app/",
      codelink: "https://github.com/rishabhchopra68/ToDoList",
    },
    {
      name: "Todo list",
      image: TodoList,
      projectlink: "https://to-do-list-teal-theta.vercel.app/",
      codelink: "https://github.com/rishabhchopra68/ToDoList",
    },
    {
      name: "Todo list",
      image: TodoList,
      projectlink: "https://to-do-list-teal-theta.vercel.app/",
      codelink: "https://github.com/rishabhchopra68/ToDoList",
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
