import React from 'react';
import SearchTerms from '../Sections/SearchTerms';
import Showcase from '../Sections/Showcase';

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
            </main>
        </>
    );
};

export default Home;