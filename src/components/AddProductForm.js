import React, {Component} from 'react';
import Form from './Form';

export default class AddProductForm extends Component {

  state = {
    product: {
      title: '',
      quantity: '',
      price: ''
    }
  };

  handleInputChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    (name === 'quantity' || name === 'price') && (value = Number(value));

    this.setState({
      product: Object.assign({}, this.state.product, {[name]: value})
    });
  };

  handleAddClick = (e) => {
    this.props.onAddClick(this.state.product);
  };

  render() {
    return (
      <div className="add-form visible">
        <p><a className="button add-product-button">Add A Product</a></p>
        <h3>Add Product</h3>
        <Form
          submitText={"Add"}
          title={this.state.title}
          price={this.state.price}
          quantity={this.state.quantity}
          onInputChange={this.handleInputChange}
          onSubmit={this.handleAddClick}
        />
      </div>
    );
  }
}
