import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Navbar from "./components/Navbar";
import AuthService from "./components/auth/auth-service";
import Login from "./components/auth/Login";
import Ideas from "./components/HustleAfter5.js/Ideas";
import Dash from "./components/User/Dashboard";
import LandingPage from "./components/LandingPage/LandingPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }
  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service
        .loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          });
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          });
        });
    }
  }

  getTheUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  showRoutes() {
    if (this.state.loggedInUser) {
      return (
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/after5" component={Ideas} />
          <Route exact path="/dashboard" component={Dash} />
        </Switch>
      );
    } else {
      return (
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            exact
            path="/signup"
            render={() => <Signup getUser={this.getTheUser} />}
          />
          <Route
            exact
            path="/login"
            render={() => <Login getUser={this.getTheUser} />}
          />
        </Switch>
      );
    }
  }

  //   {/* <Navbar bg="light" expand="lg">
  //   <Navbar.Brand href="/">Side Hustle</Navbar.Brand>
  //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //   <Navbar.Collapse id="basic-navbar-nav">
  //     <Nav className="mr-auto">
  //       <Nav.Link href="/">Home</Nav.Link>
  //       <Nav.Link href="/login">Log In</Nav.Link>
  //       <NavDropdown title="Start Hustlin" id="basic-nav-dropdown">
  //         <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
  //       </NavDropdown>
  //     </Nav>
  //   </Navbar.Collapse>
  // </Navbar> */}

  render() {
    this.fetchUser();
    return (
      <div className="App">
        <Navbar
          userInSession={this.state.loggedInUser}
          getTheUser={e => this.getTheUser(e)}
        />
        <Switch>
          <Route exact path="/after5" component={Ideas} />
          <Route exact path="/dashboard" component={Dash} />
          {/* {this.showJoinUsForm()} */}
          {this.showRoutes()}
        </Switch>
        {/* <LandingPage /> */}
      </div>
    );
  }
}

export default App;
