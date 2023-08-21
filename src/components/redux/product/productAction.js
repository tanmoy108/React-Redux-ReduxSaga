import { PRODUCT_ACTION_TYPE } from "./productActionType"

export const productAction = () => {
  // console.log("hello");
  return {
    type: PRODUCT_ACTION_TYPE.GET_PRODUCT_LIST
  }
}