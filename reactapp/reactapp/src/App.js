import React from 'react';
import MovieFullPage from './movie/MovieFullPage'




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
          <MovieFullPage />
      </div>
  );
}
}

export default App;
