import React, { Component } from 'react';

class CreateUser extends Component {

    handleCreateUser(e){
        e.preventDefault();
        this.props.createUser(this.refs.inputUser.value);

    }

    render() {
        return (
            <form onSubmit={this.handleCreateUser.bind(this)}>
                <input type="text" placeholder="add user to the list" ref="inputUser"/>
                <button>Create</button>
            </form>
        );
    }
}

export default CreateUser;