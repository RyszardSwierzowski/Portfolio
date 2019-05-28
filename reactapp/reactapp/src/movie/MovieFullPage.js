import React from 'react';
import MovieQuickDescription from './MovieQuickDescription'
import MovieDetails from "./MovieDetails";
import MovieTrailer from "./MovieTrailer";
import Recenzje from './Recenzje'
import Stopka from '../stopka/Stopka'
import Menu from '../menu/Menu'
import '../css/MainCss.css'


class MovieFullPage extends React.Component {
    render() {
        return (<div>
                <Menu/>
                <div id="content">

                    <MovieQuickDescription
                        titlePl='Zielona mila'
                        titleEng='The Green Mile'
                        year='1999'
                        duration='188'
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    />

                    <MovieDetails
                        director="Frank Darabont"
                        sredniaOcena="3.94"
                        gatunek="Dramat"
                        produkcja="USA"
                        premiera="20 marca 2000"
                        boxoffice="286801374"
                    />

                    {/*<MovieTrailer url="https://youtu.be/6xKgsdh6YRs"/>*/}
                    <MovieTrailer urlId="kRPhuj8f_3U"/>
                    <Recenzje/>

                </div>
                <Stopka/>
            </div>
        );
    }
}

export default MovieFullPage;