import { useContext } from "react";
import "./works.scss";

import Card from "../Card/Card";
import { PortfolioContext } from "./../../context/PortfolioContext";

export default function Works() {
  const { projects } = useContext(PortfolioContext);
  console.log(projects);

  return (
    <div className="work" id="work">
      <h1>Sample Work</h1>
      <div className="works-container">
        {projects.map((project) => (
          <Card
            key={project.name}
            image={project.image}
            name={project.name}
            projectlink={project.projectlink}
            codelink={project.codelink}
          />
        ))}
      </div>
    </div>
  );
}
