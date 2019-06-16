import React from 'react';
import '../../../css/MainCss.css'
import '../css/Admin.css'


class Options extends React.Component {
    constructor(props) {
        super(props);


        this.state = {};
    }


    render() {

        if (sessionStorage.getItem('token'))
            return (
                    <div class="element_Renderowany" id="glownyKontener">
                        <h1>Wybierz czym chcesz zarządać </h1>
                        <div>
                            <div className="option">
                                <div className="itemLeft">Dodaj nowy film</div>
                                <div className="itemLeft">Dodaj recenzje</div>
                                <div className="itemCenter">Użytkownicy</div>
                            </div>

                            <div className="option2">
                                <div className="itemRight">Edytuj film</div>
                                <div className="itemRight">Edytuj recenzje</div>
                            </div>
                        </div>







                    </div>




            );
        else return (<div></div>)
    }
}

export default Options;