import React, { Component } from "react";
import axios from "axios";

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", phone: "", pan: "" };
  }
  addName = event => {
    this.setState({ name: event.target.value });
  };
  addPhone = event => {
    this.setState({ phone: event.target.value });
  };
  addPan = event => {
    this.setState({ pan: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios.post("https://8rzw0.csb.app/db.json", this.state).then(resp => {
      this.setState({ name: "", phone: "", pan: "" });
    });
  };
  render() {
    return (
      <div>
        <h1>Application Form</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Applicant Name: <br /><br />
              <input type="text" name="name" onChange={event => this.addName(event)} />
            </label>
            <br />
            <label>
              Phone Number: <br /><br />
              <input type="tel" name="phone" onChange={event => this.addPhone(event)} />
            </label>
            <br />
            <label>
              PAN card: <br /><br />
              <input type="text" name="name" onChange={event => this.addPan(event)} />
            </label>
            <br /><br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
export default Application;
