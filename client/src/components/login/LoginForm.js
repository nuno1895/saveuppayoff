import React, { Component } from 'react';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { 
            users : [],
            currentUserId : 0
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

    render() {
        return (
            <div>
            <h1>Who Are You?</h1>

            {this.state.currentUserId}
            <select value={this.state.currentUserId} onChange={this.handleChange}>
                {this.state.users.map((user, index) => <option key={index} key={user.id} value={user.id} {...user} > {user.username}</option>)}
            </select>
            </div>
        );
    }
}



export default LoginForm;