import React, { Component } from 'react';

class Nav extends Component{
    render(){
        const logged_out_nav = (
            <nav
                className="w3-bar w3-black w3-margin-bottom"
            >
                <button
                    onClick={() => this.props.handleFormDisplay('login')}
                    className="w3-bar-item w3-button w3-black"
                >
                    Login
                </button>
                <button
                    onClick={() => this.props.handleFormDisplay('signup')}
                    className="w3-bar-item w3-button w3-black"
                >
                    Signup
                </button>
            </nav>
        );

        const logged_in_nav = (
            <nav
                className="w3-bar w3-black w3-margin-bottom"
            >
                <button
                    onClick={this.props.handleLogout}
                    className="w3-bar-item w3-button w3-black w3-right"
                >
                    Logout
                </button>
            </nav>
        );

        return this.props.logged_in ? logged_in_nav : logged_out_nav;
    }
}

export default Nav;