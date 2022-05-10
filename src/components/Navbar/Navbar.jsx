import "./navbar.scss";
import { Person } from '@mui/icons-material';

export default function Navbar() {
  return (
    <div 
      className="navbar"
      id="navbar"
    >
        <div className="wrapper">
          <div className="left">
            <a href="#works">Postfolio</a>
            <Person></Person>
          </div>
          <div className="right">
             
          </div>
        </div>
    </div>
  )
}
