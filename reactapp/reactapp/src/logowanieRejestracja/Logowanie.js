import React from 'react';
import {Link} from "react-router-dom";

import './css/Logowanie.css'
import Stopka from '../stopka/Stopka'
import Menu from '../menu/Menu'
import axios from 'axios';
import { CookiesProvider } from 'react-cookie';


class Logowanie extends React.Component {
    constructor(props) {
        super(props);

        this.bindowanieFormularza = this.bindowanieFormularza.bind(this);

        this.state = {
            loginLogowanie: '',
            passwordLogowanie: '',


            loginRejestracja: '',
            passwordRejestracja: 'user1212',
            passwordRejestracja2: 'user1212',
            email: 'user1212@wp.pl'
        };
    }

    SprobujZalogowac = async (event) => {
        event.preventDefault();

        const odpowiedz = await axios.post('http://localhost:8080/api/login', {
            "name": this.state.loginLogowanie,
            "password": this.state.passwordLogowanie
        });

        this.setState({
            loginLogowanie: ''
        });
        this.setState({
            passwordLogowanie: ''
        });

        let tempId = parseInt(odpowiedz.data.id, 10);
        if (tempId === -1) {
            alert('niepoprawne dane!')
            window.location.reload();
        } else {
            alert('poprawne dane!')
            sessionStorage.setItem('userId', odpowiedz.data.id)
            sessionStorage.setItem('user', odpowiedz.data.name)
            sessionStorage.setItem('role', odpowiedz.data.role)
            sessionStorage.setItem('token', 'token')
            localStorage.setItem('visable',0);
            window.location.replace('/loggedUser/'+sessionStorage.getItem('userId'))
        }
    }


    SprobujZarejestrowac = async (event) => {
        event.preventDefault();


        if (this.state.passwordRejestracja === this.state.passwordRejestracja2) {
            const odpowiedz = await axios.post('http://localhost:8080/api/register', {
                "name": this.state.loginRejestracja,
                "password": this.state.passwordRejestracja,
                "email": this.state.email
            });


            let tempId = parseInt(odpowiedz.data.id, 10);
            if (tempId === -1) {
                if(odpowiedz.data.name!==null && odpowiedz.data.email!==null)
                    alert('1. Login : ' + odpowiedz.data.name +'\n'+
                          '2. Adres email : ' + odpowiedz.data.email +'\n'+
                          ' są niedostępne')
                else if (odpowiedz.data.name !==null) alert('Login : ' + odpowiedz.data.name + ' już istnieje')
                else if (odpowiedz.data.email !==null) alert('Adres email : ' + odpowiedz.data.email + ' już istnieje')
            } else {
                alert('Udana rejestracja!')
                const odpowiedz = await axios.post('http://localhost:8080/api/login', {
                    "name": this.state.loginRejestracja,
                    "password": this.state.passwordRejestracja
                });
                sessionStorage.setItem('userId', odpowiedz.data.id)
                sessionStorage.setItem('user', odpowiedz.data.name)
                sessionStorage.setItem('role', odpowiedz.data.role)
                sessionStorage.setItem('token', 'token')
                //CookiesProvider.set('cookie','value')

                window.location.replace('/loggedUser/'+sessionStorage.getItem('userId'))

            }
        }

    }


    bindowanieFormularza(event) {

        const target = event.target;
        const value = target.value;

        const state = {...this.state}

        state[target.name] = value;


        this.setState(state);
    }





    render() {
        if(sessionStorage.getItem('userId')){
            window.location.replace('http://localhost:3000/loggedUser/2')
            return <div></div>

        }

        return (
            <div id="bodyLogowania">
                <Menu/>
                <div id="panelCentralny">
                    <div id="logowanie">
                        <div class="elementyLogowanie">
                            <form onSubmit={this.SprobujZalogowac}>
                                <input name="loginLogowanie"
                                       value={this.state.loginLogowanie}
                                       class="formItemLog"
                                       type="text"
                                       placeholder="PODAJ LOGIN"
                                       onChange={this.bindowanieFormularza}/><br/>
                                <input name="passwordLogowanie"
                                       class="formItemLog"
                                       type="password"
                                       placeholder="PODAJ HASŁO"
                                       onChange={this.bindowanieFormularza}/><br/>
                                <button class="formItemLog" type="submit" value="Zaloguj">Zaloguj</button>
                            </form>
                        </div>
                    </div>
                    <div id="rejestracja" onSubmit={this.SprobujZarejestrowac}>
                        <div className="elementyLogowanie">
                            <form>
                                <input
                                    class="formItemLog"
                                    type="text"
                                    name="loginRejestracja"
                                    placeholder="PODAJ LOGIN"
                                    required="false"
                                    onChange={this.bindowanieFormularza}/><br/>
                                <input
                                    class="formItemLog"
                                    type="password"
                                    name="passwordRejestracja"
                                    placeholder="PODAJ HASŁO"
                                    required="false"
                                    onChange={this.bindowanieFormularza}/><br/>
                                <input
                                    class="formItemLog"
                                    type="password"
                                    name="passwordRejestracja2"
                                    placeholder="POWTÓRZ HASŁO"
                                    required="true"
                                    onChange={this.bindowanieFormularza}/><br/>
                                <input
                                    class="formItemLog"
                                    type="email"
                                    name="email"
                                    placeholder="PODAJ EMAIL"
                                    required="true"
                                    onChange={this.bindowanieFormularza}/><br/>
                                <button class="formItemLog" value="REJESTRACJA">Zarejestruj</button>
                            </form>
                        </div>
                    </div>
                </div>
                <Stopka/>
            </div>
        );
    }
}

export default Logowanie;
