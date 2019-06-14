import React from 'react';
import './css/Favorites.css'


class Favorites extends React.Component{
    constructor(props) {
        super(props);

        this.state = {


        };
    }


    render() {
        return (
            <div >
                <div id="favoriteMovie">
                    {this.props.id}

                </div>





            </div>
        );
    }
}

export default Favorites;
