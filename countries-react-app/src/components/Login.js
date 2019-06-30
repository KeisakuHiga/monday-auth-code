import React from 'react';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {

  handleInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  initLogin = (e) => {
    e.preventDefault()
    this.props.login(this.state)
  }

  render() {
    const { auth, user } = this.props
    if (auth || user) {
      return <Redirect to="/" />
    } else {
      return (
        <form>
          <label>Username</label>
          <input type="text" name="username" id="username" onChange={this.handleInput} />
          <label>Password</label>
          <input type="password" name="password" id="password" onChange={this.handleInput} />
          <input type="submit" value="Submit" onClick={this.initLogin} />
        </form>
      )
    }
  }
}

export default Login;