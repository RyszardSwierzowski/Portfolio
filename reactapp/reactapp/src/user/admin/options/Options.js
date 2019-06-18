import React from 'react';
import '../../../css/MainCss.css'
import '../css/Admin.css'
import {Link} from "react-router-dom";


class Options extends React.Component {
    constructor(props) {
        super(props);


        this.state = {};
    }

    adminZarzadzanie_NewMovie= () => {
        window.location.replace('/adminPage/'+sessionStorage.getItem('userId')+'/addMovie');

    }
    adminZarzadzanie_EditMovie= () => {
        window.location.replace('/adminPage/'+sessionStorage.getItem('userId')+'/editMovie');

    }
    adminZarzadzanie_EditUser= () => {
        window.location.replace('/adminPage/'+sessionStorage.getItem('userId')+'/users');

    }
    adminZarzadzanie_NowaRecenzja= () => {
        window.location.replace('/adminPage/'+sessionStorage.getItem('userId')+'/dodajRecenzje');

    }

    render() {

        if (sessionStorage.getItem('token'))
            return (
                    <div class="element_Renderowany" id="glownyKontener">
                        <h1>Wybierz czym chcesz zarządać </h1>
                        <div>
                            <div className="option">
                                <Link class="noneDecorationLink" onClick={this.adminZarzadzanie_NewMovie} >  <div class="itemLeft">Dodaj nowy film</div> </Link>


                                {/* todo RECENZJA*/}
                                {/*<Link class="noneDecorationLink" onClick={this.adminZarzadzanie_NowaRecenzja} >  <div className="itemLeft">Dodaj recenzje</div> </Link>*/}
                                <Link class="noneDecorationLink" onClick={this.adminZarzadzanie_EditUser} >   <div className="itemCenter">Użytkownicy</div> </Link>

                            </div>

                            <div className="option2">
                                <Link class="noneDecorationLink" onClick={this.adminZarzadzanie_EditMovie} >  <div className="itemRight">Edytuj film</div> </Link>
                                {/* todo RECENZJA*/}
                                {/*<div className="itemRight">Edytuj recenzje</div>*/}
                            </div>
                        </div>







                    </div>




            );
        else return (<div></div>)
    }
}

export default Options;