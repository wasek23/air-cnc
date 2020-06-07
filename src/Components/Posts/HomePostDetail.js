import React, { useContext } from 'react';
import { SearchContext } from '../../App';

const HomePostDetail = props => {
    const [location, setLocation, arrivalDate, setArrivalDate, departureDate, setDepartureDate, adultGuest, setAdultGuest, childGuest, setChildGuest, babyGuest, setBabyGuest] = useContext(SearchContext);
    const guests = adultGuest + childGuest;

    const { thumb, img, title } = props.homeData;

    return (
        <article className="singleHome">
            <div className="topImg">
                <img src={thumb} alt={title} />
                <img src={img} alt={title} />
            </div>

            <div className="mainContent grid grid2">
                <div className="content">
                    <h2>{title}</h2>
                </div>
            </div>
        </article>
    );
};
export default HomePostDetail;