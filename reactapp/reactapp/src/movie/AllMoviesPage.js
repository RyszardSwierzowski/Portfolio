import React from 'react';
import '../css/MainCss.css'

import Stopka from '../stopka/Stopka'
import Menu from '../menu/Menu'
import AllMovieElement from './AllMovieElement'
import Comment from "../comment/Comment";


class AllMoviePage extends React.Component {
    constructor(props) {
        super(props);
        this.bindowanieFormularza = this.bindowanieFormularza.bind(this);

        this.state = {
            allMovies: [],
            filtrGatunek: 'NONE'
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
updateFilter= () => {

}
    bindowanieFormularza(event) {

        const target = event.target;
        const value = target.value;

        const state = {...this.state}

        state[target.name] = value;


        this.setState(state);

        // console.log(this.state.filtrGatunek)
    }
    przyciskFiltr= async () => {
       if(this.state.filtrGatunek==='NONE'){
           // alert('none')
           const f = await
               fetch("http://localhost:8080/api/movie/all")
                   .then(res => res.json())
                   .then(json => {
                       this.setState({allMovies: json});
                       console.log(json);
                   });
       }
       else{
           // alert(this.state.filtrGatunek)
          let url ="http://localhost:8080/api/movie/getFiltered/DRAMAT"
           let url2= "http://localhost:8080/api/movie/getFiltered/"+this.state.filtrGatunek
           const f = await
               fetch(url2)
                   .then(res => res.json())
                   .then(json => {
                       this.setState({allMovies: json});
                       console.log(json);
                       // alert(json)
                   });
       }
    }

    render() {
        return (<div>
            <Menu/>
            <div id="body">

                <div id="content">
                    <div class="floatLeft" id="size">   {this.exportAllMovies()}    </div>

                    <div className="element_Renderowany" id="marginesLewy">
                        <h3>Filtruj</h3>
                        <form >
                            <label for="filtrGatunek">Gatunek : </label>
                            <select name="filtrGatunek" className="formFiltr" onChange={this.bindowanieFormularza}>
                                <option value="NONE">Dowolny</option>
                                <option value="DRAMAT">DRAMAT</option>
                                <option value="FANTAZY">FANTAZY</option>
                                <option value="DRAMAT">DRAMAT</option>
                                <option value="HORROR">HORROR</option>
                                <option value="WOJENNY">WOJENNY</option>
                                <option value="THRILLER">THRILLER</option>
                                <option value="KATASTROFICZNY">KATASTROFICZNY</option>
                            </select><br/>


                            <input  className="formFiltr" type="button" onClick={this.przyciskFiltr} value="filtruj"/>
                        </form>
                    </div>


                </div>


            </div>
            <
                Stopka/>
            </div>


                )
                ;

                }
                }

                export default AllMoviePage;