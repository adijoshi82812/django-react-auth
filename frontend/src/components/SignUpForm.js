import React, { Component } from 'react';

class SignUpForm extends Component{
    constructor(){
        super();
        this.state = {
            data: {
                username: "",
                password: ""
            }
        };
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const Data = this.state.data;
        Data[event.target.name] = event.target.value;
        this.setState({ data: Data });
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
                    Sign Up
                </h1>
                <form>
                    <input
                        type="text"
                        name="username"
                        value={this.state.data.username}
                        placeholder="Choose a username"
                        onChange={this.handleChange}
                        className="w3-input w3-border w3-round w3-margin-bottom"
                    />
                    <input
                        type="password"
                        name="password"
                        value={this.state.data.password}
                        placeholder="Type a password"
                        onChange={this.handleChange}
                        autoComplete="false"
                        className="w3-input w3-border w3-round w3-margin-bottom"
                    />
                    <button
                        type="button"
                        onClick={() => this.props.handleSignUp(this.state.data)}
                        className="w3-button w3-blue w3-round"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        );
    }
}

export default SignUpForm;