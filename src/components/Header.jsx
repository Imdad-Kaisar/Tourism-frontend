
import React from "react";
import './Header.css'
import { IoLogoVimeo } from "react-icons/io";

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
                        <a href="" className="menu__link">Services</a>
                    </li>
                    <li className="menu__item">
                        <a href="" className="menu__link">Package</a>
                    </li>
                </ul>
            </nav>
            <button className="button" type="button">Sign In</button>
        </div>
        </header>
    )
}
export default Header;