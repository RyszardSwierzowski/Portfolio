import React from 'react';
import './css/UserFullPage.css'



class UserInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
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



            </div>
        );
    }
}

export default UserInfo;
