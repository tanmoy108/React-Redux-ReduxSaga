import { PRODUCT_ACTION_TYPE } from "./productActionType";

const productReducer = (state = [], action) => {

  const { type, payload } = action;

  switch (type) {
    case PRODUCT_ACTION_TYPE.PUT_PRODUCT_LIST:
      // console.log(action);
      return [
        ...payload
      ]
    default:
      return state;
  }

}

export default productReducer;