import React from 'react';
import { Link } from 'react-router-dom';
import ExperiencePost from '../Posts/ExperiencePost';
import HomePost from '../Posts/HomePost';

import experiencesData from '../../PostData/experienceData';
import homesData from '../../PostData/homesData';
const Showcase = () => {

    return (
        <div className="showcase">
            <div className="showcaseExperience grid4">
                <div className="showcaseTop">
                    <h2>Experience</h2>
                    <Link to="/">See all &gt;</Link>
                </div>

                {experiencesData.length !== 0 && <div className="experienceWrap grid grid4">
                    {experiencesData.map(singleExperience => <ExperiencePost experiencesData={singleExperience} key={singleExperience.id}></ExperiencePost>)}
                </div>}

            </div>
            <div className="showcaseHome grid3">
                <div className="showcaseTop">
                    <h2>Homes</h2>
                    <Link to="/">See all &gt;</Link>
                </div>

                {homesData.length !== 0 && <div className="grid grid3">
                    {homesData.map(singleHome => <HomePost homesData={singleHome} key={singleHome.id}></HomePost>)}
                </div>
                }

            </div>
        </div>
    );
};

export default Showcase;