import React, {Component} from 'react';

import '../style/profile.css'

export default class Profile extends Component{
  constructor(props){
    super(props);
    this.state = {
      Name: 'Nahla Galal',
      User: 'Nahla5',
      Phone: '010001111',
      Mail: 'nahlaglal@gmail.com',
      City: 'El-Mahalla',
      Items: []
    }
  }

  render() {
    return (
      <div>
        <section className="info">
          <dl>
            <dt>Name: </dt>
            <dd>{this.state.Name}</dd>
            <dt>User: </dt>
            <dd>{this.state.User}</dd>
          </dl>
        </section>
      </div>
    )
  }
}