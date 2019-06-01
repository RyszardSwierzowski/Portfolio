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


class MovieFullPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            allComments: [
                {
                    author: 'autor12',
                    date: '11/10/2015',
                    content: 'dasdasf sda ds dnas dasd asla,.sma s. gmagnag lsdadas sdasdad inkal'
                },
                {
                    author: 'autor1',
                    date: '5/11/2019',
                    content: 'polecam'
                }
            ],
            test: 'xxx'
        };
    }

    exportAllComments = () => {
        let allCommentstable = []
        for (let i = 0; i < 2; i++) {
            let comment = this.state.allComments.pop()
            allCommentstable.push(<Comment author={comment.author} content={comment.content} date={comment.date}/>)
        }
        return allCommentstable;
    }


    render() {
        return (<div id="fullPageBody">
                <Menu/>
                <div id="content">
                    <div class="element_nieparzysty">
                        <MovieQuickDescription
                            titlePl='Zielona mila'
                            titleEng='The Green Mile'
                            year='1999'
                            duration='188'
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        />
                    </div>

                    <div className="element_parzysty">
                        <MovieDetails
                            director="Frank Darabont"
                            sredniaOcena="3.94"
                            gatunek="Dramat"
                            produkcja="USA"
                            premiera="20 marca 2000"
                            boxoffice="286801374"
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
                            <AddNewComment />


                        </div>
                    </div>


                </div>
                {/*<Stopka/>*/}
            </div>
        );
    }
}

export default MovieFullPage;