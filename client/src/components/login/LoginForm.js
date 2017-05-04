import React, { Component } from 'react';
import {createStore} from 'redux';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { 
            users : [],
            currentUserId : 0,
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

    handleChange = (event) => {
        this.setState({currentUserId: event.target.value});
    }

    handleLoginClick() {
      this.setState({ isLoggedIn: true });
      let store = createStore(store, this.state.currentUserId);
      console.log(store.getState());
    }

    handleLogoutClick() {
      this.setState({ isLoggedIn : false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button = null;
        if (isLoggedIn) {
            button = <button onClick={this.handleLogoutClick}>Log Out</button>;
        } else {
            button = <button onClick={this.handleLoginClick}>Log In</button>;
        }

        return (
            <div>
            <h1>Who Are You?</h1>

            <select value={this.state.currentUserId} onChange={this.handleChange}>
                {this.state.users.map((user, index) => <option key={index} key={user.id} value={user.id} {...user} > {user.username}</option>)}
            </select>
            
            {button}

            </div>
        );
    }
}



export default LoginForm;