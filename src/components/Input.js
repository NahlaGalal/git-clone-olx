import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default class Input extends Component{

    state = {number: ''}

    checkInput = e => {
        if(e.target.name === 'Phone'){
            if(!isNaN(e.target.value)) this.setState({number: e.target.value});
        }else this.setState({number: e.target.value});
    }

    render(){
        return(
            <div>
                <label htmlFor={this.props.name}>{this.props.label} <span>*</span></label>
                <input type={this.props.type}
                        name={this.props.name} 
                        id={this.props.name} 
                        placeholder={this.props.text} 
                        onChange={e => this.props.changeInput(e)} 
                        onBlur={e => this.props.handleBlur(e)}
                        minLength={this.props.type === 'password' ? "8" : 0}
                        onInput={this.checkInput}
                        value={this.state.number}/> 
                <p> <FontAwesomeIcon icon={"exclamation-triangle"} /> You must type your {this.props.name.toLowerCase()}</p>
                {this.props.name === 'Password' ? <p className="pass-ccs">Your password must be more than 8 charctars</p> : undefined}
                <FontAwesomeIcon icon={this.props.icon} />
            </div>
        )
    }
}
