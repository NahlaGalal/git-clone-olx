import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ReactLoading from "react-loading";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../style/item.css";
import Modal from "../components/modal";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getItemData, deleteItemSelected } from "../actions";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      modalType: "",
      copied: false
    };
  }

  componentWillMount() {
    this.props.getItemData(this.props.match.params.id);
  }

  openModal = () =>
    this.setState({ modalIsOpen: true, modalType: "buyerInfo" });

  hideModal = () => this.setState({ modalIsOpen: false });

  openDeleteModal = () =>
    this.setState({ modalIsOpen: true, modalType: "deleteItem" });

  deleteItem = () => {
    this.props.deleteItemSelected(this.props.match.params.id);
    this.props.history.push("/home");
  };

  editItem = () => {
    this.props.history.push(`/updateItem/${this.props.match.params.id}`);
  };

  checkIfOwner = () => {
    if (localStorage.getItem("uid") === this.props.item.uid) {
      return (
        <div className="owner-buttons">
          <button onClick={this.openDeleteModal}>Delete item</button>
          <button onClick={this.editItem}>Edit item</button>
        </div>
      );
    }
  };

  render() {
    let modalHeader, modalText;
    switch (this.state.modalType) {
      case "buyerInfo":
        modalText = (
          <div>
            <dl>
              <dt>Phone: </dt>
              <CopyToClipboard
                text={this.props.user.Phone}
                onCopy={() => this.setState({ copied: true })}
              >
                <dd>{this.props.user.Phone}</dd>
              </CopyToClipboard>
              <dt>Mail: </dt>
              <dd>
                <a href="mailto:nahlaglal@gmail.com">{this.props.user.Mail}</a>
              </dd>
            </dl>
            {this.state.copied ? (
              <p className="copy-text">Phone number copied!!!</p>
            ) : (
              undefined
            )}
          </div>
        );
        modalHeader = "Information";
        break;
      case "deleteItem":
        modalText = (
          <div>
            <p> Are you sure you want to delete this item </p>
          </div>
        );
        modalHeader = "Assurance";
        break;
      default:
        modalHeader = "";
        modalText = "";
        break;
    }

    return this.props.isLoading ? (
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
              <h1> {this.props.item.Name} </h1>
              <hr />
              <p className="price">
                {" "}
                <strong> {this.props.item.Price} LE. </strong>{" "}
              </p>
            </div>
            <img src={this.props.item.Image} alt="First for product" />
            <h2> Description </h2>
            <p> {this.props.item.Description} </p>
          </main>
          <aside>
            <p>
              {" "}
              <strong> {this.props.item.Price} LE. </strong>{" "}
            </p>
            <button onClick={this.openModal}>Buy now</button>
            <hr />
            <h2> Buyer Information </h2>
            <dl>
              <dt>Name</dt>
              <dd
                onClick={() =>
                  this.props.history.push(`/profile/${this.state.buyer.Id}`)
                }
                className="profile"
              >
                {this.props.user.Name}
              </dd>
              <dt>City</dt>
              <dd>{this.props.user.City}</dd>
            </dl>
            {this.checkIfOwner()}
          </aside>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          header={modalHeader}
          text={modalText}
          hideModal={this.hideModal}
          OkButton={this.deleteItem}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  item: state.itemData ? state.itemData.item : {},
  user: state.itemData ? state.itemData.user : {},
  isLoading: state.isLoading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getItemData, deleteItemSelected }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);
