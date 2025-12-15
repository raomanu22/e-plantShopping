import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/CartSlice';
import { Link } from 'react-router-dom';

const CartItem = () => {
  const items = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.totalPrice);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, qty) => {
    if (qty < 1) return;
    dispatch(updateQuantity({ id, quantity: qty }));
  };

  return (
    <div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/ProductList">Plants</Link>
        <Link to="/Cart">Cart ({items.reduce((sum, i) => sum + i.quantity, 0)})</Link>
      </nav>

      <h2>Shopping Cart</h2>
      {items.length === 0 ? <p>Cart is empty</p> :
        items.map(item => (
          <div key={item.id} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <p>Total: ₹{item.price * item.quantity}</p>
            <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
            <span> {item.quantity} </span>
            <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
          </div>
        ))
      }
      <h3>Total Amount: ₹{total}</h3>
      <button onClick={() => alert('Coming Soon')}>Checkout</button>
      <Link to="/ProductList"><button>Continue Shopping</button></Link>
    </div>
  );
};

export default CartItem;
