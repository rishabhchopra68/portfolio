import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import HomeIcon from "@mui/icons-material/Home";
import "./navbar.scss";
import Button from "../Button";

export default function Navbar() {
  return (
    <div className="navbar" id="navbar">
      <div className="navbar-wrapper">
        <div className="left">
          <HashLink to="/#intro">
            <Button>
              <HomeIcon fontSize="large" />
            </Button>
          </HashLink>
        </div>
        <div className="right">
          <HashLink to="/#work">
            <Button>Work</Button>
          </HashLink>
          <HashLink to="/#testimonials">
            <Button>Testimonials</Button>
          </HashLink>
          <HashLink to="/#contact">
            <Button>Contact</Button>
          </HashLink>
        </div>
      </div>
    </div>
  );
}
