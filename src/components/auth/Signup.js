import React, { Component } from "react";
import AuthService from "./auth-service";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import axios from "axios";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.service = new AuthService();
  }

  // handleChange() and handleSubmit() will be added here
  handleFormSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    console.log(
      "the state when signing up ============== ",
      this.state,
      username,
      password
    );
    var theData = {
      username: this.state.username,
      password: this.state.password
    };

    console.log("the env file when signing up --------------- ", process.env);
    // this.service
    //   .signup(username, password)
    axios
      .post(`${process.env.REACT_APP_LOCAL_HOST}/signup`, theData)
      // .post("http://localhost:5000/api/signup", theData)
      .then(response => {
        console.log("this is the response after signup --------- ", response);
        this.setState({
          username: "",
          password: ""
        });
        this.props.getUser(response);
        this.props.history.push("/dashboard");
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
              lg="10"
              style={{
                maxWidth: "!0vw",
                paddingLeft: "13vw",
                paddingTop: "13vh"
              }}
            >
              <form onSubmit={this.handleFormSubmit}>
                <p
                  className="h4 text-center mb-4"
                  style={{ textTransform: "uppercase" }}
                >
                  Start Hustlin'
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
                  placeholder="ex:Scottstots1"
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
                  placeholder="Password must be 8 characters or longer"
                />
                <div className="text-center mt-4">
                  <MDBBtn outline color="elegant" type="submit">
                    Sign Up
                  </MDBBtn>
                </div>
                <p className="font-small grey-text d-flex justify-content-center">
                  Already have an account?
                  <Link
                    to="/login"
                    className="dark-grey-text font-weight-bold ml-1"
                  >
                    Log In
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

export default Signup;
