import React, { Component } from "react";
import AuthService from "./auth-service";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

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
      <div
        className="mainContainer"
        style={{
          backgroundImage: "url(./pics/desk-home-office-indoors-1036808.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: `${window.innerHeight}px`
        }}
      >
        <MDBContainer style={{ fontFamily: "Work Sans" }}>
          <MDBRow>
            <MDBCol
              lg="10
        "
              style={{
                maxWidth: "!0vw",
                paddingLeft: "13vw",
                paddingTop: "20vh"
              }}
            >
              <form onSubmit={this.handleFormSubmit}>
                <p
                  className="h4 text-center mb-4"
                  style={{ textTransform: "uppercase" }}
                >
                  Log In
                </p>
                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                  Username
                </label>
                <input
                  id="defaultFormLoginEmailEx"
                  className="form-control"
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={e => this.handleChange(e)}
                />
                <br />
                <label
                  htmlFor="defaultFormLoginPasswordEx"
                  className="grey-text"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={e => this.handleChange(e)}
                  id="defaultFormLoginPasswordEx"
                  className="form-control"
                />
                <div className="text-center mt-4">
                  <MDBBtn outline color="elegant" type="submit">
                    Log in
                  </MDBBtn>
                </div>
                <p className="font-small grey-text d-flex justify-content-center">
                  Don't have an account?
                  <Link
                    to={"/signup"}
                    className="dark-grey-text font-weight-bold ml-1"
                  >
                    Sign Up
                  </Link>
                </p>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Login;
