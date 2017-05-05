import React, { Component } from 'react';
// import {createStore} from 'redux';
import Input from '../Input';
// import signupActions from '../../actions/signupActions'
import API from '../API';

class SignupForm extends React.Component {

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

        var newUser = { 
        	username: evt.target.children[0].value, 
        	password: evt.target.children[1].value,
        	email: evt.target.children[2].value
        }
        debugger;

        API.signUp(newUser)
      		.then((newUser) => {
      			console.log(newUser);
      			localStorage.setItem('user_id', newUser.data.user_id);
      			localStorage.setItem('email', newUser.data.email);
      			localStorage.setItem('username', newUser.data.username);
      			console.log(localStorage.getItem("user_id"));
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
            <div className="signupFormDiv">
            <h1>Join Our Community!</h1>

            <form id="signupForm" onSubmit={this.handleSubmit}>
                <input type="text" 
                name="username"
                placeholder="username goes here" 
                 />

                <input type="text" 
                name="password"
                placeholder="password goes here" 
                 />

                 <input type="text" 
                 name="email"
                 placeholder="email goes here" 
                  />

                {/* inline conditional rendering: */}
                <input type="submit" />
              </form>

            <br />
            <br />

            {/*<select value={this.state.currentUserId} onChange={this.handleChange}>
                            {this.state.users.map((user, index) => <option key={index} key={user.id} value={user.id} {...user} > {user.username}</option>)}
                        </select>*/}
            
            {button}

            </div>
        );
    }
}

/*
	<Input className="signupInput" placeholder="username" onChange={this.handleChangeUsername} value={this.state.username} onSubmit={this.handleSubmit} />
	<br />
	<br />
	<br />
	<Input className="signupInput" placeholder="email" onChange={this.handleChangeEmail} value={this.state.email} onSubmit={this.handleSubmit} />
	<br />
	<br />
	<br />
	<Input className="signupInput" placeholder="password" onChange={this.handleChangePassword} value={this.state.password_hash} onSubmit={this.handleSubmit} />
*/


export default SignupForm;