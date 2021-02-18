import React, { Component } from 'react';
import Header from './Header';
import ProductListing from './ProductListing';
import products from '../lib/data';
import AddProductForm from './AddProductForm';

class Shop extends Component {
  state = {
    products: products,
    cartItems: []
  };

  nextId = () => {
    return this.state.products.reduce((curr, next) => (
      curr > next.id ? curr : next.id
    ), 0) + 1;
  };

  createProduct = (product) => {
    // debugger;
    this.setState({
      products: this.state.products.concat(product)
    });
  };

  handleAddClick = (product) => {
    this.createProduct(Object.assign({}, product, { id: this.nextId() }));
  };

  getProductById = (id) => {
    return this.state.products.find((product) => product.id === id);
  };

  decrementProductQuantity = (productId) => {
    this.setState({
      products: this.state.products.map((p) => {
        return p.id === productId ? Object.assign(p, {quantity: p.quantity - 1}) : p;
      })
    });
  };

  incrementCarItemQuantity = (productId) => {
    this.setState({
      cartItems: this.state.cartItems.map((item) => {
        return item.productId !== productId ? item : Object.assign(item, { quantity: item.quantity + 1 })
      }),
    });
  };

  handleAddToCartClick = (productId) => {
    this.decrementProductQuantity(productId);

    const itemExists = this.state.cartItems.some((item) => {
      return item.productId === productId;
    });

    if (itemExists) {
      this.incrementCarItemQuantity(productId);
    } else {
      const product = this.getProductById(productId);
      this.setState({
        cartItems: this.state.cartItems.concat({
          productId: product.id,
          title: product.title,
          quantity: 1,
          price: product.price,
        }),
      });
    }
  };

  handleCheckoutClick = () => {
    this.setState({
      cartItems: [],
    });
  };

  handleEditSubmit = (id, attrs) => {
    this.setState({
      products: this.state.products.map((p) => {
        return p.id === id ? Object.assign({}, p, attrs) : p;
      })
    })
  };

  handleDeleteClick = (id) => {
    this.setState({
      products: this.state.products.filter((p) => p.id !== id)
    });
  }

  render() {
    const { products, cartItems } = this.state;

    return (
      <div id="app">
        <Header
          cartItems={cartItems}
          onCheckoutClick={this.handleCheckoutClick}
        />
        <main>
          <ProductListing
            products={products}
            onAddToCartClick={this.handleAddToCartClick}
            onEditSubmit={this.handleEditSubmit}
            onDeleteClick={this.handleDeleteClick}
          />

          <AddProductForm
            onAddClick={this.handleAddClick}
          />
        </main>
      </div>
    );
  }
}

export default Shop;
