import React from 'react';
import './css/MovieQD.css'


class MovieQuickDescription extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>



                <div id='mainDiv'>
                    <div id="poster"></div>
                    <div id='title'>
                        <div>{this.props.titlePl} <span id="year">({this.props.year})</span></div>
                        <div id='engTitle'>{this.props.titleEng}</div>
                        <div id='duration'>{this.props.duration} minut</div>
                        <div id='description'>{this.props.description} </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default MovieQuickDescription;