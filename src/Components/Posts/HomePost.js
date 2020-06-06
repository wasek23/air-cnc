import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const HomePost = props => {
    const { img, permalink, city, title, cost, star } = props.homesData;

    return (
        <article className="singleHome">
            <Link to={"/home/" + permalink} target="_blank" rel="noreferrer noopener"><img className="singleImg" src={img} alt={title} /></Link>
            <h6 className="cityName">Nightlife - {city}</h6>
            <Link to={"/home/" + permalink} target="_blank" rel="noreferrer noopener"><h4>{title}</h4></Link>
            <p className="cost">${cost} per night</p>

            <div className="star">
                <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />{star}
            </div>
        </article>
    );
};

export default HomePost;