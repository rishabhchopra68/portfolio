import { useContext } from "react";
import "./works.scss";

import { PortfolioContext } from "./../../context/PortfolioContext";
import Card from "../Card/Card";

export default function Works() {
  const { projects } = useContext(PortfolioContext);

  return (
    <div className="work" id="work">
      <div className="works-heading">Sample Work</div>
      <div className="works-container">
        {projects.map((project) => (
          <Card
            codelink={project.codelink}
            image={project.image}
            key={project.name}
            name={project.name}
            projectlink={project.projectlink}
          />
        ))}
      </div>
    </div>
  );
}
