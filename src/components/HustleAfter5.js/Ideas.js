import React, { Component } from "react";
import axios from "axios";
class Ideas extends Component {
  state = {
    theIdea: []
  };
  componentDidMount() {
    console.log("calling the idea", process.env);
    axios
      .get(`${process.env.REACT_APP_LOCAL_HOST}/api/theIdea`, {
        withCredentials: true
      })
      .then(res => {
        console.log("the response ----", res.data);
        return res.data.map((oneIdea, i) => {
          console.log("the one item ====", res.data);
          this.setState({
            theIdea: res.data
          });
          return <h6 key={i}>The idea is: {this.state.theIdea}</h6>;
        });
      })
      .catch(err => console.log(err));
  }
  showIdea = () => {
    console.log(this.state);
    return this.state.theIdea.map(eachIdea => {
      return (
        <div>
          <strong>{eachIdea.ideas}</strong>
          <p>{eachIdea.desc}</p>
          <p>{eachIdea.url} </p>
        </div>
      );
    });
  };
  addIdea = idea => {
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
        {this.showIdea()}
      </div>
    );
  }
}

export default Ideas;
