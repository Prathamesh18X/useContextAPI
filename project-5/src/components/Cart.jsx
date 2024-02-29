import React,{useContext} from 'react'
// import { CartContext } from '../context/CartContext'
import { useCart } from '../context/CartContext';

const Cart = () => {

    const cart = useCart();

    const total = cart.items.reduce((a,b)=>a + b.price, 0)

  return (
    <div>
        <h2>Cart</h2>
        {cart && cart.items.map((item)=>(
            <li>{item.name} - ${item.price}</li>
        ))}
        <h4>Total cart Bill : ${total}</h4>

    </div>
  )
}

export default Cart