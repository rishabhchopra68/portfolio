import "./contact.scss";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";

export default function Contact() {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-card-container">
        <div className="contact-card-heading">{"< Get in touch />"}</div>
        <div className="contact-card-info">
          <EmailIcon fontSize="large" /> {`     rishabhchopra68@gmail.com`}
        </div>
        <div className="contact-card-info">
          <CallIcon fontSize="large" /> +91 8527052703
        </div>
        <div className="contact-card-info">
          <a
            href="https://github.com/rishabhchopra68"
            id="github-link"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon fontSize="large" />
            {"    "}
            Github Profile
          </a>
        </div>
        <div className="contact-card-info">
          <a
            href="https://leetcode.com/rishabh_99/"
            id="leetcode-link"
            target="_blank"
            rel="noreferrer"
          >
            <CodeIcon fontSize="large" />
            Leetcode Profile
          </a>
        </div>
      </div>
    </div>
  );
}
