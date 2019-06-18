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
import Polubienia from './Polubienia'


class MovieFullPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            sredniaOcena: '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',


            allComments: []

        };
    }


    componentWillMount = () => {

        const f =
            fetch("http://localhost:8080/api/movie/" + this.props.match.params.movieId)
                .then(res => res.json())
                .then(json => {
                    // console.log(json.commentList)
                    // console.log(json)

                    this.setState({titlePl: json.titlePl});
                    this.setState({id: json.id});
                    this.setState({titleEng: json.titleEng});
                    this.setState({duration: json.duration});
                    this.setState({description: json.description});
                    this.setState({director: json.director});
                    this.setState({movieType: json.movieType});
                    this.setState({production: json.production});
                    this.setState({premiere: json.premiere});
                    this.setState({boxOffice: json.boxOffice});
                    this.setState({imgUrl: json.imgUrl});
                    this.setState({trailerUrl: json.trailerUrl});
                    this.setState({allCommentSize: json.commentList.length})
                    this.setState({allComments: json.commentList});


                });


    }


    exportAllComments = () => {
        let allComments = []
        if (this.state.allCommentSize === 0)
            allComments.push(<Comment author='none'/>)
        else {
            this.state.allComments.forEach(item => allComments.push(<Comment author={item.userID.name}
                                                                             content={item.content}
                                                                             date={item.creationDate}/>))
        }

        return allComments;
    }


    render() {

        return (

            <div>
                <Menu/>
                <div id="fullPageBody">

                    <div id="content">
                        <div class="element_Renderowany">

                            <div id="lewy">
                                <Polubienia movieId={this.state.id}/>
                            </div>


                            <div id="prawy">
                                <MovieQuickDescription
                                    imgUrl={this.state.imgUrl}
                                    titlePl={this.state.titlePl}
                                    titleEng={this.state.titleEng}
                                    year={this.state.year}
                                    duration={this.state.duration}
                                    description={this.state.description}
                                />
                            </div>
                            <div class="clearBoth"></div>



                        </div>




                        <div className="element_Renderowany">
                            <span>Szczegóły</span>
                            <MovieDetails
                                director={this.state.director}
                                // sredniaOcena={this.state.sredniaOcena}
                                gatunek={this.state.movieType}
                                produkcja={this.state.production}
                                premiera={this.state.premiere}
                                boxOffice={this.state.boxOffice}
                            />
                        </div>


                        <div className="element_Renderowany">
                            <MovieTrailer trailerUrl={this.state.trailerUrl}/>
                        </div>

                        {/*<div className="element_Renderowany">*/}
                        {/*    <Recenzje/>*/}
                        {/*</div>*/}
                        {/* todo RECENZJA*/}

                        <div className="element_Renderowany">
                            KOMENTARZE
                            {this.exportAllComments()}
                        </div>

                        <div className="element_Renderowany">
                            DODAJ KOMENTARZ
                            <AddNewComment movieId={this.props.match.params.movieId}/>
                        </div>


                    </div>

                </div>
                <Stopka/>
            </div>
        );
    }
}

export default MovieFullPage;