import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Link} from "react-router-dom";

import MovieFullPage from './movie/MovieFullPage'
import UserFullPage from './user/UserFullPage'
import Logowanie from './logowanieRejestracja/Logowanie'


export let userRole = 'user';
export let userId = 1;

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {};
    // }


    render() {
        return (
            <Router>
                <Switch>

                        <Route exact path='/' component={Logowanie}/>
                        <Route exact path='/loggedUser/:nick' component={UserFullPage}/>
                        {/*<Route component={NotFound} /> */}

                </Switch>
                {/*<div>*/}
                {/*    */}
                {/*    /!*<UserFullPage/>*!/*/}
                {/*    /!*<MovieFullPage/>*!/*/}
                {/*</div>*/}
            </Router>
        );
    }
}

export default App;
