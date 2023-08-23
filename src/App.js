import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/ui/header/Header';
import ProductContainer from './components/ui/product/productContainer/ProductContainer';
import Search from './components/ui/search/Search';
import { productSelector } from './components/redux/product/productSelector';
import { productAction } from "./components/redux/product/productAction";
import { useState } from "react";
import './App.scss';

function App() {
  const dispatch = useDispatch();
  const productList = useSelector(productSelector)
  const [filterProduct, setFilterProduct] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(productAction())
  }, [])

  useEffect(() => {
    setFilterProduct(productList)
  }, [productList])

  useEffect(() => {
    const newArray = productList.filter((item) => {
      return item.title.toLowerCase().includes(search)
    })
    setFilterProduct(newArray);
  }, [search])

  const InputSearch = (e) => {
    const searchString = e.target.value.toLowerCase();
    setSearch(searchString);
  }

  console.log('filter', filterProduct)
  return (
    <div className="App">
      <Header />
      <Search SearchValue={InputSearch} />
      <ProductContainer productArray={filterProduct} />
    </div>
  );
}

export default App;
