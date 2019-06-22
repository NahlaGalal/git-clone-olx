import React, { Component } from "react";
import ReactLoading from "react-loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Input from "../components/Input";
import Modal from "../components/modal";

import "../style/signup.css";

import { connect } from "react-redux";
import { addField, signupValidation, addUser } from "../actions";
import { bindActionCreators } from "redux";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.validity = { validity: false, error: "Missing" };
    this.state = {
      modalIsOpen: false,
      modalType: ""
    };
  }

  changeInput = (name, value) => this.props.addField(name, value);

  hideModal = () => this.setState({ modalIsOpen: false });

  handleSelectBlur = e => {
    if (e.target.value === "")
      e.target.nextElementSibling.style.display = "block";
    else e.target.nextElementSibling.style.display = "none";
  };

  componentDidUpdate(prevProps) {
    if (Object.entries(this.validity).length === 0) {
      this.validity = this.props.validity;
      this.setState({
        modalIsOpen: !this.validity.validity,
        modalType: this.validity.error
      });
      if (this.validity.validity) this.props.addUser(this.props.userData);
    }
    if (this.props.joinUser !== "Failed" && this.props.joinUser !== "") this.props.history.push("/");
    else if (
      this.props.joinUser === "Failed" &&
      this.props.joinUser !== prevProps.joinUser
    )
      this.setState({ modalIsOpen: true, modalType: "User" });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.validity = {};
    this.props.signupValidation(this.props.userData);
  };

  render() {
    let modalText =
      this.state.modalType === "Missing" ? (
        <p>Missing data</p>
      ) : this.state.modalType === "Pass" ? (
        <p>Your passwords don't match</p>
      ) : this.state.modalType === "User" ? (
        <p>This e-mail is used before </p>
      ) : (
        ""
      );

    return this.props.isLoading ? (
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
              warning="You must re-type your password"
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
              onChange={e => this.changeInput(e.target.name, e.target.value)}
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

const mapStateToProps = state => ({
  userData: state.inputData,
  validity: state.validity,
  joinUser: state.joinUser,
  isLoading: state.isLoading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addField, signupValidation, addUser }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
