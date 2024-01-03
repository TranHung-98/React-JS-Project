import React from 'react';

/**
 * Props (property) là dùng để truyền data sang cong và không co truyền ngược lại
 */

  class ChildCompnent extends React.Component {
  state = {
    username: '',
    password: '',
    fullname: '',
  }

  handleChangePassword = (event) => {
    this.setState({
      password: event.target.value
    });
  }

  handleChangeUserName = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  handleChangeFullName = (event) => {
    this.setState({
      fullname: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    console.log('Form submitted:', this.state);
  }

  render() {
    return (
      <div>
       My name is {this.props.name}
      </div>
    );
  }
}

export default ChildCompnent;
