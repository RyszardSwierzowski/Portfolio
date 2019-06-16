import React from 'react';
import '../css/MainCss.css'

import Stopka from '../stopka/Stopka'
import Menu from '../menu/Menu'


class UserFullPage extends React.Component {
    constructor(props) {
        super(props);


        this.state = {};
    }
    componentDidMount =  async () => {

            const f = await
                fetch("http://localhost:8080/api/movie/all")
                    .then(res => res.json())
                    .then(json => {
                        this.setState({allMovies: json});
                        console.log(json);
                    });






    }


    render() {
        return (<div>
                <Menu/>
                <div id="body">

                    <div id="content">
                     all
                    </div>



                </div>
                <Stopka/>
            </div>


        );

    }
}

export default UserFullPage;