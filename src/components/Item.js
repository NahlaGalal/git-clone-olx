import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../style/item.css";
import Modal from "./modal";
import firebase from "../firebase";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Price: null,
      Image: "",
      Description: "",
      buyer: {
        Name: "",
        Phone: "",
        Mail: "",
        City: ""
      },
      modalIsOpen: false,
      copied: false
    };
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection("Items")
      .doc(this.props.match.params.id)
      .get()
      .then(doc => {
        const {
          Name: itemName,
          Price,
          Image,
          Description,
          userId
        } = doc.data();
        firebase
          .firestore()
          .collection("Users")
          .doc(userId)
          .get()
          .then(doc2 => {
            const { Name, Phone, Mail, City } = doc2.data();
            const buyer = { Name, Phone, Mail, City };
            this.setState({ Name: itemName, Price, Image, Description, buyer });
          });
      });
  }

  openModal = () => this.setState({ modalIsOpen: true });
  hideModal = () => this.setState({ modalIsOpen: false });
  copyText = e => {};

  render() {
    let modalText = (
      <div>
        <dl>
          <dt>Phone: </dt>
          <CopyToClipboard
            text={this.state.buyer.Phone}
            onCopy={() => this.setState({ copied: true })}
          >
            <dd>{this.state.buyer.Phone}</dd>
          </CopyToClipboard>
          <dt>Mail: </dt>
          <dd>
            <a href="mailto:nahlaglal@gmail.com">{this.state.buyer.Mail}</a>
          </dd>
        </dl>
        {this.state.copied ? (
          <p className="copy-text">Phone number copied!!!</p>
        ) : (
          undefined
        )}
      </div>
    );

    return (
      <React.Fragment>
        <div className="container item">
          <main>
            <div className="info">
              <h1> {this.state.Name} </h1>
              <hr />
              <p className="price">
                {" "}
                <strong> {this.state.Price} LE. </strong>{" "}
              </p>
            </div>
            <img src={this.state.Image} alt="First for product" />
            <h2> Description </h2>
            <p> {this.state.Description} </p>
          </main>
          <aside>
            <p>
              {" "}
              <strong> {this.state.Price} LE. </strong>{" "}
            </p>
            <button onClick={this.openModal}>Buy now</button>
            <hr />
            <h2>Product Information</h2>
            <dl>
              <dt>Brand</dt>
              <dd>Dell</dd>
              <dt>RAM Memory</dt>
              <dd>8 GB</dd>
              <dt>Processor Speed</dt>
              <dd>2.5 GHz</dd>
            </dl>
            <h2> Buyer Information </h2>
            <dl>
              <dt>Name</dt>
              <dd>{this.state.buyer.Name}</dd>
              <dt>City</dt>
              <dd>{this.state.buyer.City}</dd>
            </dl>
          </aside>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          header="Information"
          text={modalText}
          hideModal={this.hideModal}
        />
      </React.Fragment>
    );
  }
}
