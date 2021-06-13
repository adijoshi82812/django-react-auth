import React, { Component } from 'react';

import Nav from './components/Nav';

class App extends Component{
  constructor(){
    super();
    this.state = {
      logged_in: localStorage.getItem('token') ? true : false,
    };
  }

  render(){
    return(
      <div>
        <Nav
          logged_in={this.state.logged_in}
        />
      </div>
    );
  }
}

export default App;