import React, { Component } from "react";
import AuthService from "./auth-service";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBInput
} from "mdbreact";

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
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form onSubmit={this.handleFormSubmit}>
              <p className="h4 text-center mb-4">Sign in</p>
              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Your email
              </label>
              <input
                type="email"
                id="defaultFormLoginEmailEx"
                className="form-control"
              />
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                Your password
              </label>
              <input
                type="password"
                id="defaultFormLoginPasswordEx"
                className="form-control"
              />
              <div className="text-center mt-4">
                <MDBBtn color="indigo" type="submit">
                  Login
                </MDBBtn>
              </div>
              <p className="font-small grey-text d-flex justify-content-center">
                Don't have an account?
                <a href="#!" className="dark-grey-text font-weight-bold ml-1">
                  Sign up
                </a>
              </p>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

// <div>
//   <div
//     className="login"
//     style={{
//       backgroundImage: "url(./images/blank-composition-data-373076.jpg)",
//       backgroundSize: "cover",
//       width: "100%",
//       overflow: "hidden"
//     }}
//   />
//   <form onSubmit={this.handleFormSubmit}>
//     <label>Username:</label>
//     <input
//       type="text"
//       name="username"
//       value={this.state.username}
//       onChange={e => this.handleChange(e)}
//     />
//     <br />
//     <label>Password:</label>
//     <input
//       type="password"
//       name="password"
//       value={this.state.password}
//       onChange={e => this.handleChange(e)}
//     />
//     <br />
//     <input type="submit" value="Log In" />
//   </form>
//   <p>
//     Don't have account?
//     <Link to={"/signup"}> Sign Up</Link>
//   </p>
// </div>
//     );
//   }
// }

export default Login;
