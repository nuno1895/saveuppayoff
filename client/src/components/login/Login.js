import React, { Component } from 'react';
import LoginForm from './LoginForm';
import '../stylesheets/LoginForm.css';


class LoginPage extends Component {
  render() {
    return (
            <div className="row loginRow">
                <div className="col-md-2 col-md-offset-2" />

                <div className="col-md-8 col-md-offset-8 loginForm" >
                    <LoginForm />
                </div>

                <div className="col-md-2 col-md-offset-2" />

            </div>

    );
  }
}

export default LoginPage;

//fetch users