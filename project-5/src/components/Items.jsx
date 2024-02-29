import React,{useContext}from 'react'
// import { CartContext } from '../context/CartContext'
import { useCart } from '../context/CartContext';

const Items = (props) => {

    const cart = useCart();
    console.log("cart : ",cart);


    const submitHandler = () =>{
        cart.setItems(
            [...cart.items,
                { name:props.name,price : props.price}
            ])
    }
  return (
    <div className='Item-card'>
        <h2>{props.name}</h2>
        <p>Price : ${props.price}</p>
        <button onClick={submitHandler}>Add to cart</button>
    </div>
  )
}

export default Items