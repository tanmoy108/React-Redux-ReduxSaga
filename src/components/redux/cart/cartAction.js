import { CART_ACTION_TYPE } from "./cartActionType";

export const addToCart = (product) => {
  return {
    type: CART_ACTION_TYPE.ADD_TO_CART,
    payload: product
  }
}
export const removeCart = (product) => {
  return {
    type: CART_ACTION_TYPE.REMOVE_CART,
    payload: product
  }
}