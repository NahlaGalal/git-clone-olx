import React, { Component } from "react";
import firebase from "../firebase";

export default class Profile extends Component {
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
    return <div>Profile</div>;
  }
}
