import React, { Component } from 'react';

class LoginForm extends Component{
    constructor(){
        super();
        this.state = {
            credentials: {
                username: "",
                password: ""
            }
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({ credentials: cred });
    }

    render(){
        return(
            <div
                style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}
                className="w3-card-4 w3-round"
            >
                <h1
                    className="w3-center"
                >
                    Login
                </h1>
                <form>
                    <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        placeholder="Enter your username"
                        onChange={this.handleChange}
                        className="w3-input w3-border w3-margin-bottom w3-round"
                    />
                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        placeholder="Enter your password"
                        onChange={this.handleChange}
                        autoComplete="false"
                        className="w3-input w3-border w3-margin-bottom w3-round"
                    />
                    <button
                        type="button"
                        onClick={() => this.props.handleLogin(this.state.credentials)}
                        className="w3-button w3-round w3-blue"
                    >
                        Login
                    </button>
                </form>
            </div>
        );
    }
}

export default LoginForm;