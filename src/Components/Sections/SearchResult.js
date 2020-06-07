import React, { useContext } from 'react';
import { SearchContext } from '../../App';
import getHomesData from '../../PostData/homesData';
import HomeResultPost from '../Posts/HomeResultPost';

const SearchResult = () => {
    const [srcLocation, setSrcLocation, arrivalDate, setArrivalDate, departureDate, setDepartureDate, adultGuest, setAdultGuest, childGuest, setChildGuest, babyGuest, setBabyGuest] = useContext(SearchContext);
    const guests = adultGuest + childGuest;
    const loc = srcLocation !== null && srcLocation.toLowerCase();

    const filterLocation = getHomesData.filter(item => item.location.toLowerCase().includes(loc));
    const homesData = filterLocation.filter(item => item.guests === guests);

    const searchHandle = () => {
        document.querySelector('section.mainSection').style.display = 'block';
        document.querySelector('section.searchResultSection').style.display = 'none';
    }

    return (
        <div>
            <div className="searchResultTop">
                <p>{homesData.length} stays | {arrivalDate} - {departureDate} | {guests} guests</p>
                <h3>Stay in {srcLocation}</h3>
            </div>

            <div className="searchResultPosts">
                {homesData.length !== 0 ? homesData.map(home => <HomeResultPost homesData={home} key={home.id}></HomeResultPost>) :
                    <>
                        <h1 style={{ marginBottom: "20px" }}>No Result found <button className="btn btn-radius" onClick={searchHandle}>Search Again</button></h1>
                        <h2 style={{ marginBottom: "15px" }}>Or, Search by, location, guests respectively Glenelg, 2 | Crafers, 4 | Flagstaff, 4 | Stirling, 7 | Adelaide, 4</h2>
                        <h3>Because, Our data is poor</h3>
                    </>
                }
            </div>
        </div>

    );
};

export default SearchResult;