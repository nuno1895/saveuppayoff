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
            password : '',
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
 

        var emailPassword = {
            password : evt.target.children[2].value,
            email: evt.target.children[1].value
        }

        API.logIn(emailPassword)
            .then((emailPassword) => {
                console.log(emailPassword.data);
                     localStorage.setItem('user_id', emailPassword.data.user_id);
                     localStorage.setItem('email', emailPassword.data.email);
                     localStorage.setItem('username', emailPassword.data.username);
                     console.log(localStorage.getItem('username'));
                     console.log(localStorage.getItem("user_id"));
                      localStorage.getItem("user_id");
                      console.log(emailPassword.data.user_id);


                       window.location = '/'
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
                <div className="welcomeBackLogin">
                <img className="whiteSImg" src={require('../../../public/images/white-s.png')} mode='fit' />

                    <h1>Welcome back!</h1>
                </div>

            <form id="loginForm" onSubmit={this.handleSubmit}>
                <Input 
                className="loginInput" 
                name ="username"
                placeholder="username" />

                <Input 

                className="loginInput" 
                name="email"
                placeholder="email" />

                <Input
                type='password'
                className="loginInput"
                name="password" 
                placeholder="password" />
                <br />
                <br />


                {/* inline conditional rendering: */}
                <Button className="loginSub" type="submit">LOG IN</Button>
              </form>
              <p><span>Forgot your password?</span><span className="newToSpan">Don't have an account?   <strong><a href="/signup">SIGN UP!</a></strong></span>
</p>


            </div>
        );
    }
}


export default LoginForm;