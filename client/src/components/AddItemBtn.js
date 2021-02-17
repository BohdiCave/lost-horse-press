import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import AddItemModal from './AddItemModal.js';
import {FaShoppingCart} from 'react-icons/fa';
import { addToCart } from '../actions/cartActions';

export default function AddItemBtn(props) {

  const [show, setShow] = useState(false);
  const [prodId, setProdId] = useState();
  const [input, setInput] = useState({
    prodQty: ""
  });

  useEffect(() => {
    setProdId({prodId: props.id});
  },[]);

  const dispatch = useDispatch();
  
  const showModal = () => {
    setShow({show: true});
  };

  const hideModal = () => {
    setShow({show: false});
  };

  const onChange = (e) => {
    setInput({[e.target.name]: e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(input, prodId);
    dispatch(addToCart(3, prodId, input.prodQty));
  }

  return(
    <>
      <AddItemModal id={props.id} show={show} handleClose={hideModal} />
        <form onSubmit={onSubmit} className="qty">
          <label htmlFor="quantity">
            Qty:
            <input type="text" name="prodQty" id="quantity" onChange={onChange} value={input.value} />
          </label>
          <button type="submit" className="button addCart" onClick={showModal}>
            <span className="shop">
              <FaShoppingCart className="cart" />
              Add to Cart
            </span>
          </button>
        </form>
    </>
  );
}