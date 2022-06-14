import "./products.scss"

import  {motion} from "framer-motion"

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
        <motion.a 
        className="singleProduct"
        href={`/product/${product.id}`}
        whileHover={{scale:"1.1"}}
        whileTap={{scale:'0.9'}}
        >
            <img src={product.img} alt="product image" />
            <span className="productName">{product.name}</span>
            <span className="productPrice">{product.price}€</span>
        </motion.a>
      ))}
    </div>
  )
}
