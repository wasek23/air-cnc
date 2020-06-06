import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const HomePost = props => {
    const { img, city, title, cost, star } = props.homesData;

    return (
        <article className="singleHome">
            <img className="singleImg" src={img} alt="" />
            <h6 className="cityName">Nightlife - {city}</h6>
            <h4>{title}</h4>
            <p className="cost">${cost} per night</p>

            <div className="star">
                <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />{star}
            </div>
        </article>
    );
};

export default HomePost;