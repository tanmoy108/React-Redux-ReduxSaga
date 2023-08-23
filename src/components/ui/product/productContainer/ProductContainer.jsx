import React from "react";
import ProductItem from "../productItem/ProductItem";
import "./ProductContainer.scss"

const ProductContainer = (props) => {
  console.log("productContainer")
  const { productArray } = props;
  console.log('aarray', props.productArray);
  return (
    <div className="productContainer">
      {
        productArray.map((item) => {
          return (
            <ProductItem key={item.id} value={item} />
          )
        })
      }
    </div>
  )
}

export default ProductContainer;