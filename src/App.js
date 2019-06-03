import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Navbar from "./components/Navbar";
import AuthService from "./components/auth/auth-service";
import Login from "./components/auth/Login";
import Ideas from "./components/HustleAfter5.js/Ideas";
import Dash from "./components/User/Dashboard";
import LandingPage from "./components/LandingPage/LandingPage";
import Axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentDidMount() {
    console.log("mount");
    Axios.get("/getLists")
      .then(todos => {
        console.log("todos", todos);
      })
      .catch(err => {
        console.log(err);
      });
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
    console.log("I will now try to redirect !", window.history);
    // window.location.href = process.env.REACT_APP_LOCAL_CLIENT;
  };

  showRoutes() {
    if (this.state.loggedInUser) {
      return (
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/after5" component={Ideas} />
          <Route
            exact
            path="/dashboard"
            component={Dash}
            theUser={this.state.loggedInUser}
          />
        </Switch>
      );
    } else {
      return (
        <Switch>
          <Route exact path="/" component={LandingPage} />

          <Route
            exact
            path="/signup"
            render={() => (
              <Signup getUser={this.getTheUser} component={Signup} />
            )}
          />
          <Route
            exact
            path="/login"
            // component={Login}
            render={({ history }) => <Login getUser={this.getTheUser} />}
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
          {/* <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} /> */}
          {this.showRoutes()}
        </Switch>
      </div>
    );
  }
}

export default App;
