import React from 'react';
import '../css/MainCss.css'
import './css/UserFullPage.css'
import './css/Favorites.css'
import UserInfo from './UserInfo'
import UserFavorites from './Favorites'
import Stopka from '../stopka/Stopka'
import Menu from '../menu/Menu'
import axios from 'axios'
import Comment from "../comment/Comment";
import {delay} from "q";
import {apiHostUrl} from '../App'


class UserFullPage extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            userName: '',
            email: '',
            avatarUrl: '',
            defaultAvatarUrl: 'https://cdn.pixabay.com/photo/2013/07/13/13/40/avatar-161325_960_720.png',
            favorites: []


        };
    }

    componentDidMount =  async () => {
        if (!sessionStorage.getItem('userId'))
            window.location.replace('/')
        else {
            const f = await
                fetch("http://localhost:8080/api/user/1")
                    .then(res => res.json())
                    .then(json => {
                        this.setState({userName: json.name});
                        this.setState({email: json.email});
                    });
            const f2 = await
                fetch("http://localhost:8080/api/user/favorites/" + sessionStorage.getItem('userId'))
                    .then(res => res.json())
                    .then(json => {

                        this.setState({favorites: json});

                        console.log(this.state.favorites)


                    });

            console.log(this.state.favorites)
            if (this.state.avatarUrl === '') {
                this.setState({avatarUrl: this.state.defaultAvatarUrl})
            }

        }

    }

    // exportAllFavorites = () => {
    //     let allFavorites = []
    //
    //
    //
    //     for (let i = 0; i < this.state.favorites.length; i++) {
    //         let movie = this.state.favorites.pop()
    //         if (movie != null)
    //             allFavorites.push(<UserFavorites id={movie}/>)
    //     }
    //     return allFavorites;
    // }
    exportAllFavorites = () => {
        let allFavorites = []
        this.state.favorites.forEach(item => allFavorites.push(<UserFavorites id={item}/>))

        return allFavorites;
    }

    render() {

        if (sessionStorage.getItem('token'))
            return (<div>
                    <Menu/>
                    <div id="body">

                        <div id="content">
                            <div className="element_nieparzysty">
                                <UserInfo
                                    userName={this.state.userName}
                                    email={this.state.email}
                                    avatarUrl={this.state.avatarUrl}
                                />
                            </div>
                            <div className="element_parzysty">
                                <h2>Twoje ulubione filmy</h2>
                                {this.exportAllFavorites()}

                            </div>
                            <Stopka/>


                        </div>
                    </div>
                </div>

            );
        else return (<div></div>)
    }
}

export default UserFullPage;