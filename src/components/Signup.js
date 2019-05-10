import React, { Component } from "react";
import ReactLoading from "react-loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Input from "./Input";
import firebase, { auth } from "../firebase";
import Modal from "./modal";

import "../style/signup.css";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      User: "",
      Mail: "",
      Password: "",
      RePassword: "",
      Phone: "",
      City: "",
      unvalid: "valid",
      modalIsOpen: false,
      isLoading: false
    };
  }

  changeInput = e => this.setState({ [e.target.name]: e.target.value });
  hideModal = () => this.setState({ modalIsOpen: false });

  handleSelectBlur = e => {
    if (e.target.value === "")
      e.target.nextElementSibling.style.display = "block";
    else e.target.nextElementSibling.style.display = "none";
  };

  handleSubmit = e => {
    e.preventDefault();
    let validity = true;
    Object.keys(this.state).forEach(
      key => (validity = this.state[key] === "" ? false : validity)
    );
    if (!validity) this.setState({ unvalid: "missing", modalIsOpen: true });
    else if (this.state.Password !== this.state.RePassword)
      this.setState({ unvalid: "pass", modalIsOpen: true });
    else {
      auth
        .createUserWithEmailAndPassword(
          this.state.Mail,
          this.state.Password
        )
        .then(data => this.addToFirebase(data.user.uid))
        .catch(err => {
          console.log(err);
          this.setState({ unvalid: "user", modalIsOpen: true });
        });
    }
  };

  addToFirebase = userId => {
    const { Name, User, Mail, Phone, City } = this.state;
    this.setState({ isLoading: true }, () => {
      firebase
        .firestore()
        .collection("Users")
        .doc(userId)
        .set({
          Name,
          User,
          Mail,
          Phone,
          City
        })
        .then(() => {
          this.setState({ unvalid: "valid", isLoading: false });
          this.props.history.push("/");
        })
        .catch(error => console.log(error));
    });
  };

  render() {
    let modalText =
      this.state.unvalid === "missing" ? (
        <p>Missing data</p>
      ) : this.state.unvalid === "pass" ? (
        <p>Your passwords don't match</p>
      ) : this.state.unvalid === "user" ? (
        <p>This e-mail  is used before </p>
      ) : (
        ""
      );

    return this.state.isLoading ? (
      <ReactLoading
        type="balls"
        color="#f6f9fc"
        height={200}
        width={200}
        className="loading"
      />
    ) : (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} className="signup">
          <h1>Create your account</h1>
          <div className="form-group">
            <Input
              name="Name"
              label="Full Name"
              type="text"
              text="Enter your full name"
              icon="user"
              warning="You must type your name"
              required="true"
              changeInput={this.changeInput}
            />
            <Input
              name="User"
              label="User Name"
              type="text"
              text="Enter your user name"
              icon="user"
              warning="You must type your user name"
              required="true"
              changeInput={this.changeInput}
            />
          </div>
          <div>
            <Input
              name="Mail"
              label="Email Address"
              type="email"
              text="Enter your e-mail"
              icon="envelope"
              warning="You must type your e-mail"
              required="true"
              changeInput={this.changeInput}
            />
          </div>
          <div className="form-group">
            <Input
              name="Password"
              label="Password"
              type="password"
              text="Enter your password"
              icon="key"
              warning="You must type your password"
              required="true"
              changeInput={this.changeInput}
            />
            <Input
              name="RePassword"
              label="Confirm Password"
              type="password"
              text="Re-enter your password"
              icon="key"
              warning="You must re-type your name"
              required="true"
              changeInput={this.changeInput}
            />
          </div>
          <div>
            <Input
              name="Phone"
              label="Phone Number"
              type="text"
              text="Enter your phone number"
              icon="phone"
              warning="You must type your phone"
              required="true"
              changeInput={this.changeInput}
            />
          </div>
          <div>
            <label htmlFor="city">
              City<span>*</span>
            </label>
            <select
              defaultValue=""
              id="city"
              name="City"
              onChange={this.changeInput}
              onBlur={this.handleSelectBlur}
            >
              <option value="">Choose your city</option>
              <option value="Mansoura">Mansoura</option>
              <option value="El-Mahalla">El-Mahalla</option>
              <option value="Cairo">Cairo</option>
              <option value="Alexandria">Alexandria</option>
            </select>
            <p>
              <FontAwesomeIcon icon={"exclamation-triangle"} /> You must choose
              your city
            </p>
            <FontAwesomeIcon icon="location-arrow" />
          </div>
          <input type="submit" value="Sign up" />
        </form>
        <Modal
          isOpen={this.state.modalIsOpen}
          hideModal={this.hideModal}
          addItem={this.addItem}
          header="Warning"
          text={modalText}
        />
      </React.Fragment>
    );
  }
}
