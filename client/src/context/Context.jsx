import { createContext, useEffect, useReducer } from "react"
import Reducer from "./Reducer"

const INITIAL_STATE =  {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [] ,
    isCheckout: false,
}
 const CartContext = createContext(INITIAL_STATE)

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE)

    useEffect(()=> {
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems.length > 0 ? state.cartItems : []))
    },[state.cartItems])

    return (
        <CartContext.Provider value={{
            cartItems: state.cartItems,
            isCheckout: state.isCheckout,
            dispatch,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext