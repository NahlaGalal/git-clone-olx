import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Input from "./Input";
import firebase from "../firebase";

import "../style/home.css";
import image from "../Images/lab1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "./modal";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: "",
      Password: "",
      modalIsOpen: false,
      modalHeader: "",
      modalText: ""
    };
    this.ref = firebase.firestore().collection("Users");
  }

  changeInput = e => this.setState({ [e.target.name]: e.target.value });
  hideModal = () => {
    this.setState({ modalIsOpen: false });
  };
  forgetPassword = () => {
    let modalText = (
      <div>
        <label htmlFor="mail">Enter your e-mail address</label>
        <input
          type="email"
          name="email"
          id="mail"
          placeholder="Enter your email"
        />
      </div>
    );
    this.setState({ modalIsOpen: true, modalHeader: "Assurance", modalText });
  };

  sendMail = () => {};

  handleSubmit = e => {
    e.preventDefault();
    this.ref.onSnapshot(querySnapshot => {
      const data = querySnapshot.docs.filter(
        doc =>
          doc.data().User === this.state.User &&
          doc.data().Password === this.state.Password
      );
      if (data[0]) {
        localStorage.setItem("userId", data[0].id);
        this.props.history.push("/profile/" + data[0].id);
      } else {
        const errorLogin = <p>User name or password is wrong</p>;
        this.setState({
          modalIsOpen: true,
          modalHeader: "Error",
          modalText: errorLogin
        });
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="home container">
          <main>
            <nav>
              <ul>
                <li>
                  {" "}
                  <NavLink to="/">All</NavLink>{" "}
                </li>
                <li>
                  {" "}
                  <NavLink to="/">Books</NavLink>{" "}
                </li>
                <li>
                  {" "}
                  <NavLink to="/">Electronics</NavLink>{" "}
                </li>
                <li>
                  {" "}
                  <NavLink to="/">Furniture</NavLink>{" "}
                </li>
                <li>
                  {" "}
                  <NavLink to="/">Cars</NavLink>{" "}
                </li>
              </ul>
            </nav>

            <section className="card">
              <img src={image} alt="image1" />
              <div className="description">
                <h2>Laptop Dell inspiron n-4050</h2>
                <p>7800 LE.</p>
                <p className="city">
                  <FontAwesomeIcon icon="location-arrow" /> Mansoura
                </p>
                <Link to="/">Read More...</Link>
              </div>
            </section>
            <section className="card">
              <img src={image} alt="image2" />
              <div className="description">
                <h2>Laptop Dell inspiron n-4050</h2>
                <p>7800 LE.</p>
                <p className="city">
                  <FontAwesomeIcon icon="location-arrow" /> Mansoura
                </p>
                <Link to="/">Read More...</Link>
              </div>
            </section>
            <section className="card">
              <img src={image} alt="image3" />
              <div className="description">
                <h2>Laptop Dell inspiron n-4050</h2>
                <p>7800 LE.</p>
                <p className="city">
                  <FontAwesomeIcon icon="location-arrow" /> Mansoura
                </p>
                <Link to="/">Read More...</Link>
              </div>
            </section>
            <section className="card">
              <img src={image} alt="image4" />
              <div className="description">
                <h2>Laptop Dell inspiron n-4050</h2>
                <p>7800 LE.</p>
                <p className="city">
                  <FontAwesomeIcon icon="location-arrow" /> Mansoura
                </p>
                <Link to="/">Read More...</Link>
              </div>
            </section>
          </main>
          {!localStorage.getItem("userId") ? 
          <aside>
            <form onSubmit={this.handleSubmit}>
              <h1>Join Us Now</h1>
              <Input
                name="User"
                label="User Name"
                type="text"
                text="Enter your user name"
                icon="user"
                warning="You must type your name"
                changeInput={this.changeInput}
              />
              <Input
                name="Password"
                label="Password"
                type="password"
                text="Enter your password"
                icon="key"
                warning="You must type your password"
                changeInput={this.changeInput}
              />
              <div className="login-links">
                <Link to="/" onClick={this.forgetPassword}>
                  Forget your password?
                </Link>
                <Link to="/signup">Sign up</Link>
              </div>
              <input type="submit" value="Login" />
            </form>
          </aside> : ''
          }
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          header={this.state.modalHeader}
          text={this.state.modalText}
          OkButton={this.sendMail}
          hideModal={this.hideModal}
        />
      </React.Fragment>
    );
  }
}
