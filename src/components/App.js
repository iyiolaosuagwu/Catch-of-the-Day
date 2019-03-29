import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {

  state = {
    fishes: {},
    order: {}
  }

  // componentWillMount(){
  //   const { params } = this.props.match;
  //   this.ref = base.syncState(`${params.storeId}/fishes`, {
  //     context: this,
  //     state: 'fishes'
  //   });
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

  deleteFish = ( fishKey, index )=> {
    // take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // add our new fish to that fishes variable
    
    const fishId = Object.keys(fishes);

    // Object.keys(fishes).filter(fishKey => fishKey === fishKey.keys)

    fishId.map((fishKey, index) => {
      return fishKey === fishKey;
    } )
      
    console.log(`${fishKey} ${index}`)
  }



  render() {
    return (
      <div className="catch-of-the-day" >
         <div className="menu">
            <Header show="iyiola" />
            <ul className="fishes">
              {
                /* dynamically passing  fishKey [fhKey] */
                Object.keys(this.state.fishes).map(fhKey => <Fish key={fhKey} index={fhKey} details={this.state.fishes[fhKey]} addToOrder={this.addToOrder}  deleteFish={this.deleteFish} />)
              }
            </ul>
         </div>
         <Order fishes={this.state.fishes} order={this.state.order} />
         <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/> 
      </div>
    )
  }
}


export default App;