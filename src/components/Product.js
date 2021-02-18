import React, {Component} from 'react';
import EditProductForm from './EditProductForm';

class Product extends Component {
  state = {
    edit: false
  };

  handleEditSubmit = (attrs) => {
    this.setState({
      edit: false
    });
    this.props.onEditSubmit(this.props.id, attrs);
  };

  handleEditClick = (e) => {
    this.setState({
      edit: true
    })
  };

  handleDeleteClick = (e) => {
    return this.props.onDeleteClick(this.props.id);
  };

  handleCancelClick = (e) => {
    this.setState({
      edit: false
    });
  };

  render() {
    const disabledClass = this.props.quantity === 0 ? 'disabled' : '';
    const handleAddToCartClick = (e) => {
      if (this.props.quantity === 0) return;
      this.props.onAddToCartClick(this.props.id);
    };

    return (
      <div className="product">
        <div className="product-details">
          <h3>{this.props.title}</h3>
          <p className="price">${this.props.price}</p>
          <p className="quantity">{this.props.quantity} left in stock</p>
          <div className="actions product-actions">
            <a
              className={`button add-to-cart ${disabledClass}`}
              onClick={handleAddToCartClick}>Add to Cart
            </a>
            <a className="button edit" onClick={this.handleEditClick}>Edit</a>
          </div>
          <a className="delete-button" onClick={this.handleDeleteClick}><span>X</span></a>
        </div>

        {
          this.state.edit ? (
            <EditProductForm
              product={{title: this.props.title, price: this.props.price, quantity: this.props.quantity}}
              onSubmit={this.handleEditSubmit}
              onCancelClick={this.handleCancelClick}
            />
          ) : ''
        }
      </div>
    );
  }
}

export default Product;
