import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {

  state = {
    fishes: {},
    order: {}
  }

  // componentWillMount(){
  //   this.loadSampleFishes();
  // }

  addFish = fish => {
    // take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // set the new fishes obj tostate
    this.setState({
      fishes: fishes
    });
  }

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    });
  }

  addToOrder = (key) => {
    //1.  make a copy of the state
    const order = { ...this.state.order };
    // 2. either add to the order, or update the number in our order
    order[key] = order[key] + 1 || 1;
    // 3. call setstate to update our state object
    this.setState({ order: order })
  }


  render() {

    // var Alert = ReactClass({
    //   render = () => {
    //     return <div className={"alert" + this.p} ></div>
    //   }
    // });
    return (
      <div className="catch-of-the-day" >
         <div className="menu">
            <Header show="iyiola" />
            <ul className="fishes">
              {
                /* dynamically passing  fishKey [fhKey] */
                Object.keys(this.state.fishes).map(fhKey => <Fish key={fhKey} details={this.state.fishes[fhKey]} />)
              }
            </ul>
         </div>
         <Order />
         <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/> 
      </div>
    )
  }
}


export default App;