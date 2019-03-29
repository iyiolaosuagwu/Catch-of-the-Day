import React, { Component } from 'react';
import { formatPrice } from '../helpers';

class Fish extends Component {
  render() {

   const {image, name, desc, price, status} = this.props.details;

   const isAvailable = status === 'available';

    return (
      <li className="menu-fish">
         <img src={image} />
         <h5 className="fish-name"> {name} 
         <span>{formatPrice(price)}</span>
         </h5>
         <p> {desc} </p>
         <button disabled={!isAvailable} onClick={() => this.props.addToOrder(this.props.index)} > {isAvailable ? 'Add to Order' : 'Sold out!'} </button>
         <button onClick={this.props.deleteFish} >del</button>
      </li>
    )
  }
}

export default Fish;