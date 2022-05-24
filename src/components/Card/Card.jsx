import "./card.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaptopIcon from "@mui/icons-material/Laptop";
import { useState } from "react";

const Card = (props) => {
  const { codelink, image, name, projectlink } = props;
  const [imageHover, setImageHover] = useState(true);

  return (
    <div
      className="card-container"
      onMouseEnter={() =>
        setTimeout(function () {
          setImageHover(false);
        }, 800)
      }
      onMouseLeave={() => {
        setTimeout(function () {
          setImageHover(true);
        }, 800);
      }}
    >
      <div className="project-name">{name}</div>
      <div className="project-image-container">
        {imageHover ? (
          <img className="project-image" src={image} alt="Profile" />
        ) : (
          <h2 className="project-image-description">Text about project</h2>
        )}
      </div>
      {projectlink ? (
        <a
          className="project-link"
          href={projectlink}
          rel="noreferrer"
          target="_blank"
        >
          <LaptopIcon fontSize="small" className="project-icon" />
          View Project
        </a>
      ) : null}
      <a className="code-link" href={codelink} target="_blank" rel="noreferrer">
        <GitHubIcon fontSize="small" className="project-icon" />
        Code Repository
      </a>
    </div>
  );
};

export default Card;
