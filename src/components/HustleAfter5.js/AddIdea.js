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
    this.onChangeIdea = this.onChangeIdea.bind(this);
    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.onChangeUrl = this.onChangeUrl.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChangeIdea(e) {
    this.setState({
      ideas: e.target.value
    });
  }

  onChangeDesc(e) {
    this.setState({
      desc: e.target.value
    });
  }
  onChangeUrl(e) {
    this.setState({
      url: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    axios
      .post(`${process.env.MONGO_URI}/after5`, this.state, {
        withCredentials: true
      })
      .then(ideasFromServer => {
        console.log(ideasFromServer);
        this.props.addIdea(ideasFromServer.data.newIdea);
      });
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.onSubmit(e)}>
          <div className="form-group">
            <label>Idea Title:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.idea}
              onChange={e => this.onChangeIdea(e)}
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea
              type="text"
              className="form-control"
              value={this.state.desc}
              onChange={e => this.onChangeDesc(e)}
            />
          </div>
          <div className="form-group">
            <label>More Info (Useful Links):</label>
            <input
              type="text"
              className="form-control"
              value={this.state.url}
              onChange={e => this.onChangeUrl(e)}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}
export default AddIdea;
