import React from 'react';

const HomePostDetail = props => {
    const { thumb, img, title } = props.homeData;

    return (
        <article className="singleHome">
            <div className="topImg">
                <img src={thumb} alt={title} />
                <img src={img} alt={title} />
                <h3>Hi</h3>
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