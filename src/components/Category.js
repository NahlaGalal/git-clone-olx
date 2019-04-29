import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../style/category.css';
import lab1image from '../Images/lab1.jpg';


export default class Category extends Component{
  constructor(props){
    super(props);
    this.state = {
      items: [
        {
          name: "Laptop Dell - inspiron n4050",
          price: 7800,
          image: "../Images/lab1.jpg",
          description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, beatae repellendus. Pariatur asperiores, beatae dolores laboriosam deleniti nobis eius esse minus dolore suscipit facilis commodi nesciunt nemo a praesentium adipisci?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, beatae repellendus. Pariatur asperiores, beatae dolores laboriosam deleniti nobis eius esse minus dolore suscipit facilis commodi nesciunt nemo a praesentium adipisci?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, beatae repellendus. Pariatur asperiores, beatae dolores laboriosam deleniti nobis eius esse minus dolore suscipit facilis commodi nesciunt nemo a praesentium adipisci?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, beatae repellendus. Pariatur asperiores, beatae dolores laboriosam deleniti nobis eius esse minus dolore suscipit facilis commodi nesciunt nemo a praesentium adipisci?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, beatae repellendus. Pariatur asperiores, beatae dolores laboriosam deleniti nobis eius esse minus dolore suscipit facilis commodi nesciunt nemo a praesentium adipisci?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, beatae repellendus. Pariatur asperiores, beatae dolores laboriosam deleniti nobis eius esse minus dolore suscipit facilis commodi nesciunt nemo a praesentium adipisci?`,
          buyer: {
            name: "Nahla Galal",
            phone: "01001112345",
            email: "nahlaglal@gmail.com",
            city: "Mansoura"
          }
        },
        {
          name: "Laptop Dell - inspiron n4050",
          price: 7800,
          image: "../Images/lab1.jpg",
          description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, beatae repellendus. Pariatur asperiores, beatae dolores laboriosam deleniti nobis eius esse minus dolore suscipit facilis commodi nesciunt nemo a praesentium adipisci?`,
          buyer: {
            name: "Nahla Galal",
            phone: "01001112345",
            email: "nahlaglal@gmail.com",
            city: "Mansoura"
          }
        },
        {
          name: "Laptop Dell - inspiron n4050",
          price: 7800,
          image: "../Images/lab1.jpg",
          description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
          buyer: {
            name: "Nahla Galal",
            phone: "01001112345",
            email: "nahlaglal@gmail.com",
            city: "Mansoura"
          }
        },
        {
          name: "Laptop Dell - inspiron n4050",
          price: 7800,
          image: "../Images/lab1.jpg",
          description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, beatae repellendus. Pariatur asperiores, beatae dolores laboriosam deleniti nobis eius esse minus dolore suscipit facilis commodi nesciunt nemo a praesentium adipisci?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, beatae repellendus. Pariatur asperiores, beatae dolores laboriosam deleniti nobis eius esse minus dolore suscipit facilis commodi nesciunt nemo a praesentium adipisci?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, beatae repellendus. Pariatur asperiores, beatae dolores laboriosam deleniti nobis eius esse minus dolore suscipit facilis commodi nesciunt nemo a praesentium adipisci?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, beatae repellendus. Pariatur asperiores, beatae dolores laboriosam deleniti nobis eius esse minus dolore suscipit facilis commodi nesciunt nemo a praesentium adipisci?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, beatae repellendus. Pariatur asperiores, beatae dolores laboriosam deleniti nobis eius esse minus dolore suscipit facilis commodi nesciunt nemo a praesentium adipisci?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, beatae repellendus. Pariatur asperiores, beatae dolores laboriosam deleniti nobis eius esse minus dolore suscipit facilis commodi nesciunt nemo a praesentium adipisci?`,
          buyer: {
            name: "Nahla Galal",
            phone: "01001112345",
            email: "nahlaglal@gmail.com",
            city: "Mansoura"
          }
        }
      ]
    }
  }

  render() {
    return (
      <div className="category">
        <h1> Book Category </h1>
        <main className="container">
          {this.state.items.map((item, i) => (
            <section className="item" key={i}>
              <img src={lab1image} alt={item.name + i} />
              <h2>{item.name}</h2>
              <p className="price">{item.price} LE.</p>
              <p className="description">{item.description}</p>
              <Link to="/item">Read more...</Link>
              <p className="city">
                <FontAwesomeIcon icon="location-arrow" />
                {item.buyer.city}
              </p>
            </section>
          ))}
        </main>
      </div>
    )
  }
}