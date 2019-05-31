import React, { Component } from "react";
import axios from "axios";
import Add from "./AddIdea";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";

class Ideas extends Component {
  state = {
    modal14: false
  };
  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };
  constructor(props) {
    super(props);
    this.state = {
      theIdea: []
    };
  }
  componentDidMount() {
    console.log("calling the idea", process.env);
    console.log("these are the props ------------------------ ", this.props);
    this.getTheIdeasFromServer();
  }

  getTheIdeasFromServer() {
    axios
      .get(`${process.env.REACT_APP_LOCAL_HOST}/api/theIdea`, {
        withCredentials: true
      })
      .then(res => {
        console.log("the response ----", res.data);
        this.setState({
          theIdea: res.data
        });
        console.log(
          "the one item ====",
          res.data,
          "the state >>>>> ",
          this.state
        );
      })
      .catch(err => console.log(err));
  }

  deleteIdea = theId => {
    console.log(
      "this is the id of the target to be deleted _+_+_++_+_++_+_+_+_+_+_+_++__++_+_+_ ",
      theId
    );

    axios
      .post(`${process.env.REACT_APP_LOCAL_HOST}/api/deleteIdea/${theId}`, {
        withCredentials: true
      })
      .then(() => {
        this.getTheIdeasFromServer();
      })
      .catch(err => console.log("Error deleting idea", err));
  };

  showIdea = () => {
    console.log("::::::::::::::::::::::::::::::::::::::: ", this.state);
    if (this.state.theIdea) {
      console.log(
        "we found the ideas ><>><><>><><><><><>>>><><>< ",
        this.state
      );
      return this.state.theIdea.map(eachIdea => {
        return (
          <div
            style={{
              border: ".5px solid white",
              marginBottom: "3vh",
              padding: "1vh 1vw"
            }}
          >
            <h5 style={{ fontFamily: "Work Sans", textTransform: "uppercase" }}>
              {eachIdea.ideas}
            </h5>
            <p
              style={{
                fontFamily: "Work Sans",
                fontSize: "small",
                textAlign: "justify"
              }}
            >
              {eachIdea.desc}
            </p>
            <a
              href={eachIdea.url}
              style={{
                fontFamily: "Work Sans",
                textDecoration: "none",

                display: "flex",
                fontSize: "small",
                justifyContent: "right",
                marginTop: "-10px",

                color: "white"
              }}
            >
              Click for more info
            </a>
            <br />
            <button
              onClick={() => this.deleteIdea(eachIdea._id)}
              style={{
                display: "flex",
                justifyContent: "right",
                background: "none",
                border: "none",
                marginLeft: "auto",
                fontFamily: "Work Sans",
                fontSize: "small",
                marginTop: "-45px",
                color: "white"
              }}
            >
              Delete
            </button>
          </div>
        );
      });
    }
  };
  addIdea = idea => {
    console.log("adding an idea  >>>>>>>>>>>>>>>>>>>>>> ", idea);
    this.setState({
      theIdea: [...this.state.theIdea, idea]
    });
  };
  render() {
    return (
      <div
        style={{
          // backgroundColor: "#E1E0E0",
          backgroundImage: "url(/pics/desk-home-office-indoors-1036808.jpg)",
          backgroundSize: "cover",

          backgroundPosition: "center"
        }}
      >
        <div>
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
              Simple Ideas, Great Potential
            </h2>
          </div>
          <div className="formBox" style={{ margin: "0 20%" }}>
            <MDBContainer>
              <MDBBtn
                size="sm"
                outline
                color="elegant"
                onClick={this.toggle(14)}
                style={{ fontFamily: "Work Sans" }}
              >
                Add a Hustle
              </MDBBtn>
              <MDBModal
                isOpen={this.state.modal14}
                toggle={this.toggle(14)}
                centered
              >
                <MDBModalHeader toggle={this.toggle(14)}>
                  Add a Hustle
                </MDBModalHeader>
                <MDBModalBody>
                  <Add ideas={this.state.theIdea} addIdea={this.addIdea} />{" "}
                </MDBModalBody>
                {/* <MDBModalFooter>
                  <MDBBtn color="secondary" onClick={this.toggle(14)}>
                    Close
                  </MDBBtn> */}
                {/* <MDBBtn
                    color="primary"
                    type="submit"
                    value="Add a Hustle"
                    style={{
                      textTransform: "uppercase",
                      fontFamily: "Work Sans"
                    }}
                  >
                    Add
                  </MDBBtn> */}
                {/* </MDBModalFooter> */}
              </MDBModal>
            </MDBContainer>

            {/* <Add ideas={this.state.theIdea} addIdea={this.addIdea} />{" "} */}
          </div>
        </div>

        <div
          style={{
            height: "100%",
            backgroundColor: "#ffdf00",

            margin: "0px 15%",
            padding: "0 5%"
          }}
        >
          {this.showIdea()}
        </div>
      </div>
    );
  }
}

export default Ideas;
