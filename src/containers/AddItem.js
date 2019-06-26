import React, { Component } from "react";
import ReactLoading from "react-loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Input from "../components/Input";
import Modal from "../components/modal";

import "../style/additem.css";

import { connect } from "react-redux";
import {
  getUserName,
  addField,
  addItemValidation,
  addItem,
  resetState
} from "../actions";
import { bindActionCreators } from "redux";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      modalType: ""
    };
  }

  componentDidMount() {
    this.props.resetState("RESET_DATA");
    if(localStorage.getItem("token")) this.props.getUserName(localStorage.getItem("uid"));
  }

  changeInput = (name, value) => this.props.addField(name, value);

  uploadImg = e => {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.props.addField("Image", reader.result);
      this.props.addField("ImageName", file.name);
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
    this.props.addItemValidation(this.props.Data);
  };

  componentDidUpdate() {
    if (Object.entries(this.props.validity).length !== 0) {
      if (!this.props.validity.validity)
        this.setState({ modalIsOpen: true, modalType: "Missing" });
      else this.setState({ modalIsOpen: true, modalType: "Add item assurance" });
      this.props.resetState("RESET_VALIDATION");
    }

    if (this.props.itemId !== "") {
      if (this.props.itemId === "Error") this.setState({ modalIsOpen: true, modalType: "Error" });
      else this.props.history.push("/item/" + this.props.itemId);
      this.props.resetState("RESET_ADD_ITEM");
    }
  }

  addItem = () => this.props.addItem(this.props.Data, localStorage.getItem("uid"));

  hideModal = () => this.setState({ modalIsOpen: false });

  render() {
    let modalText,
      modalHeader = "Warning";
    let signupText = <p>You must sign up first before adding an item</p>;

    switch (this.state.modalType) {
      case "Missing":
        modalText = <p> Missing data </p>;
        break;
      case "Add item assurance":
        modalText = <p>Are you sure you want to add this item?</p>;
        modalHeader = "Assurance";
        break;
      case "Error":
        modalText = <p>Error in adding data </p>;
        break;
      default:
        modalText = "";
    }

    return localStorage.getItem("token") ? (
      this.props.isLoading ? (
        <ReactLoading
          type="balls"
          color="#f6f9fc"
          height={200}
          width={200}
          className="loading"
        />
      ) : (
        <React.Fragment>
          <form onSubmit={this.handleSubmit} className="add-item">
            <h1>Hello, {this.props.Name}</h1>
            <h2>Add your item now </h2>
            <label>
              <select
                defaultValue=""
                name="Category"
                onBlur={this.handleSelectBlur}
                onChange={e => this.changeInput(e.target.name, e.target.value)}
              >
                <option value="">Category</option>
                <option value="books">Books</option>
                <option value="furniture">Furniture</option>
                <option value="electronics">Electronics</option>
                <option value="cars">Cars</option>
              </select>
              <p className="warning-sentence">
                <FontAwesomeIcon icon={"exclamation-triangle"} /> You must
                choose category of item
              </p>
            </label>
            <Input
              name="itemName"
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
              <span>{this.props.Data.ImageName || "Upload an image"}</span>
            </label>
            <textarea
              placeholder="Description"
              name="Description"
              onBlur={this.handleSelectBlur}
              onChange={e => this.changeInput(e.target.name, e.target.value)}
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
            header={modalHeader}
            text={modalText}
          />
        </React.Fragment>
      )
    ) : (
      <Modal
        isOpen="true"
        hideModal={() => this.props.history.push("/signup")}
        header="Sign up first"
        text={signupText}
      />
    );
  }
}

const mapStateToProps = state => ({
  Name: state.profileData.Name,
  Data: state.inputData,
  validity: state.validity,
  itemId: state.itemId,
  isLoading: state.isLoading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { getUserName, addField, addItemValidation, addItem, resetState },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddItem);
