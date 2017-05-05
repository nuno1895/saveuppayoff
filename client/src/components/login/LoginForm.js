import React, { Component } from 'react';
import {createStore} from 'redux';
import API from '../API';
import Input from '../Input';
import {
  Button
} from 'reactstrap';


class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSignupClick = this.handleSignupClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { 
            username : '',
            email : '',
            password_hash : '',
            isLoggedIn: false
        };
    }

    componentDidMount(){
        return fetch("/users").then(res => res.json()).then(users => {
            this.setState({
                users
            });
        });
    }

    handleChangeUsername = (event) => {
        this.setState({ username : event.target.value });
    }
    handleChangeEmail = (event) => {
        this.setState({ email : event.target.value });
    }
    handleChangePassword = (event) => {
        this.setState({ password_hash : event.target.value });
    }

    handleSignupClick() {
      this.setState({ isLoggedIn: true });
      
    }

    handleLogoutClick() {
      this.setState({ isLoggedIn : false });
    }

    handleSubmit(evt){
        evt.preventDefault();
        // const nameSubmit = this.state.username;
        // const emailSubmit = this.state.email;
        // const passwordSubmit = this.state.password_hash;

        // signupActions.userSignupRequest(nameSubmit, emailSubmit, passwordSubmit);

        //username, password, email

        var userEmail = { 
            email: evt.target.children[2].value
        }
        debugger;

        API.logIn(userEmail)
            .then((email) => {
                console.log(email);

                debugger;
            })
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button = null;
        if (isLoggedIn) {
            button = <button onClick={this.handleLogoutClick}>Log Out</button>;
        } else {
            button = <button onClick={this.handleSignupClick}>Log In</button>;
        }

        return (
            <div className="logInDiv">
                <div className="cardTopLogin">
                    <h1>Join Our Community!</h1>
                </div>

            <form id="loginForm" onSubmit={this.handleSubmit}>
                <Input 
                className="signupInput" 
                name ="username"
                placeholder="username" />
                <br />
                <br />
                <br />
                <Input 

                className="signupInput" 
                name="email"
                placeholder="email" />
                <br />
                <br />
                <br />
                <Input
                type='password'
                className="signupInput"
                name="password" 
                placeholder="password" />
                <br />
                <br />


                {/* inline conditional rendering: */}
                <Button type="submit">Log in</Button>
              </form>


            </div>
        );
    }
}


export default LoginForm;