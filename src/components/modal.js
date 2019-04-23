import React, { Component } from "react";

import "../style/modal.css";

export default class Modal extends Component {
  render() {
    return (
      <div className="modal">
        {this.props.isOpen ? (
          <React.Fragment>
            <div className="modal-header">
              <h2>{this.props.header}</h2>
            </div>
            <div className="modal-body">
              <div>{this.props.text}</div>
            </div>
            <div className="modal-buttons">
              {this.props.header === "Assurance" ? (
                <button onClick={() => this.props.OkButton()}> Ok </button>
              ) : (
                undefined
              )}
              <button onClick={() => this.props.hideModal()}> Cancel </button>
            </div>
          </React.Fragment>
        ) : (
          undefined
        )}
      </div>
    );
  }
}
