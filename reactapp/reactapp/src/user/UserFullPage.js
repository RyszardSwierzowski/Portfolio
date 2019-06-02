import React from 'react';
import '../css/MainCss.css'
import './css/UserFullPage.css'
import UserInfo from './UserInfo'
import UserFavorites from './Favorites'
import Stopka from '../stopka/Stopka'
import Menu from '../menu/Menu'


class UserFullPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: 'Rumcajs',
            email: 'rumcajs@zlasu.com',
            avatarUrl: 'https://cdn.pixabay.com/photo/2013/07/13/13/40/avatar-161325_960_720.png'
        };
    }


    render() {
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
                            <UserFavorites/>
                        </div>
                        <Stopka/>


                    </div>
                </div>
            </div>

        );
    }
}

export default UserFullPage;