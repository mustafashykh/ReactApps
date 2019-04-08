import React, { Component } from 'react';
class Product extends Component {
    btnClicked = () =>{
        this.props.onAddToCart(this.props.name);
    }
  render() {
      console.log(this.props);
    return (
      <div className="Product">
        <h1>{this.props.name}</h1>
        <button className="btn btn-primary" onClick={this.btnClicked}>Add To Cart</button>
        Price: <span className="price">{this.props.price}</span>
        {this.props.stock==0 && <p>Out of Stock</p>}
      </div>
    );
  }
}
export default Product;
