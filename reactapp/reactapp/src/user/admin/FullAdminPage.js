import React from 'react';
import '../../css/MainCss.css'
import Options from './userOptions/Options'



import Stopka from '../../stopka/Stopka'
import Menu from '../../menu/Menu'


class FullAdminPage extends React.Component {
    constructor(props) {
        super(props);


        this.state = {};
    }

    componentDidMount = async () => {
        if (!sessionStorage.getItem('userId'))
            window.location.replace('/')
        else if(sessionStorage.getItem('role')!=='ROLE_ADMIN'){
           alert('brak dostepu')// todo przekierowac na brak dostepepu

        }

    }


    // exportAllFavorites = () => {
    //     let allFavorites = []
    //     this.state.favorites.forEach(item => allFavorites.push(<UserFavorites id={item}/>))
    //
    //     return allFavorites;
    // }

    render() {

        if (sessionStorage.getItem('token'))
            return (<div>
                    <Menu/>
                    <div id="body">

                        <div id="content">
                            <div class="element_Renderowany"><Options/></div>




                        </div>
                    </div>
                    <Stopka/>
                </div>

            );
        else return (<div></div>)
    }
}

export default FullAdminPage;