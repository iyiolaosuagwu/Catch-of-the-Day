import React, { Component } from 'react';
import { getFunName } from '../helpers';


class StorePicker extends Component {

   myInput = React.createRef();

   goToStore = (e) => {
      // stop form from submitting
      e.preventDefault();
      // get text-value from the input
      const storeName = this.myInput.current.value;
      // change the page to /store/whatever-they-entered
      this.props.history.push(`/store/${storeName}`)
   }

   render() {
      return ( 
         <form className="store-selector" onSubmit={this.goToStore}>
            <h2>please enter a store</h2>
            <input type="text" ref={this.myInput} placeholder="Sore name" defaultValue={getFunName()} />
            <button type="submit" > visit store --> </button>
         </form>
      )
   }
}

export default StorePicker;