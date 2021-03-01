import React from "react";
import {useSelector} from 'react-redux';
import '../styles/modal.css';
import { FaShoppingCart } from "react-icons/fa";

export default function Modal({ handleClose, show, id }) {

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const cart = useSelector(state => state.cart.items);

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="close-btn">
          <FaShoppingCart id="cart-icon" />
          <button id="modal-close" type="button" onClick={handleClose}>
            Close Cart
          </button>
        </div>
        <div className="item-list">
          <span>Shopping Cart</span>
          <ul className="item-info" id="">
            <li></li>
          </ul>
        </div>
      </section>
    </div>
  );
};
