import React from 'react';
import avatar1 from '../../img/avatar-baby-head-with-a-small-heart-outline.png'
import avatar2 from '../../img/avatar-cow-face-front.png'
import avatar3 from '../../img/avatar-fighter-mask.png'
import avatar4 from '../../img/avatar-joker-face.png'
import avatar5 from '../../img/avatar-princes.png'
import avatar6 from '../../img/avatar-male-hair-of-head-and-face-shapes.png'
import '../../css/MainCss.css'
import axios from 'axios'


import {Link} from "react-router-dom";
import defaultAvatar from "../../img/avatar-DEFAULT.png";


class EditUserElement extends React.Component {
    constructor(props) {
        super(props);
        this.bindowanieFormularza = this.bindowanieFormularza.bind(this);

        this.state = {
            name: this.props.user.name,
            isEdit: false,
            id: this.props.user.id,
            email: this.props.user.email,
            password: this.props.user.password,
            role: this.props.user.role

        };
    }

    componentDidMount() {
        let avatarId = this.props.user.avatarUrl;
        if (avatarId === '0')
            this.setState({avatar: defaultAvatar})
        else if (avatarId === '1')
            this.setState({avatar: avatar1})
        else if (avatarId === '2')
            this.setState({avatar: avatar2})
        else if (avatarId === '3')
            this.setState({avatar: avatar3})
        else if (avatarId === '4')
            this.setState({avatar: avatar4})
        else if (avatarId === '5')
            this.setState({avatar: avatar5})
        else if (avatarId === '6')
            this.setState({avatar: avatar6})
    }

    changeIsEdit = () => {
        this.setState({isEdit: !this.state.isEdit})
    }

    bindowanieFormularza(event) {

        const target = event.target;
        const value = target.value;

        const state = {...this.state}

        state[target.name] = value;


        this.setState(state);
    }

    update = async () => {
        this.changeIsEdit();

        let url = 'http://localhost:8080/api/user/update/';
        const f = await axios.post(url, {
            "id": this.state.id,
            "name": this.state.name,
            "password": this.state.password,
            "email": this.state.email,
            "role": this.state.role,
            "avatarUrl": this.state.avatarUrl
        })
        window.location.reload();

    }

    włączEdycje = () => {

        if (this.state.isEdit === false) {
            {
                // this.setState({isEdit:true})
                return (
                    <div><input type="button" value="Edytuj" onClick={this.changeIsEdit}/></div>


                )
            }
        } else {
            // this.setState({isEdit:false})

            if (Number(this.props.user.id) == Number(sessionStorage.getItem('userId'))) {
                return (
                    <div>

                        <div>
                            <form onSubmit={this.update}>


                                <select className="EditUserElementItem"
                                        onChange={this.bindowanieFormularza}
                                        name="role"
                                        defaultValue={this.state.role}
                                        disabled="true">
                                    <option value='ROLE_ADMIN'>ROLE_ADMIN</option>
                                    <option value='ROLE_NORMAL'>ROLE_NORMAL</option>
                                </select><br/>

                                <input defaultValue={this.props.user.email}
                                       className="EditUserElementItem"
                                       name="email"
                                       type="text"
                                       placeholder="email"
                                       required="true"
                                       onChange={this.bindowanieFormularza}/><br/>
                                <input defaultValue={this.props.user.password}
                                       className="EditUserElementItem"
                                       type="password"
                                       placeholder="hasło"
                                       required="true"
                                       onChange={this.bindowanieFormularza}
                                       name="password"/><br/>
                                <input className="EditUserElementItem"
                                       type="submit"
                                       value="Zapisz"/><br/>
                                <input className="EditUserElementItem" type="button" value="Anuluj" onClick={this.changeIsEdit}/>
                            </form>

                        </div>
                    </div>

                )
            } else {
                return (
                    <div>

                        <div>
                            <form onSubmit={this.update}>
                                


                                <select className="EditUserElementItem"
                                        onChange={this.bindowanieFormularza}
                                        name="role"
                                        defaultValue={this.state.role}
                                >
                                    <option value='ROLE_ADMIN'>ROLE_ADMIN</option>
                                    <option value='ROLE_NORMAL'>ROLE_NORMAL</option>
                                </select><br/>

                                <input defaultValue={this.props.user.email}
                                       className="EditUserElementItem"
                                       name="email"
                                       type="text"
                                       placeholder="email"
                                       required="true"
                                       onChange={this.bindowanieFormularza}/><br/>
                                <input defaultValue={this.props.user.password}
                                       className="EditUserElementItem"
                                       type="password"
                                       placeholder="hasło"
                                       required="true"
                                       onChange={this.bindowanieFormularza}
                                       name="password"/><br/>
                                <input className="EditUserElementItem"
                                       type="submit"
                                       value="Zapisz"/>
                                <br/>
                                <input className="EditUserElementItem" type="button" value="Anuluj" onClick={this.changeIsEdit}/>
                            </form>

                        </div>
                    </div>

                )
            }
        }


    }


    render() {

        return (<div class="element_Renderowany">
                <div className="floatLeft">
                    <div><img src={this.state.avatar}/></div>
                    <div>User ID : {this.props.user.id}</div>
                    <div>Login : {this.props.user.name}</div>
                    <div>Uprawnienia : {this.props.user.role}</div>
                    <div>Adres email : {this.props.user.email}</div>
                    <div>Hasło : {this.props.user.password}</div>

                </div>
                <div>{this.włączEdycje()}</div>
                <div className="clearBoth"></div>

                {/**/}

            </div>


        );

    }
}

export default EditUserElement;