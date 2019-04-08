import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
class App extends Component {
  handleAddToCart = (name) =>{
    alert(name+" Clicked");
  }
  render() {

    return (
      <div className="App">
        <h1>Hello Class</h1>
        <Product name="Lenovo" price="55000" stock={8} onAddToCart={this.handleAddToCart}/>
        <Product name="HP" price="45000"  stock={8} onAddToCart={this.handleAddToCart}/>
        <Product name="Dell" price="25000"  stock={0} onAddToCart={this.handleAddToCart}/>
        <Product name="Toshiba" price="95000"  stock={8} onAddToCart={this.handleAddToCart}/>
        <Product name="Daewoo" price="95000"  stock={8} onAddToCart={this.handleAddToCart}/>
        
      </div>
    );
  }
}
export default App;
