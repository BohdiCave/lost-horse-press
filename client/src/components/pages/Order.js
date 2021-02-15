import React, { Component} from "react";
import { Link, withRouter } from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa";
// import PropTypes from "prop-types";
// import {connect} from "react-redux";

// import {getCart, delFromCart} from "../../actions/cartActions";
// import {getOrders, checkout} from "../../actions/orderActions";
// import {getItems, delItem, updItem} from "../../actions/itemActions";

import "../styles/order.css";

class Order extends Component {
    
  constructor() {
    super();
    this.state = {
      cart: "",
      orders: "",
      items: "",
      item: "",
      errors: {}
    };
  };

//   componentDidMount() {
//     this.props.getCart();
//     this.props.getItems();
//     this.props.getOrders();
//   };
  
//   componentWillReceiveProps(nextProps) {
//     if(nextProps.errors) {
//       this.setState({
//         errors: nextProps.errors
//       });
//     }
//   };
  
//   delFromCart(event, id) {
//     event.preventDefault();
//     this.props.delFromCart(id);
//   };

//   checkout(event, data) {
//     event.preventDefault();
//     this.props.checkout();
//   };

//   delItem(event, id) {
//     event.preventDefault();
//     this.props.delItem(id);
//   };

//   updItem(event, id) {
//     event.preventDefault();
//     this.props.updItem(id);
//   };

  render() {
    const { errors } = this.state;
    return (
      <div id="order">

        <Link to="/home"> {<em>&larr; Home</em>} </Link>
      
        <div className="row" id="shopCart">
          <div className="col">
            <h3>Orders - Shopping Cart</h3>
            <p>{
                this.props.cart 
                ?
                <span>{this.props.cart}</span> 
                : 
                <>
                <span className="red-text">Your cart is empty &rarr; </span> 
                <strong>please browse our <Link to="/catalog">catalog</Link></strong>
                </>
            }</p>
          </div>
        </div>
      
        <div className="row" id="pmtTypes">
        {/* Make an accordion for order options ? */} 
            <div className="col">
                <div id="mailOrder">
                    <h4>Mail Orders - PayPal - Review and Desk Copies</h4>
                    <ul>
                    <li>
                        We accept the following forms of payment: <span>cash</span>, <span>checks</span>, <span>PayPal</span>.
                    </li>
                    <li>
                        Wherever you see a <FaShoppingCart /> icon and <span>'Add to Cart'</span>, you can order and pay via <span>PayPal</span>. Please use the <span>'Customer'</span> button, if you prefer this way of payment.
                    </li>
                    <li>
                        We offer a <span className="green-text"> 40% discount </span>  to bookstores operated <span>independently</span> or by a <span>university</span> or <span> college</span>.
                    </li>
                    <li>
                        Printable order forms: 
                        <Link to="/orderForm"> &rarr; Regular order </Link>    
                        <Link to="/broadsideForm"> &rarr; Broadside order</Link>
                    </li>
                    
                    <li>
                        <strong>Mail orders</strong> should be directed to the address below. <br></br> 
                        <strong>For review copies,</strong> please submit a written request on a letterhead.
                    </li>
                    </ul>

                    <table id="mail">
                      <tbody>
                        <tr>
                            <th><span>Address:</span></th>
                           
                            <td><address>
                                Lost Horse Press<br></br>
                                105 Lost Horse Lane<br></br>
                                Sandpoint, Idaho 83864
                            </address></td>
                        </tr>
                        <tr>
                            <th><span>Telephone/Email:</span></th>
                            <td>
                                +1.208.255.4410<br></br>
                                <Link to="mailto:losthorsepress@mindspring.com">
                                    losthorsepress@mindspring.com
                                </Link>
                            </td>
                        </tr>
                      </tbody>
                    </table>
                </div>
                <div id="distributor">
                    <h4>Orders from Our Distributor</h4>
                    <table id="dist"><tbody>
                        <tr>
                            <th><span>Mail Orders:</span></th>
                            <td><address>
                                    University of Washington Press<br></br>
                                    PO Box 50096<br></br>
                                    Seattle, WA 98145-5096
                            </address></td>
                        </tr>
                        <tr>
                            <th><span>Telephone Orders:</span></th>
                            <td>+1-800-537-5487</td>
                        </tr>
                        <tr>
                            <th><span>Online Orders:</span></th>
                            <td><Link to="http://www.washington.edu/uwpress">
                                www.washington.edu/uwpress
                            </Link></td>
                        </tr>
                    </tbody></table>
                </div>
            </div>
        </div>
      </div>
    );
  }
};

// Order.propTypes = {
//     getCart: PropTypes.func.isRequired,
//     getItems: PropTypes.func.isRequired,
//     getOrders: PropTypes.func.isRequired,
//     checkout: PropTypes.func.isRequired,
//     delFromCart: PropTypes.func.isRequired,
//     delItem: PropTypes.func.isRequired,
//     updItem: PropTypes.func.isRequired,
//     cart: PropTypes.object.isRequired,
//     item: PropTypes.object.isRequired,
//     items: PropTypes.array.isRequired,
//     orders: PropTypes.array.isRequired,
//     errors: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//     cart: state.cart.item,
//     items: state.items.items,
//     orders: state.orders.items,
//     errors: state.errors
// });

// export default connect(
//     mapStateToProps, 
//     {getOrders, getItems, getCart, delFromCart, delItem, updItem, checkout}
// )(Order);

export default Order;