import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../firebase";

import "../style/navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
  }

  handleClick = e => e.target.nextElementSibling.classList.toggle("hidden");
  handleChange = e => this.setState({ search: e.target.value });
  displayNav = e =>
    e.currentTarget.parentElement.nextElementSibling.classList.toggle("hidden");
  logOut = () => auth.signOut().then(() => localStorage.removeItem("token"));

  render() {
    const isUser = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    return (
      <nav className="main-nav">
        <div className="container">
          <div className="responsive">
            <Link to="/" className="logo">
              {" "}
              <span>#</span> git clone OLX{" "}
            </Link>
            <button onClick={this.displayNav}>
              <p />
              <p />
              <p />
            </button>
          </div>
          <ul className="hidden">
            <li>
              <NavLink to="/home"> Home </NavLink>
            </li>
            <li className="categories">
              <button onClick={this.handleClick}>Categories </button>
              <div className="hidden">
                <ul>
                  <li>
                    <NavLink to="/categories/books"> Books </NavLink>{" "}
                  </li>
                  <li>
                    <NavLink to="/categories/electronics">
                      {" "}
                      Electronics{" "}
                    </NavLink>{" "}
                  </li>
                  <li>
                    <NavLink to="/categories/furniture"> Furniture </NavLink>{" "}
                  </li>
                  <li>
                    <NavLink to="/categories/cars"> Cars </NavLink>{" "}
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink to={`/addItem/${isUser ? userId : "error"}`}>
                Add Item
              </NavLink>
            </li>
            <li>
              {!isUser ? (
                <NavLink to="/signup"> Sign up </NavLink>
              ) : (
                <NavLink to={`/profile/${userId}`}>Profile</NavLink>
              )}{" "}
            </li>
            <li>
              <NavLink to="/about"> About </NavLink>
            </li>
            {isUser ? (
              <li>
                <NavLink to="/logout" onClick={this.logOut}>
                  {" "}
                  Log out{" "}
                </NavLink>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </nav>
    );
  }
}
