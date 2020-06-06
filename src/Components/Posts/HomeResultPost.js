import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faDollarSign } from '@fortawesome/free-solid-svg-icons'

const HomeResultPost = props => {
    const { thumb, permalink, title, guests, bedrooms, beds, baths, cost, reviews, star } = props.homesData;

    console.log(props.homesData);

    return (
        <article className="singleHomeResult grid">
            <img src={thumb} alt={title} />
            <div>
                <h5>{title}</h5>
                <p><span>{guests} guests</span> <span>{bedrooms} bedrooms</span> <span>{beds} beds</span> <span>{baths} baths</span></p>

                <div className="flex">
                    <h6><FontAwesomeIcon icon={faStar} /> {star} ({reviews})</h6>

                    <div>
                        <h5><FontAwesomeIcon icon={faDollarSign} /> {cost} / night</h5>
                        <p className="textMuted"><FontAwesomeIcon icon={faDollarSign} /> {cost * guests} total</p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default HomeResultPost;