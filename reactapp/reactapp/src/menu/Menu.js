import React from 'react';
import './css/Menu.css'
import {userRole} from '../App'


class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }


    render() {
        if (userRole === 'user') {
            return (
                <div id="menuBar">
                    <ul>
                        <li class="home"><a href="#home">.</a></li>
                        <li><a href="#news">Profil</a></li>
                        <li><a href="#contact">Filmy</a></li>
                        <li><a href="#about">O Nas</a></li>
                    </ul>

                    <form>
                        <input type="text" name="search" placeholder="Szukaj film"/>
                        <input type="submit" value="Szukaj"></input>
                    </form>

                    <ul>
                        <li><a href="#home">Wyloguj się</a></li>
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
