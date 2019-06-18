import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Link} from "react-router-dom";

import MovieFullPage from './movie/MovieFullPage'
import UserFullPage from './user/UserFullPage'
import Logowanie from './logowanieRejestracja/Logowanie'
import AboutUs from './aboutUs/AboutUs'
import AllMoviesPage from './movie/AllMoviesPage'
import FullAdminPage from './user/admin/FullAdminPage'
import AddNewMovie from './user/admin/AddNewMovie'
import EditMovie from './user/admin/EditMovie'
import EditUsers from './user/admin/EditUsers'
// import DodajRecenzje from './user/admin/DodajRecenzje'


export let apiHostUrl = 'http://localhost:8080'

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
                    <Route exact path='/adminPage/:nick/addMovie' component={AddNewMovie}/>
                    <Route exact path='/adminPage/:nick/editMovie' component={EditMovie}/>
                    <Route exact path='/adminPage/:nick/users' component={EditUsers}/>
                    {/*<Route exact path='/adminPage/:nick/dodajRecenzje' component={DodajRecenzje}/>*/}

                    <Route exact path='/adminPage/:nick' component={FullAdminPage}/>

                    <Route exact path='/movie/:movieId' component={MovieFullPage}/>
                    <Route exact path='/movies/all' component={AllMoviesPage}/>
                    <Route exact path='/aboutUs' component={AboutUs}/>

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
