import './App.scss';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { addToCart, removeCart } from './components/redux/cart/cartAction';
import { resultCount } from "./components/redux/cart/cartSelector";
import { productAction } from './components/redux/product/productAction';
import { productSelector } from './components/redux/product/productSelector';

function App() {
  const product = {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  }
  const dispatch = useDispatch();
  const count = useSelector(resultCount)
  const productList = useSelector(productSelector)
  console.log("list from saga", productList)
  console.log(count);
  return (
    <div className="App">
      <div className='Header'>
        <div className="main">
          <div className="logo">
            <img width="30" height="30" src="https://img.icons8.com/ios/50/shopping-bag--v1.png" alt="shopping-bag--v1" />
          </div>
          <div className='cart'>
            <img width="30" height="30" src="https://img.icons8.com/ios/50/shopping-cart--v1.png" alt="shopping-cart--v1" />
            <div className='text-background'>
              <p className='count-value'>{count.length}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='cart-main'>
        <button onClick={() => dispatch(addToCart(product))}>Add button</button>
        <button onClick={() => dispatch(removeCart(product.id))}>Remove button</button>
        <button onClick={() => dispatch(productAction())}>Get Product</button>
      </div>
    </div>
  );
}

export default App;
