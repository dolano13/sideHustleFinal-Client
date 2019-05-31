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

class Dashboard extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  render() {
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
                <List />
              </MDBModalBody>
              <MDBModalHeader toggle={this.toggle}>To-Do </MDBModalHeader>
              <MDBModalBody>
                <h1>THIS IS WHERE U WILL SHOW NEW TO DO ITEMS</h1>
              </MDBModalBody>
            </MDBModal>
          </MDBContainer>
        </div>

        <h3> One Page Business Plan</h3>
        <BusinessPlan />
      </div>
    );
  }
}

export default Dashboard;
