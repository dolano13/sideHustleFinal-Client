import React, { Component } from "react";
import List from "./Todos.js/List";
import BusinessPlan from "./BusinessPlan";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>this is the dashboard</h1>
        <List />
        <BusinessPlan />
        <p> about w their interests</p>
        <p> saved ideas --> w/notes or ways to prioritize</p>
        <p> their own posts (delete/edit feature)</p>
        <p> calendar or nodemailer??</p>
        <p> business plan template</p>
      </div>
    );
  }
}

export default Dashboard;
