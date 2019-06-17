import React from 'react';
import './css/MovieQD.css'
import image1 from '../img/do_polubienia.png'
import image2 from '../img/polubiony.png'


class MovieQuickDescription extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }



    render() {
        const logo = require('../img/do_polubienia.png')
        return (
            <div id="mainDiv">
                <div id="poster"><img src={this.props.imgUrl} alt="plakat filmu" height="197" width="150"/></div>
                <div id='title'>

                    <div>{this.props.titlePl} <span id="year">({this.props.year})</span>


                    </div>

                    <div id='engTitle'>{this.props.titleEng}</div>
                    <div id='duration'>{this.props.duration} </div>

                    <div id='description'>{this.props.description} </div>
                </div>

            </div>


        );
    }
}

export default MovieQuickDescription;