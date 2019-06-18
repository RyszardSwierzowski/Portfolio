import React from 'react';
import '../css/MainCss.css'

import Stopka from '../stopka/Stopka'
import Menu from '../menu/Menu'
import deadline from '../img/deadline.jpg'


class UserFullPage extends React.Component {
    constructor(props) {
        super(props);


        this.state = {};
    }


    render() {
        return (<div>
                <Menu/>
                <div id="body">

                    <div id="content">
                <div className="centerDeadLine">
                    <h1>Portal filmowy</h1>
                    <h2>Naszym celem było stworzenie portalu skupiającego ludzi interesujących się kinomatografią.</h2>
                    <p></p>

                    <img src={deadline}/>
                </div>
                    </div>



                </div>
                <Stopka/>
            </div>


        );

    }
}

export default UserFullPage;