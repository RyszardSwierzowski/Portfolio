import React from 'react';
import './css/MovieDetails.css'


class MovieDetails extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div id="mainDivDetails">


                <div id="leftDetails">
                    <div>reżyser :</div>
                    {/*<div>ocena :</div>*/}
                    <div>gatunek :</div>
                    <div>produkcja : </div>
                    <div>premiera : </div>
                    <div>boxoffice :</div>
                </div>
                <div id="rightDetails">

                    <div>{this.props.director}</div>
                    {/*<div>{this.props.sredniaOcena}</div>*/}
                    <div>{this.props.gatunek}</div>
                    <div>{this.props.produkcja}</div>
                    <div>{this.props.premiera}</div>
                    <div>{this.props.boxOffice} </div>
                </div>

            </div>


        );
    }
}

export default MovieDetails;