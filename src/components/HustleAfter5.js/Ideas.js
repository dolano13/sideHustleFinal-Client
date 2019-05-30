import React, { Component } from "react";
import axios from "axios";
import Add from "./AddIdea";
import { Container, Col, Row } from "react-bootstrap";

class Ideas extends Component {
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
          <div>
            <h5 style={{ fontFamily: "Work Sans", textTransform: "uppercase" }}>
              {eachIdea.ideas}
            </h5>
            <p
              style={{
                fontFamily: "Work Sans",
                fontSize: "small",
                textAlign: "start"
              }}
            >
              {eachIdea.desc}
            </p>
            <a
              href={eachIdea.url}
              style={{
                fontFamily: "Work Sans",
                textDecoration: "none",
                color: "black"
              }}
            >
              Extra Help
            </a>
            <br />
            <button onClick={() => this.deleteIdea(eachIdea._id)}>
              Delete Idea
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
      <div className="ideasContainer">
        <h2 style={{ fontFamily: "Work Sans", textTransform: "uppercase" }}>
          Simple Ideas, Great Potential
        </h2>
        <Container>
          <Row>
            <Col sm>{this.showIdea()}</Col>
          </Row>
        </Container>
        <Add ideas={this.state.theIdea} addIdea={this.addIdea} />
      </div>

      //         </h2>
      //         <Container>
      //   <Row>
      //     <Col sm={4}>sm=8</Col>
      //     <Col sm={4}>sm=4</Col>
      //      <Col sm={4}>sm=4</Col>

      //   </Row>
      //   <Row>
      //     <Col sm>sm=true</Col>
      //     <Col sm>sm=true</Col>
      //     <Col sm>sm=true</Col>
      //   </Row>
      // </Container>; */}
      //         {/* {this.showIdea()} */}
    );
  }
}

export default Ideas;
