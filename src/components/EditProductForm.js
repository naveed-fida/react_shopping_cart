import React, {Component} from 'react';
import Form from './Form';

export default class EditProductForm extends Component {

  state = {
    product: this.props.product
  };

  componentWillReceiveProps(props) {
    this.setState({
      product: props.product
    });
  }

  handleInputChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    (name === 'quantity' || name === 'price') && (value = Number(value));

    this.setState({
      product: Object.assign({}, this.state.product, {[name]: value})
    });
  };

  handleSubmit = (e) => {
    this.props.onSubmit(this.state.product);
  };

  render() {
    const product = this.state.product;
    return (
      <div className="edit-form">
        <h3>Edit Product</h3>
        <Form
          submitText={"Update"}
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          onInputChange={this.handleInputChange}
          onSubmit={this.handleSubmit}
          onCancelClick={this.props.onCancelClick}
        />
      </div>
    );
  }
}
