import React from 'react';
import SearchTerms from '../Sections/SearchTerms';
import Showcase from '../Sections/Showcase';
import SearchResult from '../Sections/SearchResult';

const Home = () => {
    return (
        <>
            <main>
                <section className="mainSection">
                    <div className="container grid">
                        <SearchTerms></SearchTerms>
                        <Showcase></Showcase>
                    </div>
                </section>

                <section className="searchResultSection">
                    <div className="container grid grid2">
                        <SearchResult></SearchResult>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;