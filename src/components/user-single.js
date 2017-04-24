import React, { Component } from 'react';

class UserSingle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }

        this.onEditClick = this.onEditClick.bind(this);
        this.renderActionBtns = this.renderActionBtns.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
        this.renderNamesSection = this.renderNamesSection.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
    }

    onEditClick() {
        this.setState({
            isEditing: true
        })
    }


    onSaveClick(e) {
        e.preventDefault();
        const prevUserName = this.props.name;
        const newUserName = this.refs.textInput2.value;

        this.props.onSaveName(prevUserName, newUserName);
        this.setState({
            isEditing: false
        });

    }


    onCancelClick() {
        this.setState({
            isEditing: false
        })
    }

    renderNamesSection() {
        const {name, isGraduated} = this.props
        const nameStyle = {
            color: isGraduated ? 'green' : 'red',
            cursor: 'pointer'
        }

        if (this.state.isEditing) {
            return (
                <td>
                    <form onSubmit={this.onSaveClick}>
                        <input  defaultValue={name} ref="textInput2" />
                    </form>
                </td>
            );
        } else {
            return <td style={nameStyle}
                onClick={this.props.onToggleName.bind(this, name)}
            >
                {name}
            </td>
        }

    }



    renderActionBtns() {
        if (this.state.isEditing) {
            return (
                <td>
                    <button onClick={this.onSaveClick}>Save</button>
                    <button onClick={this.onCancelClick}>Cancel</button>
                </td>
            );
        } else {
            return (
                <td>
                    <button onClick={this.onEditClick}>Edit</button>
                    <button onClick={this.props.onDeleteName.bind(this, this.props.name)}>Delete</button>
                </td>
            );
        }
    }
    render() {
        return (
            <tr>
                {this.renderNamesSection()}
                {this.renderActionBtns()}
            </tr>
        );
    }
}

export default UserSingle;