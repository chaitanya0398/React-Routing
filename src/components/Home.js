import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      len: 0,
      load: false
    };
  }
  componentDidMount() {
    this.setState({ load: true }, () => {
      axios.get(`https://8rzw0.csb.app/db.json`).then(res => {
        const persons = res.data.applicants.length;
        this.setState({ len: persons, load: false });
      });
    });
  }
  render() {
      return <h1>No. of applications are: {this.state.len}</h1>
  }
}
export default Home;
