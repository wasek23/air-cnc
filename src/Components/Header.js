import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SearchContext } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [location, arrivalDate, departureDate, adultGuest, childGuest] = useContext(SearchContext);

    const searchQuery = { location, arrivalDate, departureDate, guests: adultGuest + childGuest }

    return (
        <header>
            {/* Navbar */}
            <nav className="navbar">
                <div className="container">
                    <Link to="/" className="logo"><span className="primaryColor">Aircnc</span></Link>

                    <input type="checkbox" className="navbarCheckbox" id="navToggle" />
                    <label htmlFor="navToggle" className="navbarButton"><span className="navbarIcons">&nbsp;</span></label>

                    <ul className="navbarMenu">
                        {(searchQuery.location && searchQuery.arrivalDate && searchQuery.departureDate && searchQuery.guests) ? <div className="card">
                            <span>{location}</span> | <span>{arrivalDate} - {departureDate}</span> | <span>{searchQuery.guests} guests</span> <FontAwesomeIcon icon={faSearch} />
                        </div> : <>
                                <li><NavLink exact activeClassName='active' to="/">Host your home</NavLink></li>

                                <li><NavLink exact to="/experience">Host your experience</NavLink></li>
                            </>}


                        <li><NavLink exact to="/help">Help</NavLink></li>

                        <li><Link to="/sign" className="btn btn-radius">Login/Sign up</Link></li>
                    </ul> {/* Navbar Menu */}
                </div> {/* Container */}
            </nav> {/* Navbar */}
        </header>
    );
};

export default Header;