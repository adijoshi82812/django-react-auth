import React, { Component } from 'react';

import Nav from './components/Nav';
import LoginForm from './components/LoginForm';

class App extends Component{
  constructor(){
    super();
    this.state = {
      logged_in: localStorage.getItem('token') ? true : false,
      display_form: "login",
      username: "",
    };
  }

  handleLogin = (cred) => {
    fetch('http://localhost:8000/auth-token/', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cred)
    })
    .then(res => res.json())
    .then(json => {
      if(json.token){
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          display_form: '',
          username: json.user.username
        });
      }else{
        alert("Wrong Credentials");
      }
    });
  }

  render(){
    let form;
    switch(this.state.display_form){
      case 'login':
        form = (
          <LoginForm
            handleLogin={this.handleLogin}
          />
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
        {this.state.logged_in ? "Logged In" : ""}
      </div>
    );
  }
}

export default App;