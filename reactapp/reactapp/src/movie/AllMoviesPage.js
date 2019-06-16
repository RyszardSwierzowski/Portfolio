import React from 'react';
import '../css/MainCss.css'

import Stopka from '../stopka/Stopka'
import Menu from '../menu/Menu'
import AllMovieElement from './AllMovieElement'
import Comment from "../comment/Comment";


class AllMoviePage extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            allMovies:[]
        };
    }

    componentDidMount = async () => {

        const f = await
            fetch("http://localhost:8080/api/movie/all")
                .then(res => res.json())
                .then(json => {
                    this.setState({allMovies: json});
                    console.log(json);
                });
    }

    exportAllMovies = () => {
        let allMovies = []
        if (this.state.allMovies === 0)
            allMovies.push(<AllMovieElement movie='none'/>)
        else {
            this.state.allMovies.forEach(item => allMovies.push(<AllMovieElement
                id={item.id}
                imgUrl={item.imgUrl}
                title={item.titlePl}
                description={item.description}

            />))
        }

        return allMovies;
    }


    render() {
        return (<div>
                <Menu/>
                <div id="body">

                    <div id="content">
                        <div class="floatLeft" id="size">   {this.exportAllMovies()}    </div>
                        <div>
                            <h1> ZROBIC FILTROWANIE</h1>
                        </div>


                    </div>


                </div>
                <Stopka/>
            </div>


        );

    }
}

export default AllMoviePage;