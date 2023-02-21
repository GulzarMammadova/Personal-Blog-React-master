// import {useState} from 'react'
import '../App.css';
import { Link } from "react-router-dom"

export function Header() {
  // const [isHover, setIsHover] = useState(false)

  // const active = () => {
  //   setIsHover(true)
    
  // }
  // const deactive = () => {
  //   setIsHover(false)
  // }

  return (
    <>
    <div className="header">
     <div className="nav-menu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/journey">Journey</Link></li>
        <li><Link to="/Blog">Blog</Link></li>
      </ul>
      </div>
    </div>
    
    </>
  );
}


