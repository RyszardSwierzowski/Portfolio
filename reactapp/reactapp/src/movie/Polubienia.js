import React from 'react';
import image1 from '../img/do_polubienia.png'
import image2 from '../img/polubiony.png'
import './css/MovieQD.css'
import axios from "axios";
import {Link} from "react-router-dom";


class Polubienia extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isFavorite: false,

        };
    }

    async componentDidMount() {
        let myFavorites = [];
        const f2 = await
            fetch("http://localhost:8080/api/user/favorites/" + sessionStorage.getItem('userId'))
                .then(res => res.json())
                .then(json => {

                    myFavorites = json;

                    myFavorites.forEach(item => {
                        // console.log('item:' + item + " props" + this.props.movieId)
                        if (item === this.props.movieId) {
                            this.setState({isFavorite: true})
                        }
                    })
                    // console.log(this.state.isFavorite)


                });
        const f = await fetch('http://localhost:8080/api/movie/howManyLike/'+this.props.movieId)
            .then(res=>res.json())
            .then(json=>{
               this.setState({numberOfLike:json});
                // console.log(this.state.numberOfLike)
            });


    }


    likeOrUnlike = async () => {
        if (this.state.isFavorite === true) {
            const odpowiedz = await axios.post('http://localhost:8080/api/user/favorites/remove/' + sessionStorage.getItem('userId') + '/' + this.props.movieId, {});
        } else {
            const odpowiedz = await axios.post('http://localhost:8080/api/user/favorites/add/' + sessionStorage.getItem('userId') + '/' + this.props.movieId, {});
        }
        window.location.reload();
    }

    isFavorite = () => {
        if (this.state.isFavorite === false) {
            return (
                <div>
                    <div>{this.state.numberOfLike} polubień</div>
                    <Link onClick={this.likeOrUnlike}>

                        <div id="unlikeStar">
                            <img src={image1} alt="like" height="42" width="42"/>
                        </div>
                    </Link>

                </div>
            )
        }
        return (
            <div>
                <div>{this.state.numberOfLike} polubień</div>
                <Link onClick={this.likeOrUnlike}>
                    <div id="likeStar">
                        <img src={image2} alt="like" height="42" width="42"/>
                    </div>
                </Link>

            </div>
        )
    }

    render() {

        return (
            <div>
                {this.isFavorite()}
            </div>


        );
    }
}

export default Polubienia;