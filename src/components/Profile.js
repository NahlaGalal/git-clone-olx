import React, { Component } from "react";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";
import firebase from "../firebase";

import "../style/profile.css";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      User: "",
      Phone: "",
      Mail: "",
      City: "",
      Items: []
    };
  }

  componentDidMount() {
    // Get data
    firebase
      .firestore()
      .collection("Users")
      .doc(this.props.match.params.id)
      .get()
      .then(doc => {
        const { Name, User, Phone, Mail, City } = doc.data();
        this.setState({ Name, User, Phone, Mail, City });
      });

    // Get items
    firebase
      .firestore()
      .collection("Items")
      .where("userId", "==", this.props.match.params.id)
      .get()
      .then(doc => {
        doc.docs.map(item => {
          const Items = [];
          const obj = {
            ...item.data(),
            Id: item.id
          }
          Items.push(obj);
          this.setState({ Items });
        });
      });
  }

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
      <main className="profile container">
        <h1>{this.state.Name.split(" ", 2).map(letter => letter[0])}</h1>
        <section className="info">
          <h2>Your information</h2>
          <dl>
            <dt>Name: </dt>
            <dd>{this.state.Name}</dd>
            <dt>User: </dt>
            <dd>{this.state.User}</dd>
            <dt>Mail: </dt>
            <dd>{this.state.Mail}</dd>
            <dt>Phone: </dt>
            <dd>{this.state.Phone}</dd>
            <dt>City: </dt>
            <dd>{this.state.City}</dd>
            <dt>Num of items: </dt>
            <dd>{this.state.Items.length}</dd>
          </dl>
        </section>
        <section className="items">
          <h2>Your items</h2>
          <ul>
            {this.state.Items.map((item, i) => (
              <li className="item" key={i}>
                <Link to={`/item/${item.Id}`}>
                  <h3>{item.Name}</h3>
                  <p>{item.Price} L.E.</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    );
  }
}
