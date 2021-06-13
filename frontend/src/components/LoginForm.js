import React, { Component } from 'react';

class LoginForm extends Component{
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
                        placeholder="Enter your username"
                        className="w3-input w3-border w3-margin-bottom w3-round"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        className="w3-input w3-border w3-margin-bottom w3-round"
                    />
                    <button
                        type="button"
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