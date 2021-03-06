import React, { Component } from "react";
import { MDBBtn } from "mdbreact";

class BusinessPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleChange(e) {
    console.log("typing", e);
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("sectionsubmitted");
    console.log("answers", `${this.state}`);
    //make a new object containing input elements and values
    // const newTodo = {
    //   desc: this.state.desc,
    //   date: this.state.date,
    //   priority: this.state.priority,
    //   completed: this.state.completed
    // };
    // //the link to whatver page you are posting on & new consta as second argument
    // axios.post("db/add", newTodo).then(res => console.log(res.data));
    // this.setState({
    //   desc: "",
    //   date: "",
    //   priority: "",
    //   completed: false
    // });
  }

  render() {
    return (
      <div
        style={{
          height: "100%",
          backgroundColor: "#ffdf00",

          margin: "0px 15%",
          padding: "0 5%"
        }}
      >
        {/* <h4> One Page Business Plan</h4> */}
        {/* <p>Answer the following questions as succintly as possible. </p> */}
        <div className="bizplan">
          <form onSubmit={this.handleSubmit}>
            <div className="pt1">
              <h5>Overview:</h5>
              <label>
                What will you sell or what service will you provide?
                <br />
                <textarea
                  name="pt1a"
                  value={this.state.pt1a}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Who will buy/use the service?
                <textarea
                  name="pt1b"
                  value={this.state.pt1b}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                How will this idea help people?
                <textarea
                  name="pt1c"
                  value={this.state.pt1c}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="pt2">
              <h5>Let's Talk Money:</h5>
              <label>
                What will you charge?
                <textarea
                  name="pt2a"
                  value={this.state.pt2a}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                How will you profit?
                <textarea
                  name="pt2b"
                  value={this.state.pt2b}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                What's the cost of production?
                <textarea
                  name="pt2c"
                  value={this.state.pt2c}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                How can you subsidize the project?
                <textarea
                  name="pt2d"
                  value={this.state.pt2d}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="pt3">
              <h5>Hustling</h5>
              <label>
                How will customers learn about your business?
                <textarea
                  name="pt3a"
                  value={this.state.pt3a}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                What marketing tactics will you use (i.e flyer, word of mouth,
                social media, etc.)?
                <textarea
                  name="pt3b"
                  value={this.state.pt3b}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Who can you encourage referrals?
                <textarea
                  name="pt3c"
                  value={this.state.pt3c}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="pt4">
              <h5>Road to Success</h5>
              <label>
                How will you measure your success- think in metrics. Goal number
                of customers? Annual net income?
                <textarea
                  name="pt4a"
                  value={this.state.pt4a}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                What's your estimated time frame for the business to take off?
                <textarea
                  name="pt4b"
                  value={this.state.pt4b}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                What events can you attend to help you reach your goal?
                <textarea
                  name="pt4c"
                  value={this.state.pt4c}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="pt5">
              <h5>All About the Climb</h5>
              <label>
                What is your biggest concern?
                <textarea
                  name="pt5a"
                  value={this.state.pt5a}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                How do you plan on tackling this concern?
                <textarea
                  name="pt5b"
                  value={this.state.pt5b}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Any other challenges or questions that you can see arising
                throughout your process?
                <textarea
                  name="pt5c"
                  value={this.state.pt5c}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Plan ahead, how can you avoid or manage these?
                <textarea
                  name="pt5d"
                  value={this.state.pt5d}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <MDBBtn size="sm" outline color="elegant" onClick={this.toggle}>
                Submit{" "}
              </MDBBtn>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default BusinessPlan;
