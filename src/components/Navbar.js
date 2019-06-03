import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AuthService from "./auth/auth-service";

class Nav extends Component {
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
    // this.service.logout()
    axios.post(`${process.env.REACT_APP_LOCAL_HOST}/logout`).then(() => {
      this.setState({ loggedInUser: null });
      this.props.getTheUser(this.state.loggedInUser);
    });
  };

  showNav() {
    if (this.state.loggedInUser) {
      return (
        <nav>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Welcome, {this.state.loggedInUser.username}
          </Link>
          <Link
            to="/dashboard"
            style={{ textDecoration: "none", color: "black" }}
          >
            {" "}
            Dashboard{" "}
          </Link>
          <Link to="/after5" style={{ textDecoration: "none", color: "black" }}>
            After Five
          </Link>
          <Link
            to="/"
            onClick={() => this.logoutUser()}
            style={{ textDecoration: "none", color: "black" }}
          >
            Logout
          </Link>
        </nav>
      );
    } else {
      return (
        <nav>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Side Hustle{" "}
          </Link>
          <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>
            Start Hustlin'
          </Link>
          <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
            {" "}
            Log In{" "}
          </Link>
        </nav>
      );
    }
  }

  render() {
    return <div>{this.showNav()}</div>;
  }
}
export default Nav;
