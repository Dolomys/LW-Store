import "./products.scss"

import  {motion} from "framer-motion"
import { Sort } from "../sort/Sort"
import { Link, useParams, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from 'axios'
import { productsData } from "../../data/products"

export const Products = ({sort, filters, setFilters}) => {


  const [products, setProducts] = useState([])
  const [finalProducts, setFinalProducts] = useState()

  //First Render
  useEffect(() => {
    const res = async() => {
      // let call = await axios.get( `http://localhost:5000/api/products/`)
      // setProducts(call.data)
      setProducts(productsData)
    }
    res()

    //Reset filters on render
    setFilters()
    
  },[])

  //Re-Render when filter update
  useEffect(() => {
      filters && setFinalProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  },[filters])


  //Re-Render when sort update
  useEffect(() => {
    if(finalProducts) {
      if (sort === "Price ( Lowest )") {
        setFinalProducts((prev) =>
          [...prev].sort((a, b) => a.price - b.price)
        );
      } 
      else {
        setFinalProducts((prev) =>
          [...prev].sort((a, b) => b.price - a.price)
        );
      }
    }
    else {
      if (sort === "Price ( Lowest )") {
        setProducts((prev) =>
          [...prev].sort((a, b) => a.price - b.price)
        );
      } 
      else {
        setProducts((prev) =>
          [...prev].sort((a, b) => b.price - a.price)
        );
      }
    }
  },[sort])


  return (
    <div className="products">
      {finalProducts && finalProducts.map(product => (
        <motion.div
        className="singleProduct"
        whileHover={{scale:"1.1"}}
        whileTap={{scale:'0.9'}}
        key={product._id}
        >
          <Link to={`/product/${product._id}`}>
            <img src={product.img} alt="product image" />
            <span className="productName">{product.title}</span>
            <span className="productPrice">{product.price}€</span>
          </Link>
        </motion.div>
      ))}

      {!finalProducts && products.map(product => (
        <motion.div
        className="singleProduct"
        whileHover={{scale:"1.1"}}
        whileTap={{scale:'0.9'}}
        key={product._id}
        >
          <Link to={`/product/${product._id}`}>
            <img src={product.img} alt="product image" />
            <span className="productName">{product.title}</span>
            <span className="productPrice">{product.price}€</span>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
