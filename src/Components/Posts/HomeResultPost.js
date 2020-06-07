import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { CleaningFee, ServiceFee } from '../../App';

const HomeResultPost = props => {
    const { thumb, permalink, title, guests, bedrooms, beds, baths, cost, reviews, star } = props.homesData;

    return (
        <article className="singleHomeResult grid">
            <Link to={"/home/" + permalink} target="_blank" rel="noreferrer noopener"><img src={thumb} alt={title} /></Link>
            <div>
                <Link to={"/home/" + permalink} target="_blank" rel="noreferrer noopener"><h5>{title}</h5></Link>
                <p className="textLight"><span>{guests} guests</span> <span>{bedrooms} bedrooms</span> <span>{beds} beds</span> <span>{baths} baths</span></p>

                <div className="flex">
                    <h6><FontAwesomeIcon icon={faStar} /> {star} ({reviews})</h6>

                    <div>
                        <h5><FontAwesomeIcon icon={faDollarSign} /> {cost} / night</h5>
                        <p className="textMuted"><FontAwesomeIcon icon={faDollarSign} /> {(cost * guests) + CleaningFee + ServiceFee} total</p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default HomeResultPost;