import React from 'react';
import './css/Stopka.css'


class Stopka extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div id="footer">
                <p>Portal filmowy</p>
                <p>Wykonali : Ryszard Świerzowski & Marcin Rosół 2019</p>
            </div>


        );
    }
}

export default Stopka;