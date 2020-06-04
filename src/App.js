import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './Components/Header';
import Home from './Components/Pages/Home';
import HostExperience from './Components/Pages/HostExperience';
import Help from './Components/Pages/Help';
import SignUpIn from './Components/Pages/SignUpIn';

export const WebsiteName = "Power X";
export const WebsiteSlogan = "Gym Website";

function App() {
    return (
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
    );
}

export default App;
