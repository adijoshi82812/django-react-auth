import React, { Component } from 'react';

import Nav from './components/Nav';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

class App extends Component{
  constructor(){
    super();
    this.state = {
      logged_in: localStorage.getItem('token') ? true : false,
      display_form: localStorage.getItem('token') ? "" : "login",
      username: "",
    };
  }

  componentDidMount(){
    if(this.state.logged_in){
      fetch('http://localhost:8000/users/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
      .then(res => res.json())
      .then(json => {
        if(json.username){
          this.setState({
            display_form: '',
            username: json.username,
          });
        }else{
          localStorage.removeItem('token');
        }
      });
    }
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

  handleLogout = () => {
    localStorage.removeItem('token');
    this.setState({
      logged_in: false,
      display_form: 'login',
      username: '',
    });
  };

  handleFormDisplay = (form) => {
    this.setState({
      display_form: form
    });
  };

  handleSignUp = (data) => {
    fetch('http://localhost:8000/users/user_list/', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
      if(json.token){
        localStorage.setItem('token', json.token)
        this.setState({
          logged_in: true,
          display_form: '',
          username: json.username
        });
      }else{
        alert('Username already exists');
      }
    });
  };

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

      case 'signup':
        form = (
          <SignUpForm
            handleSignUp={this.handleSignUp}
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
          handleLogout={this.handleLogout}
          handleFormDisplay={this.handleFormDisplay}
        />
        {form}
        {this.state.logged_in ? "Welcome " + this.state.username : ""}
      </div>
    );
  }
}

export default App;