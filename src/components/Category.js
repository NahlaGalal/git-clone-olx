import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebase from '../firebase';

import '../style/category.css';

export default class Category extends Component{
  constructor(props){
    super(props);
    this.state = {
      items:[]
    }
  }

  handleData = () => {
    firebase
      .firestore()
      .collection("Items")
      .where("Category", "==", this.props.match.params.name)
      .get()
      .then(doc =>{
        let items= [];
        doc.docs.map(data => {
          this.getBuyerInformation(data.data().userId).then(City =>{
            const item = {
              Id: data.id,
              Name: data.data().Name,
              Price: data.data().Price,
              Image: data.data().Image,
              Description: data.data().Description,
              buyer: {
                City
              }
            }
            items.push(item);
            this.setState({items})
          })
        })
    })
  }

  getBuyerInformation(userId){
    return firebase
      .firestore()
      .collection("Users")
      .doc(userId)
      .get()
      .then(doc => doc.data().City)
  }

  componentDidMount(){this.handleData();}

  componentDidUpdate(prevProps){
    if(this.props.location.pathname !== prevProps.location.pathname) this.handleData();
  }

  render() {
    return (
      <div className="category">
        <h1> {this.props.match.params.name} Category </h1>
        <main className="container">
          {this.state.items.map((item, i) => (
            <section className="item" key={i}>
              <img src={item.Image} alt={item.Name + i} />
              <h2>{item.Name}</h2>
              <p className="price">{item.Price} LE.</p>
              <p className="description">{item.Description}</p>
              <Link to={`/item/${item.Id}`}>Read more...</Link>
              <p className="city">
                <FontAwesomeIcon icon="location-arrow" />
                {item.buyer.City}
              </p>
            </section>
          ))}
        </main>
      </div>
    )
  }
}