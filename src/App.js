import React, { useState, createContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './Components/Header';
import Home from './Components/Pages/Home';
import HomePostDetail from './Components/Posts/HomePostDetail';
import HostExperience from './Components/Pages/HostExperience';
import Help from './Components/Pages/Help';
import SignUpIn from './Components/Pages/SignUpIn';

import homesData from './PostData/homesData';

export const WebsiteName = "Power X";
export const WebsiteSlogan = "Gym Website";
export const CleaningFee = 10;
export const ServiceFee = 20;
export const SearchContext = createContext();

function App() {
    const [srcLocation, setSrcLocation] = useState(null);

    const [arrivalDate, setArrivalDate] = useState(null);
    const [departureDate, setDepartureDate] = useState(null);

    const [adultGuest, setAdultGuest] = useState(0);
    const [childGuest, setChildGuest] = useState(0);
    const [babyGuest, setBabyGuest] = useState(0);

    const homeDetail = homesData.filter(singleHome => "/home/" + singleHome.permalink === window.location.pathname);

    return (
        <SearchContext.Provider value={[srcLocation, setSrcLocation, arrivalDate, setArrivalDate, departureDate, setDepartureDate, adultGuest, setAdultGuest, childGuest, setChildGuest, babyGuest, setBabyGuest]}>
            <Router>
                <Header></Header>

                <Switch>
                    <Route path="/experience">
                        <HostExperience></HostExperience>
                    </Route>

                    <Route path="/help">
                        <Help></Help>
                    </Route>

                    <Route path="/sign">
                        <SignUpIn></SignUpIn>
                    </Route>

                    {homesData.length !== 0 && <Route path="/home/*">
                        {homeDetail.map(singleHome => <HomePostDetail homeData={singleHome} key={singleHome.id}></HomePostDetail>)}
                    </Route>}

                    <Route path="/">
                        <Home></Home>
                    </Route>

                    {/* <Route path="/*">
                        <NoMatch></NoMatch>
                    </Route> */}
                </Switch>
            </Router>
        </SearchContext.Provider>
    );
}

export default App;
