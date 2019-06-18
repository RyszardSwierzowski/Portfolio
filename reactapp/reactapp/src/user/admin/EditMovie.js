import React from 'react';
import '../../css/MainCss.css'
import './css/Admin.css'


import Stopka from '../../stopka/Stopka'
import Menu from '../../menu/Menu'
import axios from "axios";


class EditMovie extends React.Component {
    constructor(props) {
        super(props);
        this.bindowanieFormularza = this.bindowanieFormularza.bind(this);

        this.state = {
            allMovies:[],
            isMovieSelected: false,
            selectedId: -1,
            curMovie:[],

            titlePl: '',
            titleEng: '',
            premiere: '',
            description: '',
            director: '',
            boxOffice: '',
            movieType: '',
            production: '',
            duration: '',
            trailerUrl: '',
            imgUrl: ''
        };
    }

    componentDidMount = async () => {
        if (!sessionStorage.getItem('userId'))
            window.location.replace('/')
        else if (sessionStorage.getItem('role') !== 'ROLE_ADMIN') {
            alert('brak dostepu')// todo przekierowac na brak dostepepu

        } else {
            const f = await
                fetch("http://localhost:8080/api/movie/all")
                    .then(res => res.json())
                    .then(json => {
                        this.setState({allMovies: json});

                    });

        }

    }

    bindowanieFormularza(event) {

        const target = event.target;
        const value = target.value;

        const state = {...this.state}

        state[target.name] = value;


        this.setState(state);
    }

    renderComboBox = () => {
        let optionsArray = [];
        let movies = this.state.allMovies;

        if(this.state.isMovieSelected){

            movies.forEach(i => optionsArray.push(
                <option value={i.id}>{i.id}. {i.titlePl}</option>
            ))
        }
        else {
            optionsArray.push(<option value="-1">wybierz</option>)
            movies.forEach(i => optionsArray.push(
                <option value={i.id}>{i.id}. {i.titlePl}</option>
            ))
        }



        return (optionsArray)

    }

    wybierzItemIUsundomyslnyWybor =  (event) => {


        this.setState({isMovieSelected:true})
        this.setState({selectedId:event.currentTarget.value})

        // this.state.allMovies.forEach(i=>{
        //     if(Number(i.id) == this.state.selectedId)
        //         console.log('jest'+i.id)
        //     // else
        //     //     console.log(i.id+'  '+this.state.selectedId+ ' '+event.currentTarget.value)
        // })
        //
        //
        // this.setState({titlePl:this.state.curMovie.titlePl})
        // this.setState({titleEng:this.state.curMovie.titleEng})
    }
    update=()=> {
        // console.log('id '+this.state.selectedId)
        let currentMovie ={};
        let currentId = Number(this.state.selectedId);
        this.state.allMovies.forEach(i=>{
            if(i.id===currentId){
                // console.log(currentId)
                currentMovie=i;
            }

        })

        this.setState({titlePl:currentMovie.titlePl})
        this.setState({titleEng:currentMovie.titleEng})
        this.setState({premiere:currentMovie.premiere})
        this.setState({description:currentMovie.description})
        this.setState({director:currentMovie.director})
        this.setState({boxOffice:currentMovie.boxOffice})
        this.setState({movieType:currentMovie.movieType})
        this.setState({production:currentMovie.production})
        this.setState({duration:currentMovie.duration})
        this.setState({trailerUrl:currentMovie.trailerUrl})
        this.setState({imgUrl:currentMovie.imgUrl})



        // console.log(currentMovie.description)
        // console.log(currentMovie.movieType)
    }


    EdytujFilm = async (event) => {
        event.preventDefault();

        const odpowiedz = await axios.post('http://localhost:8080/api/movie/', {
            "id":this.state.selectedId,
            "titlePl": this.state.titlePl,
            "titleEng": this.state.titleEng,
            "premiere": this.state.premiere,
            "description": this.state.description,
            "director": this.state.director,
            "boxOffice": this.state.boxOffice,
            "movieType": this.state.movieType,
            "production": this.state.production,
            "duration": this.state.duration,
            "trailerUrl": 'https://www.youtube.com/embed/' + this.state.trailerUrl,
            "imgUrl": this.state.imgUrl
        });
        alert('zapisano zmiany')
        window.location.reload();

    }



    editMoviePane = () => {


        if (this.state.isMovieSelected === true){

            return (
                <div className="element_Renderowany" id="addNewMovieSize">

                    <h2>Dodaj nowy film do bazy</h2>
                    <input type="button" onClick={this.update} value="Pobierz szczegóły"/>
                    <form onSubmit={this.EdytujFilm}>

                        <label className="labelSize">Polski tytuł : </label> <input className="inputSize" type="text"
                                                                                    name="titlePl"
                                                                                    placeholder="polski tytuł"
                                                                                    onChange={this.bindowanieFormularza}
                                                                                    required="true"
                                                                                    defaultValue={this.state.titlePl}
                                                                                    /> <br/>

                        <label className="labelSize">Oryginalny tytuł : </label> <input className="inputSize"
                                                                                        type="text"
                                                                                        name="titleEng"
                                                                                        placeholder="oryginalny tytuł"
                                                                                        onChange={this.bindowanieFormularza}
                                                                                        defaultValue={this.state.titleEng}
                                                                                        required="true"/> <br/>
                        <label className="labelSize">Data premiery : </label> <input className="inputSize" type="text"
                                                                                     name="premiere"
                                                                                     defaultValue={this.state.premiere}
                                                                                     placeholder="data premiery"
                                                                                     onChange={this.bindowanieFormularza}
                                                                                     required="true"/> <br/>
                        <label className="labelSize">Opis : </label> <textarea className="inputSize"
                                                                               value={this.state.description}
                                                                               name="description"
                                                                               placeholder="opis"
                                                                               onChange={this.bindowanieFormularza}
                                                                               required="true"></textarea> <br/>
                        <label className="labelSize">Reżyser : </label> <input className="inputSize" type="text"
                                                                               defaultValue={this.state.director}
                                                                               name="director" placeholder="reżyser"
                                                                               onChange={this.bindowanieFormularza}
                                                                               required="true"/> <br/>
                        <label className="labelSize">Box office : </label> <input className="inputSize" type="text"
                                                                                  defaultValue={this.state.boxOffice}
                                                                                  name="boxOffice"
                                                                                  placeholder="boxOffice"
                                                                                  onChange={this.bindowanieFormularza}
                                                                                  required="true"/> <br/>

                        <label className="labelSize">Gatunek : </label>
                        <select className="inputSize"
                                value={this.state.movieType}
                                name="movieType"
                                onChange={this.bindowanieFormularza}
                                required="true">
                            <option value="DRAMAT">DRAMAT</option>
                            <option value="FANTAZY">FANTAZY</option>
                            <option value="KOMEDIA">KOMEDIA</option>
                            <option value="HORROR">HORROR</option>
                            <option value="WOJENNY">WOJENNY</option>
                            <option value="THRILLER">THRILLER</option>
                            <option value="KATASTROFICZNY">KATASTROFICZNY</option>
                        </select>

                        <label className="labelSize">Produkcja : </label> <input className="inputSize" type="text"
                                                                                 name="production"
                                                                                 defaultValue={this.state.production}
                                                                                 placeholder="produkcja"
                                                                                 onChange={this.bindowanieFormularza}
                                                                                 required="true"/> <br/>
                        <label className="labelSize">Czas trwania : </label> <input className="inputSize"
                                                                                    type="text"
                                                                                    name="duration"
                                                                                    defaultValue={this.state.duration}
                                                                                    placeholder="czas trwania (np. 3godz. 45 min)"
                                                                                    onChange={this.bindowanieFormularza}
                                                                                    required="true"/> <br/>
                        <label className="labelSize">URL zwiastuna : </label> <input className="inputSize" type="text"
                                                                                     name="trailerUrl"
                                                                                     defaultValue={this.state.trailerUrl}
                                                                                     placeholder="ID zwiastuna na youtube"
                                                                                     onChange={this.bindowanieFormularza}
                                                                                     required="true"/> <br/>
                        <label className="labelSize">URL grafiki : </label> <input className="inputSize" type="text"
                                                                                   name="imgUrl"
                                                                                   defaultValue={this.state.imgUrl}
                                                                                   placeholder="URL grafiki"
                                                                                   onChange={this.bindowanieFormularza}
                                                                                   required="true"/> <br/>


                        <input id="buttonConfirm" type="submit"/>
                    </form>
                </div>
            );
        }



    }


    render() {

        if (sessionStorage.getItem('token'))
            return (
                <div>
                    <Menu/>
                    <div id="body">

                        <div id="content">
                            <select className="inputSize" name="movieType"  onChange={this.wybierzItemIUsundomyslnyWybor}  required="true"  >
                                {/**/}
                                {this.renderComboBox()}
                            </select>

                            {this.editMoviePane()}


                        </div>
                    </div>
                    <Stopka/>
                </div>

            );
        else return (<div></div>)
    }
}

export default EditMovie;