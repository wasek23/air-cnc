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

    return (
        <div>
            <div className="searchResultTop">
                <p>{homesData.length} stays | {arrivalDate} - {departureDate} | {guests} guests</p>
                <h3>Stay in {srcLocation}</h3>
            </div>

            <div className="searchResultPosts">
                {homesData.map(home => <HomeResultPost homesData={home} key={home.id}></HomeResultPost>)}
            </div>
        </div>

    );
};

export default SearchResult;