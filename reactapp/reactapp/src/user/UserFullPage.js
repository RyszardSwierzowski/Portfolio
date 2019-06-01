import React from 'react';
import '../css/MainCss.css'
import './css/UserFullPage'
import UserInfo from './UserInfo'




class UserFullPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName:'Rumcajs',
            email:'rumcajs@zlasu.com',
            avatarUrl:'https://cdn.pixabay.com/photo/2013/07/13/13/40/avatar-161325_960_720.png'
        };
    }


    render() {
        return (
            <div id="fullPageBody">
                <div id="content">
                    <div class="element_nieparzysty">
                        <UserInfo
                            userName={this.state.userName}
                            email={this.state.email}
                            avatarUrl={this.state.avatarUrl}

                        />

                    </div>


                </div>
            </div>
        );
    }
}

export default UserFullPage;