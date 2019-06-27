import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    cart: 0,
    availablestock:15,
    stock:15,
    available:true,
      }
  AddToCart = () => {
    if (this.state.cart < this.state.availablestock){
      this.setState(({cart,stock}) => ({cart:cart+1,stock:stock-1}))
    }

    else {
      this.setState(({available}) => ({available:false}))
    }
  }
  RemoveFromCart =() =>
  {
    if (this.state.cart >1 ) {
      this.setState(({cart,stock}) => ({cart:cart-1,stock:stock+1}))
    }
    if(this.state.stock +1 ) {
      this.setState(({available}) => ({available:true}))
    }
  }

  render() {
  return (
      <div className="container">
        <button    className="btn btn-primary btn-lg" onClick={this.AddToCart}>Add To Cart</button>
        <h3>Your Cart {this.state.cart}</h3>
        {
          this.state.available ? <h3>{this.state.stock} In Stock</h3> : <h3>Out Of Stock</h3>
        }
        <button className="btn btn-danger btn-lg" onClick={this.RemoveFromCart}>Remove from Cart</button>

        {/*<div className="card" >*/}
        {/*  <img src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/oneplus_7_render.jpg" className="card-img-top" alt="..."/>*/}
        {/*    <div className="card-body">*/}
        {/*      <h5 className="card-title">Card title</h5>*/}
        {/*      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the*/}
        {/*        card's content.</p>*/}
        {/*      <a href="#" className="btn btn-primary">Go somewhere</a>*/}
        {/*    </div>*/}
        {/*</div>*/}

  </div>

  );
  }
}
export default App;

