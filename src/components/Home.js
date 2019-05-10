import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import Input from "./Input";
import firebase, { auth } from "../firebase";

import "../style/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "./modal";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: "",
      Password: "",
      Category: "All",
      Items: [],
      modalIsOpen: false,
      modalHeader: "",
      modalText: "",
      verificationMail: ""
    };
    this.ref = firebase.firestore().collection("Users");
    this.city = "";
  }

  componentDidMount() {
    this.getItems();
  }

  getItems = () => {
    firebase
      .firestore()
      .collection("Items")
      .limit(5)
      .get()
      .then(doc => {
        const Items = [];
        doc.docs
          .filter(
            Items =>
              Items.data().Category === this.state.Category.toLowerCase() ||
              this.state.Category === "All"
          )
          .map(item => {
            this.getLocation(item.data().userId).then(userCity => {
              const obj = { ...item.data(), itemId: item.id, userCity };
              Items.push(obj);
              this.setState({ Items });
            });
          });
      });
    this.setState({ Items: [] });
  };

  getLocation = userId =>
    firebase
      .firestore()
      .collection("Users")
      .doc(userId)
      .get()
      .then(user => user.data().City);

  changeCategory = e => {
    this.setState({ Category: e.target.textContent }, () => this.getItems());
  };

  changeInput = e => this.setState({ [e.target.name]: e.target.value });
  hideModal = () => this.setState({ modalIsOpen: false });

  forgetPassword = () => {
    let modalText = (
      <div>
        <label htmlFor="mail">Enter your e-mail address</label>
        <input
          type="email"
          name="email"
          id="mail"
          placeholder="Enter your email"
          onChange={e => this.setState({ verificationMail: e.target.value })}
        />
      </div>
    );
    this.setState({ modalIsOpen: true, modalHeader: "Assurance", modalText });
  };

  sendMail = () => {
    auth
      .sendPasswordResetEmail(this.state.verificationMail)
      .then(() => {
        const modalText = <p>Please review your mail</p>;
        this.setState({
          modalHeader: "Reset Password",
          modalText
        });
      })
      .catch(() => {
        const modalText = <p>Invalid mail</p>;
        this.setState({
          modalHeader: "Error",
          modalText
        });
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(this.state.User+"@gitcloneolx.com", this.state.Password)
      .then(data => {
        data.user.getIdToken(true).then(token => {
          localStorage.setItem("token", token);
        });
        localStorage.setItem("userId", data.user.uid);
        this.props.history.push("/profile/" + data.user.uid);
      })
      .catch(err => {
        console.log(err)
        const errorLogin = <p>The password or user is invalid</p>;
        this.setState({
          modalIsOpen: true,
          modalHeader: "Error",
          modalText: errorLogin
        });
      });
  };

  render() {
    return this.state.Items.length === 0 ? (
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
            {this.state.Items.map((item, i) => (
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
          ) : (
            ""
          )}
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
