import React from 'react';
import './css/movieFullPage.css'
import MovieQuickDescription from './MovieQuickDescription'
import MovieDetails from "./MovieDetails";
import MovieTrailer from "./MovieTrailer";
import Recenzje from './Recenzje'
import Stopka from '../stopka/Stopka'
import Menu from '../menu/Menu'
import Comment from '../comment/Comment'
import AddNewComment from '../comment/AddNewComment'
import '../css/MainCss.css'
import UserFavorites from "../user/Favorites";
import {delay} from "q";


class MovieFullPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            titlePl: 'titlePl',
            titleEng: 'titleEng',
            year: 'year',
            duration: 'duration',
            description: 'description',
            director: 'director',
            sredniaOcena: 'sredniaOcena',
            movieType: 'xx',
            production: 'xx',
            premiere: 'xx',
            boxOffice: 'xx',
            imgUrl: 'xx',


            allComments: []

        };
    }


    componentWillMount =  () => {

        const f =
            fetch("http://localhost:8080/api/movie/" + this.props.match.params.movieId)
                .then(res => res.json())
                .then(json => {
                    console.log(json.commentList)
                    console.log(json)

                    this.setState({titlePl: json.titlePl});
                    this.setState({titleEng: json.titleEng});
                    this.setState({duration: json.duration});
                    this.setState({description: json.description});
                    this.setState({director: json.director});
                    this.setState({movieType: json.movieType});
                    this.setState({production: json.production});
                    this.setState({premiere: json.premiere});
                    this.setState({boxOffice: json.boxOffice});
                    this.setState({imgUrl: json.imgUrl});
                    this.setState({allComments: json.commentList});


                });


    }


    exportAllComments = () => {
        let allComments = []
        this.state.allComments.forEach(item => allComments.push(<Comment author={item.userID.name}  content={item.content} date={item.creationDate}/>))
        return allComments;
    }


    render() {

        return (

            <div>
                <Menu/>
                <div id="fullPageBody">

                    <div id="content">
                        <div class="element_nieparzysty">
                            <MovieQuickDescription
                                imgUrl={this.state.imgUrl}
                                titlePl={this.state.titlePl}
                                titleEng={this.state.titleEng}
                                year={this.state.year}
                                duration={this.state.duration}
                                description={this.state.description}
                            />
                        </div>

                        <div className="element_parzysty">
                            <MovieDetails
                                director={this.state.director}
                                sredniaOcena={this.state.sredniaOcena}
                                gatunek={this.state.movieType}
                                produkcja={this.state.production}
                                premiera={this.state.premiere}
                                boxOffice={this.state.boxOffice}
                            />
                        </div>

                        <div className="element_nieparzysty">
                            <MovieTrailer urlId="kRPhuj8f_3U"/>
                        </div>
                        <div className="element_parzysty">
                            <Recenzje/>
                        </div>
                        <div className="element_nieparzysty">
                            <div id="commentsDiv">
                                KOMENTARZE
                                {this.exportAllComments()}
                                <AddNewComment/>


                            </div>
                        </div>


                    </div>
                    <Stopka/>
                </div>
            </div>
        );
    }
}

export default MovieFullPage;