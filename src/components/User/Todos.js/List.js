import React, { Component } from "react";

import Add from "./Add";

class List extends Component {
  render() {
    console.log(
      "the props from the dashboard <<<<<<<<<<<<<<<<<<<<<<< ",
      this.props
    );
    return (
      <div>
        <Add theUser={this.props.theUser.theUser} />
      </div>
    );
  }
}

export default List;
