import React, { useContext } from 'react';
import { SearchContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchTerms = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();
    if (dd < 10) { dd = '0' + dd }
    if (mm < 10) { mm = '0' + mm }
    today = yyyy + '-' + mm + '-' + dd;

    const [srcLocation, setSrcLocation, arrivalDate, setArrivalDate, departureDate, setDepartureDate, adultGuest, setAdultGuest, childGuest, setChildGuest, babyGuest, setBabyGuest] = useContext(SearchContext);
    const guests = adultGuest + childGuest;

    const searchSubmit = () => {
        if (srcLocation && arrivalDate && departureDate && guests) {
            document.querySelector('section.mainSection').style.display = 'none';
            document.querySelector('section.searchResultSection').style.display = 'block';
        } else {
            alert('Fill all requirement');
        }
    }

    return (
        <div className="searchTerms">
            <h3>Where do you want to go</h3>

            <div className="searchLocation">
                <div className="card">
                    <label htmlFor="location"><h4>Location</h4></label>
                    <input type="text" name="location" id="location" placeholder="Add ciy, Landmark or address" onChange={e => setSrcLocation(e.target.value)} />
                </div> {/* Card */}
            </div> {/* Search Location */}

            <div className="searchDate">
                <div className="card">
                    <label className="textMuted" htmlFor="arrivalDate">Arrival</label>
                    <input type="date" name="arrivalDate" id="arrivalDate" onChange={e => setArrivalDate(e.target.value)} min={today} />
                </div> {/* Card */}
                <div className="card">
                    <label className="textMuted" htmlFor="departureDate">Departure</label>
                    <input type="date" name="departureDate" id="departureDate" onChange={e => setDepartureDate(e.target.value)} min={arrivalDate} />
                </div> {/* Card */}
            </div> {/* Search Date */}

            <div className="searchGuests">
                <div className="card">
                    <div className="searchGuestsTop">
                        <p className="textMuted">Guests</p>
                        <h4>{adultGuest} Adults, {childGuest} Child</h4>
                    </div> {/* Search Guests Top */}

                    <div className="searchGuestsType">
                        <div className="adults">
                            <div>
                                <h4>Adults</h4>
                            </div>

                            <h4>
                                <button onClick={() => setAdultGuest(adultGuest !== 0 ? adultGuest - 1 : 0)}>-</button>
                                {adultGuest}
                                <button onClick={() => setAdultGuest(adultGuest + 1)}>+</button>
                            </h4>
                        </div> {/* Adults */}

                        <div className="child">
                            <div>
                                <h4>Child</h4>
                                <p className="textMuted">Age 2-12</p>
                            </div>

                            <h4>
                                <button onClick={() => setChildGuest(childGuest !== 0 ? childGuest - 1 : 0)}>-</button>
                                {childGuest}
                                <button onClick={() => setChildGuest(childGuest + 1)}>+</button>
                            </h4>
                        </div> {/* Child */}

                        <div className="babies">
                            <div>
                                <h4>Babies</h4>
                                <p className="textMuted">Younger than 2</p>
                            </div>

                            <h4>
                                <button onClick={() => setBabyGuest(babyGuest !== 0 ? babyGuest - 1 : 0)}>-</button>
                                {babyGuest}
                                <button onClick={() => setBabyGuest(babyGuest + 1)}>+</button>
                            </h4>
                        </div> {/* Babies */}
                    </div> {/* Search Guests Type */}
                </div> {/* Card */}
            </div> {/* SearchGuests */}

            <button className="btn" type="submit" onClick={searchSubmit}><FontAwesomeIcon icon={faSearch} /> Search</button>
        </div> // Search Terms
    );
};

export default SearchTerms;