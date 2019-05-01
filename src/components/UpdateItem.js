import React, { Component } from "react";
import Input from "./Input";
import firebase from "../firebase";

import "../style/additem.css";

export default class UpdateItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Category: "",
      Name: "",
      Price: "",
      Quantity: "",
      Image: "",
      ImageName: "",
      Description: ""
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

  handleSubmit = e => {
    e.preventDefault();
    const currentState = this.state,
      locationState = this.props.location.state;
    firebase
      .firestore()
      .collection("Items")
      .doc(this.props.match.params.id)
      .update({
        Category: currentState.Category || locationState.Category,
        Name: currentState.Name || locationState.Name,
        Price: currentState.Price || locationState.Price,
        Quantity: currentState.Quantity || locationState.Quantity,
        Image: currentState.Image || locationState.Image,
        Description: currentState.Description || locationState.Description
      })
      .then(() =>
        this.props.history.push(`/item/${this.props.match.params.id}`)
      );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="add-item">
        <h2>Update your item now </h2>
        <label>
          <select
            defaultValue={this.props.location.state.Category}
            name="Category"
            onChange={this.changeInput}
          >
            <option value="">Category</option>
            <option value="books">Books</option>
            <option value="furniture">Furniture</option>
            <option value="electronics">Electronics</option>
            <option value="cars">Cars</option>
          </select>
        </label>
        <Input
          name="Name"
          type="text"
          text="Name of item"
          defaultValue={this.props.location.state.Name}
          changeInput={this.changeInput}
        />
        <Input
          name="Price"
          type="number"
          text="Price of item"
          defaultValue={this.props.location.state.Price}
          changeInput={this.changeInput}
        />
        <Input
          name="Quantity"
          type="number"
          text="Quantity of item"
          defaultValue={this.props.location.state.Quantity}
          changeInput={this.changeInput}
        />
        <label className="upload-img">
          <input
            type="file"
            accept="image/*"
            name="Image"
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
          defaultValue={this.props.location.state.Description}
        />
        <input type="submit" value="Update item" />
      </form>
    );
  }
}
