import React, {useState} from "react";
import {useDispatch} from "react-redux";
import AddItemModal from './AddItemModal.js';
import {FaShoppingCart} from 'react-icons/fa';
import { addToCart } from '../actions/cartActions';

export default function AddItemBtn({id}) {
  
  const [input, setInput] = useState({
    value: "",
    show: false,
    userId: 3
  });

  const dispatch = useDispatch();
  
  const showModal = () => {
    const userId = input.userId;
    const prodId = {id};
    const prodQty = input.value; 
    dispatch(addToCart(userId, prodId, prodQty));
    setInput({show: true});
  };

  const hideModal = () => {
    setInput({show: false});
  };

  const onChange = (e) => {
    setInput({value: e.target.value})
  }

  return(
    <div>
      <AddItemModal id={id} show={input.show} handleClose={hideModal} />
        <form className="qty">
          <label htmlFor="quantity">Qty:</label>
          <input type="text" placeholder="0" id="quantity" onChange={onChange} value={input.value} />
          <button type="button" className="button addCart" onClick={showModal}>
            <span className="shop">
              <FaShoppingCart className="cart" />
              Add to Cart
            </span>
          </button>
        </form>
    </div>
  );
}