import React from 'react';
import ChildCompnent from './ChildComponent';

class FormReact extends React.Component {
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
    <>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="username">Username</label><br />
            <input
              type="text"
              id="username"
              value={this.state.username}
              onChange={this.handleChangeUserName}
            />
            <br></br>
            <label htmlFor="password">Password</label><br />
            <input
              type="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
            <br></br>
            <label htmlFor="fullname">Full name</label><br></br>
            <input
              type="text"
              id="fullname"
              value={this.state.fullname}
              onChange={this.handleChangeFullName}
            />
            <br></br>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <ChildCompnent
         name={'Trân  Ngọc Hưng'}

         
         />
    </>

    );
  }
}

export default FormReact;
