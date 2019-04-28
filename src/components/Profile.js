import React, { Component } from "react";
import firebase from "../firebase";

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
      Items: []
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
      <div>
        <section className="info">
          <dl>
            <dt>Name: </dt>
            <dd>{this.state.Name}</dd>
            <dt>User: </dt>
            <dd>{this.state.User}</dd>
          </dl>
        </section>
      </div>
    )
  }
}
