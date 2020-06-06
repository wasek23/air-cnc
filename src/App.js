import React, { useState, createContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './Components/Header';
import Home from './Components/Pages/Home';
import HostExperience from './Components/Pages/HostExperience';
import Help from './Components/Pages/Help';
import SignUpIn from './Components/Pages/SignUpIn';

export const WebsiteName = "Power X";
export const WebsiteSlogan = "Gym Website";
export const SearchContext = createContext();

function App() {
    const [location, setLocation] = useState(null);

    const [arrivalDate, setArrivalDate] = useState(null);
    const [departureDate, setDepartureDate] = useState(null);

    const [adultGuest, setAdultGuest] = useState(0);
    const [childGuest, setChildGuest] = useState(0);
    const [babyGuest, setBabyGuest] = useState(0);

    return (
        <SearchContext.Provider value={[location, setLocation, arrivalDate, setArrivalDate, departureDate, setDepartureDate, adultGuest, setAdultGuest, childGuest, setChildGuest, babyGuest, setBabyGuest]}>
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
