import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "./auth/auth-service";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }
  logoutUser = () => {
    console.log("this is the props ----------- ", this.props);
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
      this.props.getTheUser(this.state.loggedInUser);
    });
  };
  render() {
    if (this.state.loggedInUser) {
      return (
        <nav className="nav-style">
          <h2>Welcome, {this.state.loggedInUser.username}</h2>
          <Link to="/after5" style={{ textDecoration: "none" }}>
            Projects
          </Link>
          <Link to="/" onClick={() => this.logoutUser()}>
            Logout
          </Link>
          <Link to="/dashboard"> Dashboard </Link>
        </nav>
      );
    } else {
      return (
        <nav className="nav-style">
          <ul>
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                Signup
              </Link>
            </li>
          </ul>
        </nav>
      );
    }
  }
}
export default Navbar;
