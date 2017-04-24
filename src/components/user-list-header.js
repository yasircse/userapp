import React, { Component } from 'react';

class UserListHeader extends Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>Users</th>
                    <th>Actions</th>
                </tr>
            </thead>
        );
    }
}

export default UserListHeader;