import React, { Component } from "react";
import axios from "axios";

class Edit extends Component {
  constructor(props) {
    super(props);

    this.onChangeTodoCompleted = this.onChangeTodoCompleted(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      desc: "",
      date: "",
      priority: "",
      completed: false
    };
  }
  componentDidMount() {
    axios
      .get("/DB", this.props.match.params.id)
      //concatenating link to id
      .then(response => {
        this.setState({
          desc: response.data.desc,
          date: response.data.date,
          priority: response.data.priority,
          completed: response.data.completed
        });
      })
      .catch(err => {
        console.log(err);
      });
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
  onChangeTodoCompleted(e) {
    this.setState({
      completed: !this.state.completed
    });
  }
  onSubmit(e) {
    e.preventDefault();
    console.log("formsubmitted");
    console.log("desc", `${this.state.desc}`);
    console.log("date", `${this.state.date}`);
    console.log("prio", `${this.state.priority}`);
    console.log("comp", `${this.state.completed}`);
    const obj = {
      completed: this.state.completed,
      desc: this.state.desc,
      date: this.state.date,
      priority: this.state.priority
    };
    axios
      .post("db/update/" + this.props.match.params.id, obj)
      .then(res => console.log(res.data));

    this.props.history.push("/list");
  }

  render() {
    return (
      <div>
        <h3> Update ToDo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              className="from-control"
              value={this.state.desc}
              onChange={this.onChangeDesc}
            />
          </div>
          <div className="form-group">
            <label>Complete by:</label>
            <input
              type="date"
              className="from-control"
              value={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="completedCheckbox"
              name="completedCheckbox"
              onChange={this.onChangeTodoCompleted}
              checked={this.state.completed}
              value={this.state.completed}
            />
            <label className="form-check-label" htmlFor="completedCheckbox">
              Completed
            </label>
            <br />
            <div className="form-group">
              <input
                type="submit"
                value="update todo"
                className="btn btn-primary"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Edit;
