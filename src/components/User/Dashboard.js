import React, { Component } from "react";
import List from "./Todos.js/List";
import BusinessPlan from "./BusinessPlan";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader
} from "mdbreact";
import axios from "axios";

class Dashboard extends Component {
  state = {
    modal: false,
    theUser: null
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
      theUser: this.props.location.state.theUser
    });
  };

  componentDidMount() {
    console.log("the user from dashboard ============ ", this.props.getUser);
  }

  render() {
    console.log(
      "the props in the dashboard ------ ",
      this.props,
      "the State >>>>>>>>>>>> ",
      this.state
    );
    return (
      <div
        style={{
          backgroundImage: "url(/pics/desk-home-office-indoors-1036808.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "Work Sans",
              textTransform: "uppercase",
              height: "10vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            Everyday I'm Hustlin'
          </h2>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <MDBContainer>
            <MDBBtn size="sm" outline color="elegant" onClick={this.toggle}>
              To-Do List{" "}
            </MDBBtn>

            <MDBModal
              isOpen={this.state.modal}
              toggle={this.toggle}
              backdrop={false}
              size="lg"
              side
              position="top-left"
            >
              <MDBModalHeader toggle={this.toggle}>
                Add Your To-Do{" "}
              </MDBModalHeader>
              <MDBModalBody>
                <List theUser={this.state} />
                {/* </MDBModalBody> */}
                {/* <MDBModalHeader toggle={this.toggle}>To-Do </MDBModalHeader> */}
                {/* <MDBModalBody> */}
                <h3>To-Do</h3>
              </MDBModalBody>
            </MDBModal>
          </MDBContainer>
        </div>

        <h4 style={{ alignText: "left" }}> One Page Business Plan</h4>
        <BusinessPlan />
      </div>
    );
  }
}

export default Dashboard;
