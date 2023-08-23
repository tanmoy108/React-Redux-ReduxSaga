import React from "react";
import { resultCount } from "../../redux/cart/cartSelector";
import { useSelector } from "react-redux";
import "./Header.scss";

const Header = () => {
  const count = useSelector(resultCount)
  // console.log(count);
  return (
    <div className='Header'>
      <div className="main">
        <div className="logo">
          <img width="30" height="30" src="https://img.icons8.com/ios/50/shopping-bag--v1.png" alt="shopping-bag--v1" />
        </div>
        <div className='cart'>
          <img width="30" height="30" src="https://img.icons8.com/ios/50/shopping-cart--v1.png" alt="shopping-cart--v1" />
          <div className="count">
            <div className={`text-background ${count.length !== 0 ? 'addcolor' : ''}`}>
              <p className='count-value'>{count.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
export default Header;