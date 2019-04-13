import React, { Component } from 'react';

import '../style/error.css';

export default class Error extends Component {
    render() {
        return (
            <div className="error">
                <h1>404 Error</h1>
                <p>Sorry, page not found</p>
            </div>
        )
    }
}