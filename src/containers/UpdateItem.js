import React, { Component } from "react";
import ReactLoading from "react-loading";

import Input from "../components/Input";

import "../style/additem.css";

import { addField, updataItemData, resetState } from "../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class UpdateItem extends Component {
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

  componentDidMount() {
    this.props.addField("Category", this.props.item.Category);
    this.props.addField("Description", this.props.item.Description);
    this.props.addField("Image", this.props.item.Image);
    this.props.addField("Name", this.props.item.Name);
    this.props.addField("Price", this.props.item.Price);
    this.props.addField("Quantity", this.props.item.Quantity);
    this.props.addField("ImageName", this.props.item.ImageName);
  }

  componentDidUpdate() {
    if (this.props.itemId !== "" && this.props.itemId !== "Error") {
      const itemId = this.props.itemId;
      this.props.resetState("RESET_UPDATE_ITEM");
      this.props.history.push(`/item/${itemId}`);
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.updataItemData(this.props.data, this.props.match.params.id);
  };

  render() {
    return this.props.isLoading ? (
      <ReactLoading
        type="balls"
        color="#f6f9fc"
        height={200}
        width={200}
        className="loading"
      />
    ) : (
      <form onSubmit={this.handleSubmit} className="add-item">
        <h2>Update your item now </h2>
        <label>
          <select
            defaultValue={this.props.item.Category}
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
          defaultValue={this.props.item.Name}
          changeInput={this.changeInput}
        />
        <Input
          name="Price"
          type="number"
          text="Price of item"
          defaultValue={this.props.item.Price}
          changeInput={this.changeInput}
        />
        <Input
          name="Quantity"
          type="number"
          text="Quantity of item"
          defaultValue={this.props.item.Quantity}
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
          <span>{this.props.data.ImageName}</span>
        </label>
        <textarea
          placeholder="Description"
          name="Description"
          onBlur={this.handleSelectBlur}
          onChange={e => this.changeInput(e.target.name, e.target.value)}
          defaultValue={this.props.item.Description}
        />
        <input type="submit" value="Update item" />
      </form>
    );
  }
}

const mpaStateToProps = state => ({
  item: state.itemData.item,
  isLoading: state.isLoading,
  data: state.inputData,
  itemId: state.itemId
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addField, updataItemData, resetState }, dispatch);

export default connect(
  mpaStateToProps,
  mapDispatchToProps
)(UpdateItem);
