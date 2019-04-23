import React, { Component } from "react";
import Input from "./Input";

import "../style/additem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "./modal";

function CheckValidity(props) {
  if (props.unvalid === "missing") return <p>Missing Data</p>;
  else return <p />;
}

export default class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Category: "",
      Name: "",
      Price: "",
      Quantity: "",
      Image: "",
      ImageName: "",
      Description: "",
      unvalid: "valid",
      modalIsOpen: false
    };
  }

  changeInput = e => this.setState({ [e.target.name]: e.target.value });

  uploadImg = e => {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        Image: reader.result,
        ImageName: file.name
      });
    };
    if (file) reader.readAsDataURL(file);
  };

  handleSelectBlur = e => {
    if (e.target.value === "")
      e.target.nextElementSibling.style.display = "block";
    else e.target.nextElementSibling.style.display = "none";
  };

  handleSubmit = e => {
    e.preventDefault();
    let validity = true;
    Object.keys(this.state).forEach(key => {
      if (this.state[key] === "" && key !== "unvalid" && key !== "modalIsOpen")
        validity = false;
    });
    if (!validity) this.setState({ unvalid: "missing" });
    else this.setState({ unvalid: "valid", modalIsOpen: true });
  };

  hideModal = () => this.setState({ modalIsOpen: false });
  addItem = () => this.props.history.push("/");

  render() {
    let modalText = (<p>Are you sure you want to add this item?</p>)

    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} className="add-item">
          <h1>Hello, Nahla Galal</h1>
          <h2>Add your item now </h2>
          <CheckValidity unvalid={this.state.unvalid} />
          <label>
            <select
              defaultValue=""
              name="Category"
              onBlur={this.handleSelectBlur}
              onChange={this.changeInput}
            >
              <option value="">Category</option>
              <option value="books">Books</option>
              <option value="furniture">Furniture</option>
              <option value="electronics">Electronics</option>
              <option value="cars">Cars</option>
            </select>
            <p className="warning-sentence">
              <FontAwesomeIcon icon={"exclamation-triangle"} /> You must choose
              category of item
            </p>
          </label>
          <Input
            name="Name"
            type="text"
            text="Name of item"
            warning="You must type name of item"
            changeInput={this.changeInput}
          />
          <Input
            name="Price"
            type="number"
            text="Price of item"
            warning="You must type price of item"
            changeInput={this.changeInput}
          />
          <Input
            name="Quantity"
            type="number"
            text="Quantity of item"
            warning="You must type quantity of item"
            changeInput={this.changeInput}
          />
          <label className="upload-img">
            <input
              type="file"
              accept="image/*"
              name="Image"
              warning="you must upload image of item"
              onChange={this.uploadImg}
              style={{ display: "none" }}
              onBlur={this.handleSelectBlur}
            />
            <span>{this.state.ImageName || "Upload an image"}</span>
          </label>
          <textarea
            placeholder="Description"
            name="Description"
            onBlur={this.handleSelectBlur}
            onChange={this.changeInput}
          />
          <p className="warning-sentence">
            <FontAwesomeIcon icon={"exclamation-triangle"} /> You must type
            description of item
          </p>
          <input type="submit" value="Add item" />
        </form>
        <Modal
          isOpen={this.state.modalIsOpen}
          hideModal={this.hideModal}
          OkButton={this.addItem}
          header="Assurance"
          text={modalText}
        />
      </React.Fragment>
    );
  }
}
