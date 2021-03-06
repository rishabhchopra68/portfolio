import "./intro.scss";
import ProfilePic2 from "../../images/ProfilePicture2.jpg";

export default function Intro() {
  return (
    <div className="intro-container" id="intro">
      <div className="profile-pic-container">
        <img id="profile-pic" src={ProfilePic2} alt="Profile" />
      </div>
      <div className="intro-heading-container">
        <p id="intro-heading">"Frontend Web Developer"</p>
        <div className="about-text">
          I'm a frontend web developer well versed with Javascript fundamentals.
          I use ReactJS to build applications.
        </div>
      </div>
    </div>
  );
}
