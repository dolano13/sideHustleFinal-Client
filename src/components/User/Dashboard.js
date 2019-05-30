import React, { Component } from "react";
import List from "./Todos.js/List";
import BusinessPlan from "./BusinessPlan";
import { Container, Col, Row } from "react-bootstrap";

class Dashboard extends Component {
  render() {
    return (
      <div
        className="mainContainer"
        // style={{
        //   backgroundImage: "url(./pics/desk-home-office-indoors-1036808.jpg)",
        //   backgroundSize: "cover",
        //   margin: "0%",
        //   padding: "0%",
        //   overflow: "hidden"
        //   // backgroundColor: "red"
        // }}
      >
        <h2 style={{ fontFamily: "Work Sans", textTransform: "uppercase" }}>
          Dashboard
        </h2>
        {/* <div class="mainContainer" style={{
        backgroundImage: "url(./img/background7.jpg)",
        backgroundSize: "cover",
        height: "90vh",
        width: "100%",
        margin: "0px",
        padding: "0px",
        overflowX: "hidden"
      }}> */}
        {/* </div> */}
        <Container>
          <Row>
            <Col sm={6}>
              <List />
            </Col>
            <Col lg={true}>
              <BusinessPlan />
            </Col>
          </Row>
        </Container>
        <h1>this is the dashboard</h1>
        {/* <List /> */}
        {/* <BusinessPlan /> */}

        <p> their own posts (delete/edit feature)</p>

        <p> business plan template</p>
      </div>
    );
  }
}

export default Dashboard;
