import React from 'react';
import './css/UserFullPage.css'
import {Link} from "react-router-dom";
// import {changeVisable} from "./UserFullPage";
import image from '../img/settings-work-tool.png'


class UserInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visableSetting:true
        };
    }
    changeVisable=()=>{
        let visable = localStorage.getItem('visable')
        localStorage.clear()
        // alert(visable)
        if(visable==1)
            localStorage.setItem('visable',0)
        else
            localStorage.setItem('visable',1)
        


    }

    render() {
        return (
            <div class="element_Renderowany">
                <div class="lewyDivTest">
                    <img src={this.props.avatarUrl} alt="Avatar" height="100" width="100"/>
                    <br/>Witaj {this.props.userName}
                </div>

                <div class="ostatniWLini">
                    <p>Twoje dane : </p>
                    <p>login : {this.props.userName}</p>
                    <p>email : {this.props.email}</p>
                    <p></p>
                </div>

                <div>
                    <Link onClick={this.changeVisable}>
                        <img src={image} alt="plakat filmu" height="50" width="50"/>
                    </Link>
                </div>



            </div>
        );
    }
}

export default UserInfo;
