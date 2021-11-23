import React, { useEffect, useState } from 'react';
import Logo from './logo.png';
import './navbar.css';

const Navbar = () => {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

    return (
        <div className={`nav__container ${show && "nav__black"}`}>
            <img
                src={Logo}
                alt="Netflix-Logo"
                className="nav__logo" />
        </div>
    )
}

export default Navbar;
