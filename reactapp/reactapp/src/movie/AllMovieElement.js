import React from 'react';
import '../css/MainCss.css'
import './css/AllMoviesElement.css'
import {Link} from "react-router-dom";

import Stopka from '../stopka/Stopka'
import Menu from '../menu/Menu'


class AllMovieElement extends React.Component {
    constructor(props) {
        super(props);


        this.state = {};
    }

    test = () => {
        window.location.replace('../movie/1');

    }

    render() {
        return (<div class="element_Renderowany">

                <Link
                    class="noneDecorationLink"
                      onClick={this.test}>
                    <div class="floatLeft"><img src={this.props.imgUrl} alt="plakat filmu" height="92" width="70"/>

                    </div>
                    <div id="titleDescriptionBlock">
                        <div id="titleAME">   {this.props.title}  </div>
                        <div id="descriptionAME">   {this.props.description}    </div>
                    </div>
                </Link>


            </div>


        );

    }
}

export default AllMovieElement;