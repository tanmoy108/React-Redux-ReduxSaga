import { takeEvery, put } from 'redux-saga/effects'
import { PRODUCT_ACTION_TYPE } from '../product/productActionType';


function* getProducts() {
  console.log("getproduct")
  let data = yield fetch('https://fakestoreapi.com/products')
  data = yield data.json();
  yield put({ type: PRODUCT_ACTION_TYPE.PUT_PRODUCT_LIST, payload: data })
}

function* productSaga() {
  // console.warn("hello2")
  yield takeEvery(PRODUCT_ACTION_TYPE.GET_PRODUCT_LIST, getProducts)
}

export default productSaga;