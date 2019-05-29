import React, { Component } from "react";
import axios from "axios";

class Add extends Component {
  constructor(props) {
    super(props);

    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangePri = this.onChangePri.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      desc: "",
      date: "",
      priority: "",
      completed: false
    };
  }
  onChangeDesc(e) {
    this.setState({
      desc: e.target.value
    });
  }
  onChangeDate(e) {
    this.setState({
      date: e.target.value
    });
  }
  onChangePri(e) {
    this.setState({
      priority: e.target.value
    });
  }
  //use axios here
  onSubmit(e) {
    e.preventDefault();
    console.log("formsubmitted");
    console.log("desc", `${this.state.desc}`);
    console.log("date", `${this.state.date}`);
    console.log("prio", `${this.state.priority}`);
    console.log("comp", `${this.state.completed}`);
    //make a new object containing input elements and values
    const newTodo = {
      desc: this.state.desc,
      date: this.state.date,
      priority: this.state.priority,
      completed: this.state.completed
    };
    //the link to whatver page you are posting on & new consta as second argument
    axios.post("db/add", newTodo).then(res => console.log(res.data));
    this.setState({
      desc: "",
      date: "",
      priority: "",
      completed: false
    });
  }
  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3> Create a New To Do</h3>
        <form onSubmit={e => this.onSubmit(e)}>
          <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.desc}
              onChange={e => this.onChangeDesc(e)}
            />
          </div>
          <div className="form-group">
            <label>Complete by:</label>
            <input
              type="date"
              className="form-control"
              value={this.state.date}
              onChange={e => this.onChangeDate(e)}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Low"
                checked={this.state.priority === "Low"}
                onChange={this.onChangePri}
              />
              <label className="form-check-label">Low</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Medium"
                checked={this.state.priority === "Medium"}
                onChange={this.onChangePri}
              />
              <label className="form-check-label">Medium</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="High"
                checked={this.state.priority === "High"}
                onChange={this.onChangePri}
              />
              <label className="form-check-label">High</label>
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Add To Do"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Add;
