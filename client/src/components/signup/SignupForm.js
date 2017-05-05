import React, { Component } from 'react';
import Input from '../Input';
import API from '../API';
import {
  Button
} from 'reactstrap';

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


        return (
            <div className="signupFormDiv">
            <div className="cardTopSignup">
                <h1>Join Our Community!</h1>
            </div>

            <form id="signupForm" onSubmit={this.handleSubmit}>
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
                <Button type="submit">SIGN UP</Button>
              </form>



            {/*<select value={this.state.currentUserId} onChange={this.handleChange}>
                            {this.state.users.map((user, index) => <option key={index} key={user.id} value={user.id} {...user} > {user.username}</option>)}
                        </select>*/}
        
            </div>
        );
    }
}




export default SignupForm;