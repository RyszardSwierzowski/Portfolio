import React from 'react';
import '../css/MainCss.css'

import Stopka from '../stopka/Stopka'
import Menu from '../menu/Menu'


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
                        o nas
                    </div>



                </div>
                <Stopka/>
            </div>


        );

    }
}

export default UserFullPage;