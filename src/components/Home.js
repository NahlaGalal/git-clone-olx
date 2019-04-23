import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Input from "./Input";

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
      modalIsOpen: false
    };
  }

  changeInput = e => this.setState({ [e.target.name]: e.target.value });
	hideModal = () => {this.setState({modalIsOpen: false})}
	forgetPassword = () => {this.setState({modalIsOpen: true})}

	sendMail = () => {}

  handleSubmit = e => {
		e.preventDefault();
	};

  render() {
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
    )

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
          </aside>
        </div>
				<Modal 
				isOpen={this.state.modalIsOpen}
        header="Assurance"
        text={modalText}
				OkButton={this.sendMail}
				hideModal={this.hideModal}
				/>
      </React.Fragment>
    );
  }
}
