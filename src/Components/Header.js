import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            {/* Navbar */}
            <nav className="navbar">
                <div className="container">
                    <Link to="/" className="logo"><span className="primaryColor">Aircnc</span></Link>

                    <input type="checkbox" className="navbarCheckbox" id="navToggle" />
                    <label htmlFor="navToggle" className="navbarButton"><span className="navbarIcons">&nbsp;</span></label>

                    <ul className="navbarMenu">
                        <li><NavLink exact activeClassName='active' to="/">Host your home</NavLink></li>

                        <li><NavLink exact to="/experience">Host your experience</NavLink></li>

                        <li><NavLink exact to="/help">Help</NavLink></li>

                        <li><Link exact to="/sign" className="btn btn-radius">Login/Sign up</Link></li>
                    </ul> {/* Navbar Menu */}
                </div> {/* Container */}
            </nav> {/* Navbar */}
        </header>
    );
};

export default Header;