import React, { Component } from 'react';
import UserListHeader from './user-list-header';
import _ from 'lodash';
import UserSingle from './user-single';

class UserList extends Component {

    renderUserList() {
        const props = _.omit(this.props, 'users')
        return _.map(this.props.users, (user, index)=> {
            return <UserSingle key= {index} {...user} {...props}/>
        })
    }
    render() {
        return (
            <table>
                <UserListHeader />
                <tbody>
                    {this.renderUserList()}
                </tbody>
            </table>
        );
    }
}

export default UserList;