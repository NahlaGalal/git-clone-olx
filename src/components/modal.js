import React from "react";

import "../style/modal.css";

const Modal = ({ isOpen, header, text, OkButton, hideModal }) => (
  <div className="modal">
    {isOpen ? (
      <React.Fragment>
        <div className="modal-header">
          <h2>{header}</h2>
        </div>
        <div className="modal-body">
          <div>{text}</div>
        </div>
        <div className="modal-buttons">
          {header === "Assurance" && (
            <button onClick={() => OkButton()}> Ok </button>
          )}
          <button onClick={() => hideModal()}> Cancel </button>
        </div>
      </React.Fragment>
    ) : (
      undefined
    )}
  </div>
);

export default Modal;
