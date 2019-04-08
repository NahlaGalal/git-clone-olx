import React, { Component } from 'react';
import {Carousel} from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../style/item.css';

export default class Item extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Laptop Dell - inspiron n4050',
            price: 7800,
            images: [
                '../Images/lab1.jpg',
                '../Images/lab2.jpg',
                '../Images/lab3.jpeg'
            ],
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, beatae repellendus. Pariatur asperiores, beatae dolores laboriosam deleniti nobis eius esse minus dolore suscipit facilis commodi nesciunt nemo a praesentium adipisci?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, beatae repellendus. Pariatur asperiores, beatae dolores laboriosam deleniti nobis eius esse minus dolore suscipit facilis commodi nesciunt nemo a praesentium adipisci?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, beatae repellendus. Pariatur asperiores, beatae dolores laboriosam deleniti nobis eius esse minus dolore suscipit facilis commodi nesciunt nemo a praesentium adipisci?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, beatae repellendus. Pariatur asperiores, beatae dolores laboriosam deleniti nobis eius esse minus dolore suscipit facilis commodi nesciunt nemo a praesentium adipisci?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, beatae repellendus. Pariatur asperiores, beatae dolores laboriosam deleniti nobis eius esse minus dolore suscipit facilis commodi nesciunt nemo a praesentium adipisci?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, beatae repellendus. Pariatur asperiores, beatae dolores laboriosam deleniti nobis eius esse minus dolore suscipit facilis commodi nesciunt nemo a praesentium adipisci?` ,
            buyer: {
                name: 'Nahla5',
                phone: '01001112345',
                email: 'nahlaglal@gmail.com',
                city: 'Mansoura'
            }
        }
    }

    render() {
        return (
            <div className="container item">
                <main>
                    <div className="info">
                        <h1> {this.state.name} </h1>
                        <hr />
                        <p className="price"> <strong> {this.state.price} LE. </strong> </p>
                    </div>
                    <Carousel showStatus={false} autoPlay={true} infiniteLoop={true}>
                        <div><img src={require('../Images/lab1.jpg')} alt="First for product"/></div>
                        <div><img src={require('../Images/lab2.jpg')} alt="First for product"/></div>
                        <div><img src={require('../Images/lab3.jpeg')} alt="First for product"/></div>
                    </Carousel>
                    <h2> Description </h2>
                    <p> {this.state.description} </p>
                </main>
                <aside>
                    <p> <strong> {this.state.price} LE. </strong> </p>
                    <button>Buy now</button> 
                    <hr />
                    <h2>Product Information</h2>
                    <dl>
                        <dt>Brand</dt>
                        <dd>Dell</dd>
                        <dt>RAM Memory</dt>
                        <dd>8 GB</dd>
                        <dt>Processor Speed</dt>
                        <dd>2.5 GHz</dd>
                    </dl>
                    <h2> Buyer Information </h2>
                    <dl>
                        <dt>User Name</dt>
                        <dd>{this.state.buyer.name}</dd>
                        <dt>Phone</dt>
                        <dd>{this.state.buyer.phone}</dd>
                        <dt>E-mail</dt>
                        <dd><a href={`mailto:${this.state.buyer.email}`}>{this.state.buyer.email}</a></dd>
                        <dt>City</dt>
                        <dd>{this.state.buyer.city}</dd>
                    </dl>
                </aside>
                <button>Buy Now</button>
            </div>
        )
    }
}