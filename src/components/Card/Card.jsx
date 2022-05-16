import "./card.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaptopIcon from "@mui/icons-material/Laptop";

const Card = (props) => {
  const { codelink, image, name, projectlink } = props;

  return (
    <div className="card-container">
      <div className="project-name">{name}</div>
      <img className="project-image" src={image} alt="Profile" />
      <a
        className="project-link"
        href={projectlink}
        rel="noreferrer"
        target="_blank"
      >
        <LaptopIcon fontSize="small" className="project-icon" />
        View Project
      </a>
      <a className="code-link" href={codelink} target="_blank" rel="noreferrer">
        <GitHubIcon fontSize="small" className="project-icon" />
        Code Repository
      </a>
    </div>
  );
};

export default Card;
