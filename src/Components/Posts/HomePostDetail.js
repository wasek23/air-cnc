import React, { useContext } from 'react';
import { SearchContext, CleaningFee, ServiceFee } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faDollarSign } from '@fortawesome/free-solid-svg-icons'

const HomePostDetail = props => {
    const [srcLocation, setSrcLocation, arrivalDate, setArrivalDate, departureDate, setDepartureDate, adultGuest, setAdultGuest, childGuest, setChildGuest, babyGuest, setBabyGuest] = useContext(SearchContext);

    const { thumb, img, title, location, guests, bedrooms, beds, baths, advantage, content, cost, star, reviews } = props.homeData;

    return (
        <article className="singleHome">
            <div className="topImg">
                <img src={thumb} alt={title} />
                <img src={img} alt={title} />
            </div>

            <div className="mainContent container grid grid2">
                <div className="content">
                    <h2>{title}</h2>
                    <p>{location}</p>
                    <p><span>{guests} guests</span> <span>{bedrooms} bedrooms</span> <span>{beds} beds</span> <span>{baths} baths</span></p>

                    <div className="advantage">
                        {Object.entries(advantage).map(data => <ul key={data[0]}>
                            <li><h5>{data[0]}</h5></li>
                            <li>{data[1]}</li>
                        </ul>)}
                    </div>

                    <p>{content}</p>
                </div>

                <div className="card">
                    <h5><FontAwesomeIcon icon={faDollarSign} /> {cost} / night</h5>
                    <p><FontAwesomeIcon icon={faStar} />{star} ({reviews} reviews)</p>

                    <label className="textLight">Guests</label>
                    <div className="border">
                        {guests} guests
                    </div>

                    <div className="cost">
                        <span><FontAwesomeIcon icon={faDollarSign} /> {cost} / 1 night</span>
                        <span>{cost * 1}</span>
                    </div>
                    <div className="cost">
                        <span>Cleaning fee</span>
                        <span>{CleaningFee}</span>
                    </div>
                    <div className="cost">
                        <span>Service fee</span>
                        <span>{ServiceFee}</span>
                    </div>

                    <div className="total">
                        <span>Total</span>
                        <span>{cost + CleaningFee + ServiceFee}</span>
                    </div>

                    <button className="btn">Reserve</button>
                </div>
            </div>
        </article>
    );
};
export default HomePostDetail;