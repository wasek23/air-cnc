import React, { useContext } from 'react';
import { SearchContext } from '../../App';
import getHomesData from '../../PostData/homesData';
import HomeResultPost from '../Posts/HomeResultPost';

const SearchResult = () => {
    const [location] = useContext(SearchContext);

    const loc = location !== null && location.toLowerCase();

    const homesData = getHomesData.filter(item => item.location.toLowerCase().includes(loc));

    return (
        <div className="searchResultPosts">
            {homesData.map(home => <HomeResultPost homesData={home} key={home.id}></HomeResultPost>)}
        </div>
    );
};

export default SearchResult;