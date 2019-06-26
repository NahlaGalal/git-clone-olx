import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import "../style/navbar.css";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logOutUser } from "../actions";

class Navbar extends Component {
  handleClick = e => e.target.nextElementSibling.classList.toggle("hidden");
  displayNav = e =>
    e.currentTarget.parentElement.nextElementSibling.classList.toggle("hidden");

  logOut = () => {
    this.props.logOutUser();
    this.props.history.push("/home");
  };

  render() {
    const isUser = this.props.userId ? localStorage.getItem("token") : undefined;

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
              <NavLink to={`/addItem/${isUser ? this.props.userId : "error"}`}>
                Add Item
              </NavLink>
            </li>
            <li>
              {!isUser ? (
                <NavLink to="/signup"> Sign up </NavLink>
              ) : (
                <NavLink to={`/profile/${this.props.userId}`}>Profile</NavLink>
              )}{" "}
            </li>
            <li>
              <NavLink to="/about"> About </NavLink>
            </li>
            {isUser && (
              <li>
                <NavLink to="/logout" onClick={this.logOut}>
                  {" "}
                  Log out{" "}
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  userId: state.joinUser !== "" ? state.joinUser : localStorage.getItem("uid")
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ logOutUser }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
