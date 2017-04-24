import React, { Component } from 'react';
import './App.css';
import UserList from './user-list';
import CreateUser from './create-user';
import _ from 'lodash';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [{
        name: 'yasir',
        isGraduated: true
      }, {
        name: 'Tariq',
        isGraduated: false
      }]
    }

    this.createUser = this.createUser.bind(this);
    this.onToggleName = this.onToggleName.bind(this);
    this.onDeleteName = this.onDeleteName.bind(this);
    this.onSaveName = this.onSaveName.bind(this);

  }

  createUser(name) {
    this.state.users.push({
      name,
      isGraduated: false
    })
    this.setState({
      users: this.state.users
    })
  }

  onToggleName(name) {
    const foundUser=_.find(this.state.users, user => user.name === name);
    foundUser.isGraduated=!foundUser.isGraduated;
    this.setState({
      users: this.state.users
    })
  }

    onDeleteName(nameToDelete){
    _.remove(this.state.users, user=> user.name === nameToDelete)
    this.setState({
      users:this.state.users
    })
  }

    onSaveName(prevUserName, newUserName) {
    const foundUser=_.find(this.state.users, user => user.name === prevUserName);
    foundUser.name=newUserName;
    this.setState({
      users: this.state.users
    })
  }

  render() {
    return (
      <div>
        <h1>User List</h1>
        <CreateUser createUser={this.createUser} />
        <UserList users={this.state.users}
          onToggleName={this.onToggleName}
          onDeleteName={this.onDeleteName}
          onSaveName={this.onSaveName}
        />
      </div>
    );
  }
}

export default App;
