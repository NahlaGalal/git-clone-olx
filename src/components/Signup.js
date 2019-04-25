import React, { Component } from "react";
import Input from "./Input";
import firebase from "../firebase";

import "../style/signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "./modal";

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
      modalIsOpen: false
    };
    this.ref = firebase.firestore().collection("Users");
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
      this.addToFirebase();
    }
  };

  addToFirebase = () => {
    const { Name, User, Mail, Password, Phone, City } = this.state;
    this.ref
      .add({
        Name,
        User,
        Mail,
        Password,
        Phone,
        City
      })
      .then(docref => {
        this.setState({ unvalid: "valid" });
        this.props.history.push("/");
      })
      .catch(error => console.log(error));
  };

  render() {
    let modalText =
      this.state.unvalid === "missing" ? (
        <p>Missing data</p>
      ) : this.state.unvalid === "pass" ?(
        <p>Your passwords don't match</p>
      ) : this.state.unvalid === "user" ? (
        <p>This user name is used before </p>
      ) : '' ;

    return (
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
