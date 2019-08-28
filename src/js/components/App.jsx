import React, { Component } from "react";
import data from "./shopData";
import Products from "./products"
import Nav from "./Nav/Nav";
import Header from "./pages/shop/header";
import Shop from "./pages/shop/shop";
import Footer from "./footer/Footer"

class App extends Component {
 
    constructor(props) {
      super(props);
      this.state = {
        data:data,
        products:Products
      }
    }
  
  render() {
    return (
      <div >
      <Nav  nav={this.state.data[0].nav}/>
      <Header header={this.state.data[0].header}/>
      <Shop products={this.state.products[0].products} side={this.state.data[0].side_bar} />
      <Footer form={this.state.data[0].form} footer={this.state.data[0].footer} />

      </div>
    );
  }
}
export default App;
