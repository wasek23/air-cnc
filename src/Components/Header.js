import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SearchContext } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [srcLocation, setSrcLocation, arrivalDate, setArrivalDate, departureDate, setDepartureDate, adultGuest, setAdultGuest, childGuest, setChildGuest, babyGuest, setBabyGuest] = useContext(SearchContext);
    const guests = adultGuest + childGuest;

    const searchHandle = () => {
        document.querySelector('section.mainSection').style.display = 'block';
        document.querySelector('section.searchResultSection').style.display = 'none';
    }

    return (
        <header>
            {/* Navbar */}
            <nav className="navbar">
                <div className="container">
                    <Link to="/" className="logo"><span className="primaryColor">Aircnc</span></Link>

                    <input type="checkbox" className="navbarCheckbox" id="navToggle" />
                    <label htmlFor="navToggle" className="navbarButton"><span className="navbarIcons">&nbsp;</span></label>

                    <ul className="navbarMenu">
                        {(srcLocation && arrivalDate && departureDate && guests) ? <div className="card">
                            <span>{srcLocation}</span> <span className="date">{arrivalDate} - {departureDate}</span> <span>{guests} guests</span> <span onClick={searchHandle}><FontAwesomeIcon icon={faSearch} /></span>
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