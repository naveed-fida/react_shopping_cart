import React, {Component} from 'react';

const Form = ({title, price, quantity, onInputChange, onSubmit, submitText, onCancelClick}) => {
  return (
    <form>
      <div className="input-group">
        <label htmlFor="product-name">Product Name</label>
        <input
          type="text"
          id="product-name"
          name="title"
          value={title}
          onChange={onInputChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="product-price">Price</label>
        <input
          type="text"
          id="product-price"
          value={price}
          name="price"
          onChange={onInputChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="product-quantity">Quantity</label>
        <input
          type="text"
          id="product-quantity"
          value={quantity}
          name="quantity"
          onChange={onInputChange}
        />
      </div>

      <div className="actions form-actions">
        <a className="button" onClick={onSubmit}>{submitText}</a>
        {
          submitText !== 'Add' ? (
            <a className="button" onClick={onCancelClick}>Cancel</a>
          ) : ''
        }
      </div>
    </form>
  );
}

export default Form;
