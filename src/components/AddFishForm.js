import React, { Component } from 'react';

export class AddFishForm extends Component {

  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();


  createFish = (e) => {
    e.preventDefault();

    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      imageRef: this.imageRef.current.value
    }

    this.props.addFish(fish);

    e.currentTarget.reset();
  }

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
         <input type="text" ref={this.nameRef} name="name" placeholder="Name" />
         <input type="text" ref={this.priceRef} name="price" placeholder="Price" />
         <select name="status" id="" ref={this.statusRef}>
            <option value="available">Fresh!</option>
            <option value="unavailable">Sold Out!</option>
         </select>
         <textarea name="desc" ref={this.descRef} placeholder="Desk"></textarea>
         <input type="text" ref={this.imageRef} name="image" placeholder="Image" />
         <button type="submit">+ Add Fish</button>
      </form>
    )
  }
}


export default AddFishForm;
