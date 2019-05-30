import React, { Component } from "react";
import axios from "axios";

class Ideas extends Component {
  state = {
    theIdea: []
  };
  componentDidMount() {
    console.log("calling the idea");
    axios
      .get(`${process.env.MONGO_URI}/theIdea`, { withCredentials: true })
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
          {/* <a href={eachIdea.url} /> */}
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
      <div>
        {this.showIdea()}
        <p> also need an ADD idea feature</p>
        <p> also save to dashboard feature ??</p>
        <h3>SEARCH</h3>
      </div>
    );
  }
}

export default Ideas;
