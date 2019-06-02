import React, { Component } from "react";


 export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fridge_name: "nazwa",
            fridge_cost: 10
        };


    }
    //
    // KlikniecieSubmit2 = async (event) => {
    //     event.preventDefault();
    //
    //     const zapytanie = await axios.post('http://localhost:8080/api/fridge/', {
    //         fridge_name: this.state.fridge_name,
    //         fridge_cost: this.state.fridge_cost,
    //     });
    //
    //
    // }
    //
    // bindowanieFormularza(event) {
    //     const target = event.target;
    //     const value = target.value;
    //     const state = { ...this.state }
    //
    //     state[target.name] = value;
    //
    //     this.setState(state);
    // }



    render() {
        return (
            <div className="App">

                {this.state.user}
                <form onSubmit={this.KlikniecieSubmit2}>

                    <label style={{ paddingRight: '140px' }}>a: </label><br />
                    <input type="text" name="login" value={this.state.fridge_name} required  /><br />
                    <label style={{ paddingRight: '140px' }}>b: </label><br />
                    <input type="password" name="haslo" value={this.state.fridge_cost} required  /><br /><br />

                    <button color="primary">Zaloguj się!</button>

                </form>
            </div>
        );
    }
};export default  Login;
