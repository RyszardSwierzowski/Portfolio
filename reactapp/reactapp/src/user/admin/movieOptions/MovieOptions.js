import React from 'react';
import '../../../css/MainCss.css'
import '../css/Admin.css'




class MovieOptions extends React.Component {
    constructor(props) {
        super(props);


        this.state = {};
    }


    render() {

        if (sessionStorage.getItem('token'))
            return (<div>

                </div>

            );
        else return (<div></div>)
    }
}

export default MovieOptions;