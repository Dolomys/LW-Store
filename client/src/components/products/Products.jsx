import "./products.scss"

import  {motion} from "framer-motion"
import { Sort } from "../sort/Sort"
import { Link } from "react-router-dom"

export const Products = () => {

  const products = [
    {
      id:1,
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80",
      name: "Red Shoes",
      price: 999
    },
    {
      id:1,
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80",
      name: "Red Shoes",
      price: 999
    },
    {
      id:1,
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80",
      name: "Red Shoes",
      price: 999
    },
    {
      id:1,
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80",
      name: "Red Shoes",
      price: 999
    },
    {
      id:1,
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80",
      name: "Red Shoes",
      price: 999
    },
    {
      id:1,
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80",
      name: "Red Shoes",
      price: 999
    },
    {
      id:1,
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80",
      name: "Red Shoes",
      price: 999
    },
    {
      id:1,
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80",
      name: "Red Shoes",
      price: 999
    },
    {
      id:1,
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80",
      name: "Red Shoes",
      price: 999
    },
    {
      id:1,
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80",
      name: "Red Shoes",
      price: 999
    },
    {
      id:1,
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80",
      name: "Red Shoes",
      price: 999
    },
    {
      id:1,
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80",
      name: "Red Shoes",
      price: 999
    },
  ]
  return (
    <div className="products">
      {products && products.map(product => (
        <motion.div
        className="singleProduct"
        whileHover={{scale:"1.1"}}
        whileTap={{scale:'0.9'}}
        >
          <Link to={`/product/${product.id}`}>
            <img src={product.img} alt="product image" />
            <span className="productName">{product.name}</span>
            <span className="productPrice">{product.price}€</span>
          </Link>
     
        </motion.div>
      ))}
    </div>
  )
}
