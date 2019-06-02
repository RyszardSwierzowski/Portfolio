import React from 'react';
import './css/Logowanie.css'
import {PluginObj as axios} from "@babel/core";
import Stopka from '../stopka/Stopka'
import Menu from'../menu/Menu'


class Logowanie extends React.Component {
    constructor(props) {
        super(props);

        this.bindowanieFormularza = this.bindowanieFormularza.bind(this);

        this.state = {
            loginLogowanie: '',
            passwordLogowanie: '',
            name: null

        };
    }


    probaLogowania = () => {
        let allCommentstable = []
        return allCommentstable;
    }

    KlikniecieSubmit2 = async (event) => {
        event.preventDefault();
        const state = this.state
        this.updateName()
        alert(this.state.name)


    }

    updateName =() => {
        this.setState({name: 'xxx'})
    }


    bindowanieFormularza(event) {

        const target = event.target;
        const value = target.value;

        const state = {...this.state}

        state[target.name] = value;


        this.setState(state);
    }


    // componentDidMount() {
    //     fetch("http://localhost:8080/api/user/1")
    //         .then(res => res.json())
    //         .then(json => this.setState({ contacts: json.results }));
    // }


    render() {
        return (
            <div id="bodyLogowania">
                <Menu/>
                <div id="panelCentralny">
                    <div id="logowanie">
                        <div class="elementyLogowanie">
                            <form onSubmit={this.KlikniecieSubmit2}>
                                <input name="loginLogowanie" value={this.state.loginLogowanie} class="formItemLog"
                                       type="text" placeholder="PODAJ LOGIN" required="true"
                                       onChange={this.bindowanieFormularza}/> <br/>
                                <input name="passwordLogowanie" class="formItemLog" type="password"
                                       placeholder="PODAJ HASŁO" required="true" onChange={this.bindowanieFormularza}/>
                                <br/>
                                <button class="formItemLog" type="submit" value="Zaloguj">Zaloguj</button>
                                <br/>
                            </form>
                        </div>
                    </div>
                    <div id="rejestracja">
                        <div className="elementyLogowanie">
                            <form>
                                <input class="formItemLog" type="text" placeholder="PODAJ LOGIN" required="true"/> <br/>
                                <input class="formItemLog" type="password" placeholder="PODAJ HASŁO" required="true"/>
                                <br/>
                                <input class="formItemLog" type="password" placeholder="POWTÓRZ HASŁO" required="true"/>
                                <br/>
                                <input class="formItemLog" type="email" placeholder="PODAJ EMAIL" required="true"/>
                                <br/>
                                <button class="formItemLog" value="REJESTRACJA" onClick={this.updateName}>Zarejestruj</button>
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
