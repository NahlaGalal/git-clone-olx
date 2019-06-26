import React, { Component } from "react";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";

import "../style/profile.css";

import { connect } from "react-redux";
import { getProfileData } from "../actions";
import { bindActionCreators } from "redux";

class Profile extends Component {
  componentWillMount() {
    this.props.getProfileData(localStorage.getItem("uid"));
  }

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
      <main className="profile container">
        <h1>{this.props.data.Name.split(" ", 2).map(letter => letter[0])}</h1>
        <section className="info">
          <h2>Your information</h2>
          <dl>
            <dt>Name: </dt>
            <dd>{this.props.data.Name}</dd>
            <dt>User: </dt>
            <dd>{this.props.data.User}</dd>
            <dt>Mail: </dt>
            <dd>{this.props.data.Mail}</dd>
            <dt>Phone: </dt>
            <dd>{this.props.data.Phone}</dd>
            <dt>City: </dt>
            <dd>{this.props.data.City}</dd>
            <dt>Num of items: </dt>
            <dd>{this.props.data.Items.length}</dd>
          </dl>
        </section>
        <section className="items">
          <h2>Your items</h2>
          <ul>
            {this.props.data.Items.map((item, i) => (
              <li className="item" key={i}>
                <Link to={`/item/${item.Id}`}>
                  <h3>{item.Name}</h3>
                  <p>{item.Price} L.E.</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  data: state.profileData,
  isLoading: state.isLoading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getProfileData }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
