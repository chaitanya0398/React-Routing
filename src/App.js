import React, { Component } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Components/Navigation";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Navigation />
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
