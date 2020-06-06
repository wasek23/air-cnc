import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ExperiencePost = props => {
    const { img, city, title, cost, star } = props.experiencesData;

    return (
        <article className="singleExperience">
            <img className="singleImg" src={img} alt="" />
            <h6 className="cityName">{city}</h6>
            <h4>{title}</h4>
            <p className="cost">${cost} per person</p>

            <div className="star">
                <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />{star}
            </div>

        </article>
    );
};

export default ExperiencePost;