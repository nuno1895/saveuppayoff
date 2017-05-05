import React, { Component } from 'react';
import LoginForm from './LoginForm';
import '../stylesheets/LoginForm.css';


class LoginPage extends Component {
  render() {
    return (
            <div className="row">
                <div className="col-md-2 col-md-offset-4" />

                <div className="col-md-8 col-md-offset-4 loginForm" >
                    <LoginForm />
                </div>

                <div className="col-md-2 col-md-offset-4" />

            </div>

    );
  }
}

export default LoginPage;

//fetch users