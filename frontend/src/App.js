import React, { Component } from 'react';

import Nav from './components/Nav';
import LoginForm from './components/LoginForm';

class App extends Component{
  constructor(){
    super();
    this.state = {
      logged_in: localStorage.getItem('token') ? true : false,
      display_form: 'login',
    };
  }

  render(){
    let form;
    switch(this.state.display_form){
      case 'login':
        form = (
          <LoginForm/>
        );
        break;

      default:
        form = null;
        break;
    }
    return(
      <div>
        <Nav
          logged_in={this.state.logged_in}
        />
        {form}
      </div>
    );
  }
}

export default App;