import React, { Component } from "react";
import List from "./Todos.js/List";
import BusinessPlan from "./BusinessPlan";
import { Container, Col, Row } from "react-bootstrap";

class Dashboard extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#E1E0E0",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="mainContainer">
          <h2 style={{ fontFamily: "Work Sans", textTransform: "uppercase" }}>
            Dashboard
          </h2>

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
      </div>
    );
  }
}

export default Dashboard;
