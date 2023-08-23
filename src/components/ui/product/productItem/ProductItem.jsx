import React from "react";
import { useDispatch } from 'react-redux';
import { addToCart, removeCart } from '../../../redux/cart/cartAction';
import "./ProductItem.scss";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { id, title, price, description, category, image } = props.value
  return (
    <>
      <div className="product-card">
        <div className="badge">Hot</div>
        <div className="product-tumb">
          <img src={image} alt={`image_no_${id}`} />
        </div>
        <div className="product-details">
          <span className="product-catagory">{category}</span>
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="product-bottom-details">
            <div className="product-price">{`$${price}`}</div>
            <div className="product-links">
              <div onClick={() => dispatch(addToCart(props.value))}><i className="fa fa-cart-plus fa-lg" aria-hidden="true"></i></div>
              <div className="cross" onClick={() => dispatch(removeCart(id))}> <i className="fa fa-times fa-lg" aria-hidden="true"></i></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem;
