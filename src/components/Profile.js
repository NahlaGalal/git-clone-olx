import React, { Component } from "react";
import firebase from "../firebase";
import {Link} from 'react-router-dom';

import '../style/profile.css'

export default class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      Name: 'Nahla Galal',
      User: 'Nahla5',
      Phone: '010001111',
      Mail: 'nahlaglal@gmail.com',
      City: 'El-Mahalla',
      Items: [
        {
          name: "Laptop Dell - inspiron n4050",
          price: 7800
        },
        {
          name: "Laptop Dell - inspiron n4050",
          price: 7800
        }
      ]
    }
  }

  componentDidMount() {
    // Get data
    firebase
      .firestore()
      .collection("Users")
      .doc(this.props.match.params.id)
      .get()
      .then(doc => {
        console.log(doc.data());
      });

    // Get items
    firebase
      .firestore()
      .collection("Items")
      .where("userId", "==", this.props.match.params.id)
      .get()
      .then(doc => {
        doc.docs.map(item => console.log(item.data()))
      })
  }

  render() {
    return (
      <main className="profile container">
        <h1>{this.state.Name.split(' ', 2).map(letter => letter[0])}</h1>
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
                <Link to="/item">
                  <h3>{item.name}</h3>
                  <p>{item.price} L.E.</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    )
  }
}
