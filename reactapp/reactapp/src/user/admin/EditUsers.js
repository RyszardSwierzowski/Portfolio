import React from 'react';
import '../../css/MainCss.css'


import Stopka from '../../stopka/Stopka'
import Menu from '../../menu/Menu'
import axios from "axios";
import EditUserElement from './EditUserElement'


class EditUser extends React.Component {
    constructor(props) {
        super(props);
        this.bindowanieFormularza = this.bindowanieFormularza.bind(this);

        this.state = {
            allUsers:[]
        };
    }

    componentDidMount = async () => {
        if (!sessionStorage.getItem('userId'))
            window.location.replace('/')
        else if (sessionStorage.getItem('role') !== 'ROLE_ADMIN') {
            alert('brak dostepu')// todo przekierowac na brak dostepepu

        } else {
            const f = await
                fetch("http://localhost:8080/api/user")
                    .then(res => res.json())
                    .then(json => {
                        this.setState({allUsers: json});

                    });

        }

    }

    bindowanieFormularza(event) {

        const target = event.target;
        const value = target.value;

        const state = {...this.state}

        state[target.name] = value;


        this.setState(state);
    }

    exportAllUsers= ()=>{
        let users=[];
        let allUsersFromRest = this.state.allUsers;
        allUsersFromRest.forEach(u=>{
            users.push(<EditUserElement user={u}/>)
        })
        return users;
    }



    render() {

        if (sessionStorage.getItem('token'))
            return (
                <div>
                    <Menu/>
                    <div id="body">

                        <div id="content">

                            {this.exportAllUsers()}

                        </div>
                    </div>
                    <Stopka/>
                </div>

            );
        else return (<div></div>)
    }
}

export default EditUser;