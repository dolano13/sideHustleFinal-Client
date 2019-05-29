import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Navbar from "./components/Navbar";
import AuthService from "./components/auth/auth-service";
import Login from "./components/auth/Login";
import Ideas from "./components/HustleAfter5.js/Ideas";
import Dash from "./components/User/Dashboard";

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
          <Route exact path="/after5" component={Ideas} />
          <Route exact path="/dashboard" component={Dash} />
        </Switch>
      );
    } else {
      return (
        <Switch>
          <Route
            exact
            path="/signup"
            render={() => <Signup getUser={this.getTheUser} />}
          />
          <Route
            exact
            path="/"
            render={() => <Login getUser={this.getTheUser} />}
          />
        </Switch>
      );
    }
  }

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
          <Route
            exact
            path="/signup"
            render={() => <Signup getUser={this.getTheUser} />}
          />
          <Route
            exact
            path="/"
            render={() => <Login getUser={this.getTheUser} />}
          />
        </Switch>
        {/* {this.showRoutes()} */}
      </div>
    );
  }
}

export default App;
