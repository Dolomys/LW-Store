import { Footer } from "../../components/footer/Footer"
import "./cart.scss"
import { Link } from 'react-router-dom';
import { BsFillTrash2Fill } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/Context";

export const Cart = () => {

  const {cartItems, dispatch} = useContext(CartContext)

  const [subTotal, setSubTotal] = useState()

  const [checkout,setCheckout]= useState(false)


  useEffect(()=>{
    
    let totalPrice = 0
    console.log(cartItems)
    for(let i = 0; i < cartItems.length; i++) {
      totalPrice += cartItems[i].totalPrice
    }
    setSubTotal(totalPrice)

  },[cartItems])
  
  return (
    <div className="cart">
      <div className="cartTitle">
        <h1>Your Cart</h1>
      </div>
      <div className="cartLinks">
        <Link to="/products" className="continueShop">CONTINUE SHOPPING</Link>
        <Link to="#" className="goCheckout"  onClick={() => setCheckout(true)}>CHECKOUT</Link>
      </div>
      <div className="cartContainer">
        <div className="left">
            
        {cartItems && cartItems.map((item) => (  
        <div className="productWrapper">
            <div className="productImg">
              <img src={item.img} alt="" />
            </div>
            <div className="productDesc">
              <span><strong>Product :</strong> {item.title} </span>
              <span><strong>ID :</strong> {item._id} </span>
              <span><strong>Size :</strong>{item.size}</span>
            </div>
            <div className="productPrice">
              <div className="productAmount">
              <span onClick={() => dispatch({type: 'DECREASE', payload:item})}> — </span>
                <span>{item.quantity} </span>
                <span onClick={() => dispatch({type: 'INCREASE', payload:item})}> + </span>
                <span onClick={() => dispatch({type: 'REMOVE_ITEM', payload:item})}><BsFillTrash2Fill /></span>
              </div>
              <span>{item.totalPrice}€</span>
            </div>
          </div>
          ))}
        </div>
        <div className="right">
          <div className="cartRecap">
            <h3>ODER SUMMARY</h3>
            <div className="subtotal">
              <span>Total:</span>
              <span>{subTotal}€</span>
            </div>
            <button onClick={() => setCheckout(true)}>CHECKOUT</button>
            {checkout &&
          <span className="errorMsg">The Payment is not available yet</span>}
          </div>
        </div>
      </div>
      <Footer />
    </div>


  )
}
