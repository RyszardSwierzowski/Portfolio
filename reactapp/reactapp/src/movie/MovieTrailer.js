import React from 'react';
import './css/movieTrailer.css'



class MovieTrailer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div id="videoTrailer">

                <iframe width="560" height="315"
                        src={this.props.trailerUrl}
                        frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>


        );
    }
}

export default MovieTrailer;