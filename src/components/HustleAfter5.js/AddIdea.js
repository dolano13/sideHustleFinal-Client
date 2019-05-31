import React, { Component } from "react";
import axios from "axios";

class AddIdea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: "",
      desc: "",
      url: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_LOCAL_HOST}/api/after5`, this.state, {
        withCredentials: true
      })
      .then(ideasFromServer => {
        console.log(ideasFromServer.data);
        this.props.addIdea(ideasFromServer.data.newIdea);
        this.setState({
          ideas: "",
          desc: "",
          url: ""
        });
      });
  }
  render() {
    console.log("here are the props in add idea ===== ", this.props);
    return (
      <div>
        <form onSubmit={e => this.onSubmit(e)}>
          <div className="form-group">
            <label>Title:</label>
            <br />
            <input
              name="ideas"
              type="text"
              className="form-control"
              value={this.state.idea}
              onChange={e => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <br />
            <textarea
              name="desc"
              type="text"
              className="form-control"
              value={this.state.desc}
              onChange={e => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Extra Help (Useful Links):</label>
            <br />
            <input
              name="url"
              type="text"
              className="form-control"
              value={this.state.url}
              onChange={e => this.handleChange(e)}
            />
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
          </div>
        </form>
      </div>
    );
  }
}
export default AddIdea;
