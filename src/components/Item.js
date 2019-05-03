import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ReactLoading from "react-loading";

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
      Quantity: null,
      Category: "",
      buyer: {
        Id: null,
        Name: "",
        Phone: "",
        Mail: "",
        City: ""
      },
      modalIsOpen: false,
      modalHeader: "",
      copied: false
    };
    this.modalText = "";
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
          userId,
          Quantity,
          Category
        } = doc.data();
        firebase
          .firestore()
          .collection("Users")
          .doc(userId)
          .get()
          .then(doc2 => {
            const { Name, Phone, Mail, City } = doc2.data();
            const buyer = { Id: doc2.id, Name, Phone, Mail, City };
            this.setState({
              Name: itemName,
              Price,
              Image,
              Description,
              Quantity,
              Category,
              buyer
            });
          });
      });
  }

  openModal = () => {
    this.modalText = (
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
    this.setState({ modalIsOpen: true, modalHeader: "Information" });
  };

  hideModal = () => this.setState({ modalIsOpen: false });

  openDeleteModal = () => {
    this.modalText = (
      <div>
        <p> Are you sure you want to delete this item </p>
      </div>
    );
    this.setState({ modalIsOpen: true, modalHeader: "Assurance" });
  };

  deleteItem = () => {
    firebase
      .firestore()
      .collection("Items")
      .doc(this.props.match.params.id)
      .delete()
      .then(() => this.props.history.push("/home"));
  };

  editItem = () => {
    const { Name, Price, Image, Description, Quantity, Category } = this.state;
    this.props.history.push({
      pathname: `/updateItem/${this.props.match.params.id}`,
      state: {
        Name,
        Price,
        Image,
        Description,
        Quantity,
        Category
      }
    });
  };

  checkIfOwner = () => {
    if (localStorage.getItem("userId") === this.state.buyer.Id) {
      return (
        <div className="owner-buttons">
          <button onClick={this.openDeleteModal}>Delete item</button>
          <button onClick={this.editItem}>Edit item</button>
        </div>
      );
    }
  };

  render() {
    return !this.state.Name ? (
      <ReactLoading
        type="balls"
        color="#f6f9fc"
        height={200}
        width={200}
        className="loading"
      />
    ) : (
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
              <dt>Quantity</dt>
              <dd>{this.state.Quantity}</dd>
            </dl>
            <h2> Buyer Information </h2>
            <dl>
              <dt>Name</dt>
              <dd
                onClick={() =>
                  this.props.history.push(`/profile/${this.state.buyer.Id}`)
                }
                className="profile"
              >
                {this.state.buyer.Name}
              </dd>
              <dt>City</dt>
              <dd>{this.state.buyer.City}</dd>
            </dl>
            {this.checkIfOwner()}
          </aside>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          header={this.state.modalHeader}
          text={this.modalText}
          hideModal={this.hideModal}
          OkButton={this.deleteItem}
        />
      </React.Fragment>
    );
  }
}
