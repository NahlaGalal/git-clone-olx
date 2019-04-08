import React, { Component } from 'react';
import {Carousel} from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../style/item.css';

export default class Item extends Component {

    render() {
        return (
            <div className="container item">
                <main>
                    <div className="info">
                        <h1> Laptop Dell - inspiron n4050 </h1>
                        <hr />
                        <p className="price"> <strong> 7,800 LE. </strong> </p>
                    </div>
                    <Carousel showStatus={false} autoPlay={true} infiniteLoop={true}>
                        <div><img src={require('../Images/lab1.jpg')} alt="First for product"/></div>
                        <div><img src={require('../Images/lab2.jpg')} alt="Second for product"/></div>
                        <div><img src={require('../Images/lab3.jpeg')} alt="Third for product"/></div>
                    </Carousel>
                    <h2> Description </h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, beatae repellendus. Pariatur asperiores, beatae dolores laboriosam deleniti nobis eius esse minus dolore suscipit facilis commodi nesciunt nemo a praesentium adipisci?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, beatae repellendus. Pariatur asperiores, beatae dolores laboriosam deleniti nobis eius esse minus dolore suscipit facilis commodi nesciunt nemo a praesentium adipisci?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, beatae repellendus. Pariatur asperiores, beatae dolores laboriosam deleniti nobis eius esse minus dolore suscipit facilis commodi nesciunt nemo a praesentium adipisci? </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, beatae repellendus. Pariatur asperiores, beatae dolores laboriosam deleniti nobis eius esse minus dolore suscipit facilis commodi nesciunt nemo a praesentium adipisci?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, beatae repellendus. Pariatur asperiores, beatae dolores laboriosam deleniti nobis eius esse minus dolore suscipit facilis commodi nesciunt nemo a praesentium adipisci?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, beatae repellendus. Pariatur asperiores, beatae dolores laboriosam deleniti nobis eius esse minus dolore suscipit facilis commodi nesciunt nemo a praesentium adipisci?</p>
                </main>
                <aside>
                    <p> <strong> 7,800 LE. </strong> </p>
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
                        <dd>Nahla5</dd>
                        <dt>Phone</dt>
                        <dd>01001112345</dd>
                        <dt>E-mail</dt>
                        <dd><a href="mailto:nahlaglal@gmail.com">nahlaglal@gmail.com</a></dd>
                        <dt>City</dt>
                        <dd>Mansoura</dd>
                    </dl>
                </aside>
                <button>Buy Now</button>
            </div>
        )
    }
}