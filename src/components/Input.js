import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Input extends Component {
  state = { number: "" };

  componentDidMount() {
    this.setState({ number: this.props.defaultValue });
  }

  checkInput = e => {
    if (e.target.name === "Phone") {
      if (!isNaN(e.target.value)) this.setState({ number: e.target.value });
    } else this.setState({ number: e.target.value });
  };

  handleBlur = e => {
    if (e.target.value === "")
      e.target.nextElementSibling.style.display = "block";
    else e.target.nextElementSibling.style.display = "none";
  };

  render() {
    return (
      <div>
        <label htmlFor={this.props.name}>
          {this.props.label}
          {this.props.required ? <span>*</span> : undefined}
        </label>
        <input
          type={this.props.type}
          name={this.props.name}
          id={this.props.name}
          placeholder={this.props.text}
          onChange={e => this.props.changeInput(e)}
          onBlur={this.handleBlur}
          minLength={this.props.type === "password" ? 8 : 0}
          onInput={this.checkInput}
          value={this.state.number}
        />
        {this.props.warning ? (
          <p>
            {" "}
            <FontAwesomeIcon icon={"exclamation-triangle"} />{" "}
            {this.props.warning}{" "}
          </p>
        ) : (
          <span />
        )}
        {this.props.name === "Password" ? (
          <p className="pass-ccs">
            Your password must be more than 8 charctars
          </p>
        ) : (
          undefined
        )}
        {this.props.icon ? (
          <FontAwesomeIcon icon={this.props.icon} />
        ) : (
          undefined
        )}
      </div>
    );
  }
}
