import React from 'react';
import MovieFullPage from './movie/MovieFullPage'
import UserFullPage from './user/UserFullPage'




export let userRole='user';
export let userId=1;

class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {


        };
    }


render() {
  return (
      <div >
          <UserFullPage/>
      </div>
  );
}
}

export default App;
