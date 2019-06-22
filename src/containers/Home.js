import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import Input from "../components/Input";

import "../style/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../components/modal";

import { connect } from "react-redux";
import { getItemsByFilter, login, addField, forgetPassword } from "../actions";
import { bindActionCreators } from "redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      maodalType: "",
      verificationMail: ""
    };
  }

  componentDidMount() {
    this.props.getItemsByFilter("all");
  }

  componentDidUpdate(prevProps) {
    if (this.props.joinUser !== prevProps.joinUser) {
      if (this.props.joinUser !== "Failed" && this.props.joinUser !== "")
        this.props.history.push(`/profile/${this.props.joinUser}`);
      else if (this.props.joinUser === "Failed")
        this.setState({ modalIsOpen: true, modalType: "Invalid login" });
    }

    if (this.props.forgetPass !== prevProps.forgetPass)
      this.setState({ modalIsOpen: true, modalType: this.props.forgetPass });
  }

  changeInput = (name, value) => this.props.addField(name, value);
  hideModal = () => this.setState({ modalIsOpen: false });
  changeCategory = e =>
    this.props.getItemsByFilter(e.target.textContent.toLowerCase());

  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.props.userData);
  };

  forgetPassword = () => {
    this.setState({ modalIsOpen: true, modalType: "Forget password" });
  };

  sendMail = () => {
    this.props.forgetPassword(this.state.verificationMail);
  };

  render() {
    let modalText, modalHeader;
    switch (this.state.modalType) {
      case "Forget password":
        modalText = (
          <div>
            <label htmlFor="mail">Enter your e-mail address</label>
            <input
              type="email"
              name="email"
              id="mail"
              placeholder="Enter your email"
              onChange={e =>
                this.setState({ verificationMail: e.target.value })
              }
            />
          </div>
        );
        modalHeader = "Assurance";
        break;
      case "Invalid login":
        modalText = <p>The password or mail is invalid</p>;
        modalHeader = "Error";
        break;
      case "Reset password":
        modalText = <p>Please review your mail</p>;
        modalHeader = "Reset password";
        break;
      case "Invalid mail":
        modalText = <p>Invalid mail</p>;
        modalHeader = "Error";
        break;
      default:
        modalText = "";
        modalHeader = "";
        break;
    }

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
        <div className="home container">
          <main>
            <nav>
              <ul>
                <li>
                  <button onClick={this.changeCategory}>All</button>
                </li>
                <li>
                  <button onClick={this.changeCategory}>Books</button>
                </li>
                <li>
                  <button onClick={this.changeCategory}>Electronics</button>
                </li>
                <li>
                  <button onClick={this.changeCategory}>Furniture</button>
                </li>
                <li>
                  <button onClick={this.changeCategory}>Cars</button>
                </li>
              </ul>
            </nav>
            {this.props.items.map((item, i) => (
              <section className="card" key={i}>
                <img src={item.Image} alt={item.Name} />
                <div className="description">
                  <h2>{item.Name}</h2>
                  <p>{item.Price} LE.</p>
                  <p className="city">
                    <FontAwesomeIcon icon="location-arrow" /> {item.userCity}
                  </p>
                  <Link to={`/item/${item.itemId}`}>Read More...</Link>
                </div>
              </section>
            ))}
          </main>
          {!localStorage.getItem("token") ? (
            <aside>
              <form onSubmit={this.handleSubmit}>
                <h1>Join Us Now</h1>
                <Input
                  name="Mail"
                  label="Email Address"
                  type="e-mail"
                  text="Enter your e-mail"
                  icon="envelope"
                  warning="You must type your e-mail"
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
          ) : (
            ""
          )}
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          header={modalHeader}
          text={modalText}
          OkButton={this.sendMail}
          hideModal={this.hideModal}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items,
  isLoading: state.isLoading,
  userData: state.inputData,
  joinUser: state.joinUser,
  forgetPass: state.forgetPass
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { getItemsByFilter, login, addField, forgetPassword },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
