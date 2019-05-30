import React, { Component } from "react";
import AuthService from "./auth-service";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.service
      .login(username, password)
      .then(response => {
        this.setState({ username: "", password: "" });
        this.props.getUser(response);
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <div
          className="login"
          style={{
            backgroundImage: "url(./images/blank-composition-data-373076.jpg)",
            backgroundSize: "cover",
            width: "100%",
            overflow: "hidden"
          }}
        />
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <input type="submit" value="Log In" />
        </form>
        <p>
          Don't have account?
          <Link to={"/signup"}> Sign Up</Link>
        </p>
      </div>
    );
  }
}

export default Login;
