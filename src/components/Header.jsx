
import React from "react";
import './Header.css';
import { IoLogoVimeo } from "react-icons/io";
import { Link } from "react-router-dom";

function Header() {
    return(
        <header className={"header"}>
        <div className="header_container">
            <a href="" className="header__logo">
                <IoLogoVimeo className="header_svg"/>
                 Vista
            </a>
            <nav className="header__menu menu">
                <ul className="menu__list">
                    <li className="menu__item">
                        <a href="" className="menu__link">Home</a>
                    </li>
                    <li className="menu__item">
                        <a href="" className="menu__link">About</a>
                    </li>
                    <li className="menu__item">
                        <a href="" className="menu__link">
                            <Link to="/services">Services </Link></a>
                    </li>
                    <li className="menu__item">
                        <a href="" className="menu__link">Package</a>
                    </li>
                </ul>
            </nav>
            <div className="button_container">
            <Link to="/register" >
            <button className="button" type="button">Sign In</button>
            </Link>
            <Link to="/login"> {/* Add Link with appropriate path */}
            <button className="button">Log In</button>  {/* No type attribute needed */}
            </Link>
            </div>
            
        </div>
        </header>
    )
}
export default Header;