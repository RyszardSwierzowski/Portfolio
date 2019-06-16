import React from 'react';
import '../../css/MainCss.css'
import Options from './options/Options'
import './css/Admin.css'



import Stopka from '../../stopka/Stopka'
import Menu from '../../menu/Menu'
import axios from "axios";


class AddNewMovie extends React.Component {
    constructor(props) {
        super(props);
        this.bindowanieFormularza = this.bindowanieFormularza.bind(this);

        this.state = {
            titlePl:'',
            titleEng:'',
            premiere:'',
            description:'',
            director:'',
            boxOffice:'',
            movieType:'DRAMAT',
            production:'',
            duration:'',
            trailerUrl:'',
            imgUrl:''
        };
    }

    componentDidMount = async () => {
        if (!sessionStorage.getItem('userId'))
            window.location.replace('/')
        else if(sessionStorage.getItem('role')!=='ROLE_ADMIN'){
            alert('brak dostepu')// todo przekierowac na brak dostepepu

        }

    }

    bindowanieFormularza(event) {

        const target = event.target;
        const value = target.value;

        const state = {...this.state}

        state[target.name] = value;


        this.setState(state);
    }



    dodajFilm = async (event) => {
        event.preventDefault();

        const odpowiedz = await axios.post('http://localhost:8080/api/movie/', {
            "titlePl": this.state.titlePl,
            "titleEng": this.state.titleEng,
            "premiere": this.state.premiere,
            "description": this.state.description,
            "director": this.state.director,
            "boxOffice": this.state.boxOffice,
            "movieType": this.state.movieType,
            "production": this.state.production,
            "duration": this.state.duration,
            "trailerUrl": this.state.trailerUrl,
            "imgUrl": this.state.imgUrl
        });

    }


    render() {

        if (sessionStorage.getItem('token'))
            return (<div>
                    <Menu/>
                    <div id="body">

                        <div id="content">
                            <div class="element_Renderowany" id="addNewMovieSize">
                            <form   onSubmit={this.dodajFilm}>
                                <label class="labelSize" >Polski tytuł : </label>     <input class="inputSize" type="text"  name="titlePl" placeholder="polski tytuł" onChange={this.bindowanieFormularza} required="true" />    <br/>
                                <label class="labelSize" >Oryginalny tytuł : </label>     <input class="inputSize"  type="text"  name="titleEng" placeholder="oryginalny tytuł" onChange={this.bindowanieFormularza}required="true" />    <br/>
                                <label class="labelSize" >Data premiery : </label>     <input  class="inputSize" type="text"  name="premiere" placeholder="data premiery" onChange={this.bindowanieFormularza}required="true" />    <br/>
                                <label class="labelSize" >Opis : </label>     <textarea   class="inputSize"   name="description" placeholder="opis" onChange={this.bindowanieFormularza}required="true" />    <br/>
                                <label class="labelSize" >Reżyser : </label>     <input class="inputSize"  type="text"  name="director" placeholder="reżyser" onChange={this.bindowanieFormularza}required="true" />    <br/>
                                <label class="labelSize" >Box office : </label>     <input  class="inputSize" type="text"  name="boxOffice" placeholder="boxOffice" onChange={this.bindowanieFormularza}required="true" />    <br/>

                                <label className="labelSize">Gatunek : </label>
                               <select class="inputSize" name="movieType" onChange={this.bindowanieFormularza}required="true" >
                                   <option value="DRAMAT">DRAMAT</option>
                                   <option value="FANTAZY">FANTAZY</option>
                                   <option value="KOMEDIA">KOMEDIA</option>
                                   <option value="HORROR">HORROR</option>
                                   <option value="WOJENNY">WOJENNY</option>
                                   <option value="THRILLER">THRILLER</option>
                                   <option value="KATASTROFICZNY">KATASTROFICZNY</option>
                               </select>

                                <label class="labelSize" >Produkcja : </label>      <input class="inputSize"  type="text"  name="production" placeholder="produkcja" onChange={this.bindowanieFormularza}required="true" />    <br/>
                                <label class="labelSize" >Czas trwania : </label>      <input  class="inputSize" type="text"  name="duration" placeholder="czas trwania (np. 3godz. 45 min)" onChange={this.bindowanieFormularza}required="true" />    <br/>
                                <label class="labelSize" >URL zwiastuna : </label>      <input class="inputSize"  type="text"  name="trailerUrl" placeholder="URL do zwiastuna na youtube" onChange={this.bindowanieFormularza}required="true" />    <br/>
                                <label class="labelSize" >URL grafiki : </label>      <input  class="inputSize" type="text"  name="imgUrl" placeholder="URL grafiki" onChange={this.bindowanieFormularza}required="true" />    <br/>


                                <input type="submit"/>
                            </form>
                            </div>



                        </div>
                    </div>
                    <Stopka/>
                </div>

            );
        else return (<div></div>)
    }
}

export default AddNewMovie;