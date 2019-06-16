import React from 'react';
import './css/Menu.css'
import {apiHostUrl} from "../App";
import {Link} from "react-router-dom";


class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            url: 'https://img.icons8.com/metro/420/home.png',
            defaultUrl: "http://localhost:3000/"

        };
    }

    componentDidMount = async () => {
        this.setState({userRole: sessionStorage.getItem('role')});

    }

    zaloguj= () => {
        window.location.replace(this.state.defaultUrl);
        //todo sprawdzenie czy jest zalogowany jesli tak to do domyslnej dla jego roli
    }
    oNas= () => {
        window.location.replace(this.state.defaultUrl+'aboutUs');

    }
    filmy= () => {
        window.location.replace(this.state.defaultUrl+'movies/all');

    }


    // ZALOGOWANY
    wyloguj = () => {
        window.location.replace(this.state.defaultUrl);
        sessionStorage.clear();
    }
    doProfilu= () => {
        window.location.replace(this.state.defaultUrl+'loggedUser/'+sessionStorage.getItem('userId'));

    }
    // ADMIN
    adminZarzadzanie= () => {
        window.location.replace(this.state.defaultUrl+'adminPage/'+sessionStorage.getItem('userId'));

    }




    render() {
        if (this.state.userRole === null) {
            return (
                <div id="menuBar">
                    <ul>
                        <li class="home">
                            <Link onClick={this.zaloguj}>  <img src={this.state.url} height="20" width="30" alt="Avatar"/> </Link>
                        </li>
                        <li>
                            <Link onClick={this.filmy}>Filmy</Link>
                        </li>
                        <li>
                            <Link onClick={this.oNas}>O Nas</Link>  </li>
                        <li>
                            <Link onClick={this.zaloguj}>Zaloguj się</Link>
                        </li>


                        <form><input type="text" name="search" placeholder="Szukaj film"/> <input type="submit"
                                                                                                  value="Szukaj"></input>
                        </form>
                    </ul>


                </div>
            )
        } else if (this.state.userRole === 'ROLE_NORMAL') {
            return (
                <div id="menuBar">
                    <ul>
                        <li className="home">
                            <Link onClick={this.doProfilu}>  <img src={this.state.url} height="20" width="30" alt="Avatar"/> </Link>
                        </li>
                        <li>
                            <Link onClick={this.doProfilu}>Profil</Link></li>
                        <li>
                            <Link onClick={this.filmy}>Filmy</Link> </li>
                        <li>
                            <Link onClick={this.oNas}>O Nas</Link>  </li>
                        <li>
                            <Link onClick={this.wyloguj}>Wyloguj się</Link></li>
                        <form><input type="text" name="search" placeholder="Szukaj film"/> <input type="submit"
                                                                                                  value="Szukaj"></input>
                        </form>
                    </ul>


                </div>
            )
        } else if (this.state.userRole === 'ROLE_ADMIN') {
            return (
                <div id="menuBar">
                    <ul>
                        <li className="home">
                            <Link onClick={this.doProfilu}>  <img src={this.state.url} height="20" width="30" alt="Avatar"/> </Link>
                        </li>
                        <li>
                            <Link onClick={this.doProfilu}>Profil</Link></li>
                        <li>
                            <Link onClick={this.filmy}>Filmy</Link> </li>
                        <li>
                            <Link onClick={this.oNas}>O Nas</Link>  </li>


                        <li>
                            <Link onClick={this.adminZarzadzanie}>Zarządzanie</Link>
                        </li>


                        <li>
                            <Link onClick={this.wyloguj}>Wyloguj się</Link> </li>
                        <form><input type="text" name="search" placeholder="Szukaj film"/> <input type="submit"
                                                                                                  value="Szukaj"></input>
                        </form>
                    </ul>

                </div>
            )
        } else {
            return (
<div></div>
            )
        }


    }
}

export default Menu;
