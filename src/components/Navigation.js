import React, { Component } from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import Wrap from "./Wrap";
class Navigation extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <NavLink
            className="navlink"
            exact
            activeClassName="navlink-selected"
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className="navlink"
            activeClassName="navlink-selected"
            to="/details"
          >
            Details
          </NavLink>

          <NavLink
            className="navlink"
            activeClassName="navlink-selected"
            to="/application"
          >
            Application
          </NavLink>
        </div>

        <Wrap />
      </div>
    );
  }
}
export default Navigation;
