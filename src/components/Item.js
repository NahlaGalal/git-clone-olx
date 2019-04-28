import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../style/item.css";
import Modal from "./modal";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Laptop Dell - inspiron n4050",
      price: 7800,
      images: [
        "../Images/lab1.jpg",
        "../Images/lab2.jpg",
        "../Images/lab3.jpeg"
      ],
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, beatae repellendus. Pariatur asperiores, beatae dolores laboriosam deleniti nobis eius esse minus dolore suscipit facilis commodi nesciunt nemo a praesentium adipisci?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, beatae repellendus. Pariatur asperiores, beatae dolores laboriosam deleniti nobis eius esse minus dolore suscipit facilis commodi nesciunt nemo a praesentium adipisci?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, beatae repellendus. Pariatur asperiores, beatae dolores laboriosam deleniti nobis eius esse minus dolore suscipit facilis commodi nesciunt nemo a praesentium adipisci?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, beatae repellendus. Pariatur asperiores, beatae dolores laboriosam deleniti nobis eius esse minus dolore suscipit facilis commodi nesciunt nemo a praesentium adipisci?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, beatae repellendus. Pariatur asperiores, beatae dolores laboriosam deleniti nobis eius esse minus dolore suscipit facilis commodi nesciunt nemo a praesentium adipisci?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, beatae repellendus. Pariatur asperiores, beatae dolores laboriosam deleniti nobis eius esse minus dolore suscipit facilis commodi nesciunt nemo a praesentium adipisci?`,
      buyer: {
        name: "Nahla Galal",
        phone: "01001112345",
        email: "nahlaglal@gmail.com",
        city: "Mansoura"
      },
      modalIsOpen: false,
      copied: false
    };
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
            text={this.state.buyer.phone}
            onCopy={() => this.setState({ copied: true })}
          >
            <dd>{this.state.buyer.phone}</dd>
          </CopyToClipboard>
          <dt>Mail: </dt>
          <dd>
            <a href="mailto:nahlaglal@gmail.com">{this.state.buyer.email}</a>
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
              <h1> {this.state.name} </h1>
              <hr />
              <p className="price">
                {" "}
                <strong> {this.state.price} LE. </strong>{" "}
              </p>
            </div>
            <div>
              <img
                src={require("../Images/lab3.jpeg")}
                alt="First for product"
              />
            </div>
            <h2> Description </h2>
            <p> {this.state.description} </p>
          </main>
          <aside>
            <p>
              {" "}
              <strong> {this.state.price} LE. </strong>{" "}
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
              <dd>{this.state.buyer.name}</dd>
              <dt>City</dt>
              <dd>{this.state.buyer.city}</dd>
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
