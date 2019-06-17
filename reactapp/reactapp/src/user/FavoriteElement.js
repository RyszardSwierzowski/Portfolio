import React from 'react';
import '../css/MainCss.css'
import '../movie/css/AllMoviesElement.css'
import {Link} from "react-router-dom";


class FavoriteElement extends React.Component {
    constructor(props) {
        super(props);


        this.state = {};
    }

    test = () => {
        window.location.replace('../movie/'+this.props.id);

    }

    render() {
        if (this.props.none ) {
            return (
                <div class="element_Renderowany">
                    <h4>Nie masz polubionych filmów</h4>

                </div>


            );
        }
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

export default FavoriteElement;