import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCart = () =>{
    return useContext(CartContext)
};

export const CartProvider = ({children}) =>{
    const [items, setItems] = useState([]);
    return(
        <CartContext.Provider value={{items , setItems}}>
            {children}
        </CartContext.Provider>
    );
};

