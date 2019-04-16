import React, {Component} from 'react';

import '../style/modal.css';

export default class Modal extends Component{
    render() {
        return (
            <div className="modal">
            {this.props.isOpen ? 
                <React.Fragment>
                <div className="modal-header">
                    <h2>Assurance</h2>
                </div>
                <div className="modal-body">
                    <p>Are you sure you want to add this item?</p>
                </div>
                <div className="modal-buttons">
                    <button onClick={() => this.props.addItem()}> Yes </button>
                    <button onClick={() => this.props.hideModal()}> Cancel </button>
                </div> 
                </React.Fragment> : undefined}
            </div>
        )
    }
}