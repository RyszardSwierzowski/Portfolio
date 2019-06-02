import React from 'react';
import './css/Menu.css'
import {userRole} from '../App'


class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            url: 'https://img.icons8.com/metro/420/home.png'
        };
    }


    render() {
        if (userRole === 'user') {
            return (
                <div id="menuBar">
                    <ul>
                        <li class="home"><a href="#home"><img src={this.state.url} height="20" width="30" alt="Avatar"/></a>
                        </li>
                        <li><a href="#news">Profil</a></li>
                        <li><a href="#contact">Filmy</a></li>
                        <li><a href="#about">O Nas</a></li>
                        <li><a href="#home">Wyloguj się</a></li>
                        <form><input type="text" name="search" placeholder="Szukaj film"/> <input type="submit"
                                                                                                  value="Szukaj"></input>
                        </form>
                    </ul>


                </div>
            )
        } else if (userRole === 'admin') {
            return (
                <div id="menuBar">
                    admin
                </div>
            )
        } else if (userRole === 'recenzent') {
            return (
                <div id="menuBar">
                    admin
                </div>
            )
        } else {
            return (
                <div id="menuBar">
                    null
                </div>
            )
        }


    }
}

export default Menu;
