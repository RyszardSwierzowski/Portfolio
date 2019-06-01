import React from 'react';


class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {


        };
    }


    render() {
        return (
            <div >
                <div>
                    <div><img src={this.props.avatarUrl} alt="Avatar" height="100" width="100"/></div>
                    <div>Witaj {this.props.userName}</div>

                </div>





            </div>
        );
    }
}

export default App;
