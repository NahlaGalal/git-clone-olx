import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactLoading from "react-loading";

import "../style/category.css";

import { getItemsByFilter } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Category extends Component {
  componentDidMount() {
    this.props.getItemsByFilter(this.props.match.params.name);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.name !== this.props.match.params.name)
      this.props.getItemsByFilter(this.props.match.params.name);
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
      <div className="category">
        <h1> {this.props.match.params.name} Category </h1>
        <main className="container">
          {this.props.items.map((item, i) => (
            <section className="item" key={i}>
              <img src={item.Image} alt={item.Name + i} />
              <h2>{item.Name}</h2>
              <p className="price">{item.Price} LE.</p>
              <p className="description">{item.Description}</p>
              <Link to={`/item/${item.itemId}`}>Read more...</Link>
              <p className="city">
                <FontAwesomeIcon icon="location-arrow" />
                {item.userCity}
              </p>
            </section>
          ))}
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items,
  isLoading: state.isLoading
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getItemsByFilter }, dispatch);

export default connect (mapStateToProps, mapDispatchToProps)(Category);