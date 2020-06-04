import React from 'react';
import { Link } from 'react-router-dom';

const Showcase = () => {
    return (
        <div className="showcase">
            <div className="showcaseExperience grid4">
                <div className="showcaseTop">
                    <h2>Experience</h2>
                    <Link to="/">See all &gt;</Link>
                </div>

                <div className="grid grid4">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                </div>

            </div>
            <div className="showcaseHome grid3">
                <div className="showcaseTop">
                    <h2>Homes</h2>
                    <Link to="/">See all &gt;</Link>
                </div>

                <div className="grid grid3">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </div>
            </div>
        </div>
    );
};

export default Showcase;