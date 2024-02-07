import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from 'react-router-dom'
import BurgerMenu from "./BurgerMenu/BurgerMenu";

import './styles.scss';


const Navbar = () => {
    const navbarMobileRef = useRef();
    const burgerMenuRef = useRef();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    let currentPage = useLocation().pathname;

    const toggleNavbarVisibility = () => {
        navbarMobileRef.current.classList.toggle("isVisible");
        burgerMenuRef.current.classList.toggle("isOpen");
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <nav className="navbar">
            <ul className="navbarDesktop">
                <li className={currentPage === '/' ? "isCurrentPage" : ""}><Link to="/">Home</Link></li>
                <li className={currentPage === '/projects' ? "isCurrentPage" : ""}><Link to="/projects">Projects</Link></li>
                <li className={currentPage === '/team' ? "isCurrentPage" : ""}><Link to="/team">Team</Link></li>
            </ul>
            {/* <BurgerMenu />
            <ul className="navbarMobile" ref={navbarMobileRef}>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
            </ul> */}
        </nav>
    )
}

export default Navbar