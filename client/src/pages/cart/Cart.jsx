import { Footer } from "../../components/footer/Footer"
import "./cart.scss"
import { Link } from 'react-router-dom';

export const Cart = () => {
  return (
    <div className="cart">
      <div className="cartTitle">
        <h1>Your Cart</h1>
      </div>
      <div className="cartLinks">
        <Link to="/products" className="continueShop">CONTINUE SHOPPING</Link>
        <Link to="#" className="goCheckout">CHECKOUT</Link>
      </div>
      <div className="cartContainer">
        <div className="left">
          <div className="productWrapper">
            <div className="productImg">
              <img src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80" alt="" />
            </div>
            <div className="productDesc">
              <span><strong>Product :</strong> Product Name - RED SHOES</span>
              <span><strong>ID :</strong> 2414845647 </span>
              <div className="productColor" style={{backgroundColor:"red"}}></div>
              <span><strong>Size :</strong> 42 </span>
            </div>
            <div className="productPrice">
              <div className="productAmount">
                <span className="decrease">—</span>
                <span>1</span>
                <span className="increase">+</span>
              </div>
              <span>999€</span>
            </div>
          </div>
          <div className="productWrapper">
            <div className="productImg">
              <img src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80" alt="" />
            </div>
            <div className="productDesc">
              <span><strong>Product :</strong> Product Name - RED SHOES</span>
              <span><strong>ID :</strong> 2414845647 </span>
              <div className="productColor" style={{backgroundColor:"red"}}></div>
              <span><strong>Size :</strong> 42 </span>
            </div>
            <div className="productPrice">
              <div className="productAmount">
                <span className="decrease">—</span>
                <span>1</span>
                <span className="increase">+</span>
              </div>
              <span>999€</span>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="cartRecap">
            <h3>ODER SUMMARY</h3>
            <div className="subtotal">
              <span>Subtotal:</span>
              <span>999€</span>
            </div>
            <div className="shippingPrice">
              <span>Shipping Price:</span>
              <span>5€</span>
            </div>
            <div className="discount">
              <span>Discount:</span>
              <span>-15€</span>
            </div>
            <div className="total">
              <span className="total">Total:</span>
              <span>989€</span>
            </div>
            <button>CHECKOUT</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>


  )
}
