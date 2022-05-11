import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import "./navbar.scss";
import Button from "../Button";


export default function Navbar() {
  return (
    <div 
      className="navbar"
      id="navbar"
    >
        <div className="navbar-wrapper">
          <div className="left">
          <HashLink to="/#intro">
              <Button>Home</Button>
          </HashLink>
          </div>
          <div className="right">
            <HashLink to="/#about">
              <Button>About</Button>
            </HashLink>
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
  )
}
