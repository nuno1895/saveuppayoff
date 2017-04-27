import React, { Component } from 'react';
import './App.css';
import MainForm from './components/MainForm';
import Results from './components/Results';

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <MainForm />
        {/*<Results />*/}
        
        {/*<h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}*/}
        
      </div>
    );
  }
}

export default App;
