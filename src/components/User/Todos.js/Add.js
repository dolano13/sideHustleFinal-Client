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
      priority: this.state.priority
      // completed: this.state.completed
    };
    console.log(
      "the props before adding todo ..................... ",
      this.props
    );
    //the link to whatver page you are posting on & new consta as second argument

    axios
      .post(`${process.env.REACT_APP_LOCAL_HOST}/add/todo`, this.state, {
        withCredentials: true
      })
      .then(todoList => {
        console.log(todoList);
        console.log("all new todo", newTodo);
        // this.props.addTodo(todoList.data.newTodo);
        this.setState({
          desc: "",
          date: "",
          priority: ""
          // completed: false
        });
      });
  }
  deleteTodo = theTodo => {
    console.log(
      "this is the id of the target to be deleted _+_+_++_+_++_+_+_+_+_+_+_++__++_+_+_ ",
      theTodo
    );

    axios
      .post(`${process.env.REACT_APP_LOCAL_HOST}/api/deleteIdea/${theTodo}`, {
        withCredentials: true
      })
      .then(() => {
        this.todoList();
      })
      .catch(err => console.log("Error deleting idea", err));
  };

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
            <label>Priority</label>
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
              value="Add Item"
              style={{
                textTransform: "uppercase",
                fontFamily: "Work Sans",
                background: "none",
                border: "none"
              }}
            />
            {/* <button onClick={() => this.deleteTodo(theTodo._id)}>Done</button> */}
          </div>
        </form>
      </div>
    );
  }
}

export default Add;
