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
import FavoriteElement from './FavoriteElement'
import {Link} from "react-router-dom";



// export function changeVisable() {
//     if (visable === true)
//         visable=false
//     else
//         visable=true
//
//     alert(visable)
// // window.location.reload()
// }
// let visable=true;



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


    componentDidMount = async () => {
        if (!sessionStorage.getItem('userId'))
            window.location.replace('/')
        else {

            const f = await
                fetch("http://localhost:8080/api/user/" + this.props.match.params.nick)
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

            const f3 = await
                fetch("http://localhost:8080/api/movie/all")
                    .then(res => res.json())
                    .then(json => {
                        this.setState({allMovies: json});
                        console.log(json);
                    });

            // console.log(this.state.favorites)
            if (this.state.avatarUrl === '') {
                this.setState({avatarUrl: this.state.defaultAvatarUrl})
            }

            let allFavorites = []
            this.state.favorites.forEach(f => {
                this.state.allMovies.forEach(m => {
                    if (f === m.id) {
                        allFavorites.push(m)
                        // allFavorites.push(<FavoriteElement imgUrl={m.imgUrl}
                        //                                    title={m.title}
                        //                                    description={m.description}     />

                    }
                })
            })
            this.setState({favorites: allFavorites})
            console.log(this.state.favorites)


        }



    }


    exportAllFavorites = () => {
        let allFavorites = []
        if (this.state.favorites.length === 0) {
            allFavorites.push(<FavoriteElement none='yes'/>)

            return allFavorites;
        }

        this.state.favorites.forEach(item => allFavorites.push(<FavoriteElement title={item.titlePl}
                                                                                imgUrl={item.imgUrl}
                                                                                id={item.id}
                                                                                description={item.description}/>))
        return allFavorites;
    }



    // changeVisable = () => {
    //     if (this.state.visableSetting === true)
    //         this.setState({visableSetting: false})
    //     else
    //         this.setState({visableSetting: this})
    // }

    hideDiv = () => {
        if (localStorage.getItem('visable') == 1) {
            // alert(localStorage.getItem('visable'))
            return (

                    <div className="element_Renderowany">xxx</div>

            )
        }
    }

    render() {

        if (sessionStorage.getItem('token'))
            return (<div>
                    <Menu/>
                    <div id="body">

                        <div id="content">
                            <div className="element_Renderowany">
                                <UserInfo
                                    userName={this.state.userName}
                                    email={this.state.email}
                                    avatarUrl={this.state.avatarUrl}
                                />
                            </div>
                            {this.hideDiv()}
                            <div className="element_Renderowany">
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