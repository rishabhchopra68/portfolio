import { createContext, useState } from "react";
import TodoList from "../images/projects/TodoList.PNG";
import Clock from "../images/projects/Clock.PNG";
import Portfolio from "../images/projects/Portfolio.PNG";
import Quiz from "../images/projects/Quiz.PNG";
import SearchBar from "../images/projects/SearchBar.PNG";
import Pic1 from "../images/testimonials/Pic1.jpeg";
import Pic2 from "../images/testimonials/Pic2.jpeg";

export const PortfolioContext = createContext(null);

const PortfolioContextProvider = ({ children }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
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

  const [testimonials, setTestimonials] = useState([
    {
      name: "Jayakrishnan Sreedharan",
      image: Pic1,
      text: "I worked with Rishabh in his first ever professional project in TCS. It was one of the toughest projects of my career. But Rishabh, being an incredible quick learner, was able to work independently and take up complex assignments within a couple of weeks. He has excellent communication skills and always asks the right questions at the right time to deliver the best solution. Even though the customer expectations were very tough, with his diligence and dedication, he was able to satisfy them.",
      designation: "Associate Consultant",
      linkedin_profile:
        "https://www.linkedin.com/in/jayakrishnan-sreedharan-b5614519/",
    },
    {
      name: "Murali Krishna Vemulapalli",
      image: Pic2,
      text: "Rishabh is quick learner and simply he can adopt any thing with in the time. We worked together almost 1yr, I know about his skill set and he is very friendly. he can handle any situation calmly and patiently...I know because we worked on the same project",
      designation: "Associate Consultant",
      linkedin_profile:
        "https://www.linkedin.com/in/murali-krishna-vemulapalli-8a238445/",
    },
  ]);

  const context = {
    projects,
    setProjects,
    testimonials,
    setTestimonials,
    activeTestimonial,
    setActiveTestimonial,
  };

  return (
    <PortfolioContext.Provider value={context}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContextProvider;
