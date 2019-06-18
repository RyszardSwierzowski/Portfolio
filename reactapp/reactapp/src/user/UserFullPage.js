import React from 'react';
import '../css/MainCss.css'
import './css/UserFullPage.css'
import './css/Favorites.css'
import UserInfo from './UserInfo'
import Stopka from '../stopka/Stopka'
import Menu from '../menu/Menu'
import FavoriteElement from './FavoriteElement'
import {Link} from "react-router-dom";

import defaultAvatar from '../img/avatar-DEFAULT.png'

import avatar1 from '../img/avatar-baby-head-with-a-small-heart-outline.png'
import avatar2 from '../img/avatar-cow-face-front.png'
import avatar3 from '../img/avatar-fighter-mask.png'
import avatar4 from '../img/avatar-joker-face.png'
import avatar5 from '../img/avatar-princes.png'
import avatar6 from '../img/avatar-male-hair-of-head-and-face-shapes.png'

import leftArrow from '../img/left-arrow.png'
import rightArrow from '../img/right-arrow.png'


class UserFullPage extends React.Component {
    constructor(props) {
        super(props);

        this.bindowanieFormularza = this.bindowanieFormularza.bind(this);

        this.state = {


            userName: '',
            email: '',

            avatarUrl: '',
            avatarNumber:0,
            defaultAvatarUrl: defaultAvatar,

            favorites: [],

            avatarsSet: [],

            oldPassword: '',
            newPassword: '',

            newPassword2: '',
            newEmail: '',
            newEmail2: ''


        };
    }

    bindowanieFormularza(event) {

        const target = event.target;
        const value = target.value;

        const state = {...this.state}

        state[target.name] = value;


        this.setState(state);
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
                        this.setState({avatarNumber: json.avatarUrl});
                        // console.log('avatar nbr:  '+json.avatarUrl)
                        if (json.avatarUrl === '0')
                            this.setState({avatarUrl: defaultAvatar})
                        else if (json.avatarUrl === '1')
                            this.setState({avatarUrl: avatar1})
                        else if (json.avatarUrl === '2')
                            this.setState({avatarUrl: avatar2})
                        else if (json.avatarUrl === '3')
                            this.setState({avatarUrl: avatar3})
                        else if (json.avatarUrl === '4')
                            this.setState({avatarUrl: avatar4})
                        else if (json.avatarUrl === '5')
                            this.setState({avatarUrl: avatar5})
                        else if (json.avatarUrl === '6')
                            this.setState({avatarUrl: avatar6})

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
            // console.log(this.state.favorites)

            this.initAvatarSet();
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

    initAvatarSet = () => {
        let tab = [];
        tab.push({avatar1});
        tab.push(avatar2);
        tab.push(avatar3);
        tab.push(avatar4);
        tab.push(avatar5);
        tab.push(avatar6);
        tab.push(defaultAvatar)
        this.setState({avatarsSet: tab})

    }

    changePassword = () => {
        alert(this.state.oldPassword + "\n " +
            this.state.newPassword + "\n " +
            this.state.newPassword2 + "\n ")
    }
    changeEmail = () => {
        alert(this.state.newEmail + "\n " +
            this.state.newEmail2 + "\n ")
    }
    changeAvatar = () => {
        alert(this.state.oldPassword + "\n " +
            this.state.newPassword + "\n " +
            this.state.newPassword2 + "\n ")
    }


    avatarPane = () => {
        let avatarNumber = this.state.avatarNumber;
        let currentAvatar
        if (avatarNumber == 1)
            currentAvatar = avatar1 ;
        else if (avatarNumber == 2)
            currentAvatar = avatar2 ;
        else if (avatarNumber == 3)
            currentAvatar = avatar3 ;
        else if (avatarNumber == 4)
            currentAvatar = avatar4 ;
        else if (avatarNumber == 5)
            currentAvatar = avatar5 ;
        else if (avatarNumber == 6)
            currentAvatar = avatar6 ;
        else currentAvatar = defaultAvatar ;


            return (
                <div>
                    <Link class="noneDecorationLink" onClick={this.avatarPrev} >  <img src={leftArrow} width="40px" height="40px"/> </Link>
                    <img src={currentAvatar} />
                    <Link class="noneDecorationLink"  onClick={this.avatarNext}>  <img src={rightArrow} width="40px" height="40px"/>    </Link>
                </div>
            )


    }

    avatarNext =()=> {
        let value = Number(this.state.avatarNumber)
        // console.log('poczatkowo : '+value)
        value=value+1
        // console.log('koncowo : '+value)
        this.state.avatarNumber = value%7
        return value;
    }


    avatarPrev =()=> {
        let value = Number(this.state.avatarNumber)
        // console.log('poczatkowo : '+value)
        value=value+6
        // console.log('koncowo : '+value)
        this.state.avatarNumber = value%7
        return value;
    }


    hideDiv = () => {
        if (localStorage.getItem('visable') == 1) {
            // alert(localStorage.getItem('visable'))
            return (

                <div className="element_Renderowany">
                    <div id="centerSettings">
                        <div className="floatLeft settingsSize">
                            <h5>Zmień hasło</h5>
                            <form className="formSettings" onSubmit={this.changePassword}>
                                <input className="formSettingsItem" type="password" name="oldPassword" required="true"
                                       placeholder="Stare hasło" onChange={this.bindowanieFormularza}/>
                                <input className="formSettingsItem"
                                       type="password"
                                       name="newPassword"
                                       required="true"
                                       placeholder="Podaj nowe hasło"
                                       onChange={this.bindowanieFormularza}
                                minLength="4"/>
                                <input className="formSettingsItem" type="password" name="newPassword2" required="true"
                                       placeholder="Powtórz nowe hasło" onChange={this.bindowanieFormularza}/>
                                <input className="formSettingsItem" type="submit" value="Zmień"/>
                            </form>
                        </div>

                        <div className="floatLeft settingsSize">
                            <h5>Zmień adres email</h5>
                            <form className="formSettings" onSubmit={this.changeEmail}>
                                <input className="formSettingsItem" type="email" name="newEmail" required="true"
                                       placeholder="Podaj nowe hasło" onChange={this.bindowanieFormularza}/>
                                <input className="formSettingsItem" type="email" name="newEmail2" required="true"
                                       placeholder="Podaj nowe hasło" onChange={this.bindowanieFormularza}/>

                                <input className="formSettingsItem" type="submit" value="Zmień"/>
                            </form>
                        </div>

                        <div className="floatLeft settingsSize">

                            <h5>Wybierz nowy avatar</h5>
                            <div>
                                {this.avatarPane()}
                            </div>

                        </div>
                        <div className="clearBoth"></div>
                    </div>
                </div>

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