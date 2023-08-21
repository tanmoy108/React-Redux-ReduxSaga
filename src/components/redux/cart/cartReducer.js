import { CART_ACTION_TYPE } from "./cartActionType";

// const INITIAL_STATE = {
//   productData: []
// }
// console.log(INITIAL_STATE);
const cartReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPE.ADD_TO_CART:
      return [
        ...state,
        payload
      ]
    case CART_ACTION_TYPE.REMOVE_CART:
      return state.filter(item => item.id !== payload);
    default:
      return state
  }

}

export default cartReducer;