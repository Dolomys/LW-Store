import { BsHeart, BsHeartFill } from "react-icons/bs"
import "./singleProduct.scss"
import {motion} from "framer-motion"
import { useState } from "react"
import { Footer } from "../../components/footer/Footer"
import { useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import CartContext from "../../context/Context"
import { addToCart } from "../../context/Actions"
import { productsData } from "../../data/products"

export const SingleProduct = () => {

    const {state, dispatch} = useContext(CartContext)

    const [heart, setHeart] = useState(false)
    const [error, setError] = useState()

    const [quantity, setQuantity] = useState(1)
    const [selectedSize, setSelectedSize] = useState()

    let { id } = useParams()
    const [product, setProduct] = useState('')

    useEffect(()=>{
        const res = async() => {
            // let call = await axios.get(`http://localhost:5000/api/products/find/${id}`)  
            // setProduct(call.data)
            let singleProduct = productsData.filter(e => e._id == id)
            console.log(singleProduct)
            setProduct(singleProduct[0])
          }
          
          res()
    },[])

   
    const handleAdd = () => {
        setError()
        const newId = id + selectedSize
        const data = {
            title: product.title,
            desc: product.desc,
            img: product.img,
            size: selectedSize,
            _id: newId,
            quantity: quantity,
            price: product.price,
            totalPrice: product.price * quantity,
        }
        if(selectedSize){
        // product.quantity = quantity
        // product.totalPrice = product.price * quantity
        // product.selectedSize = selectedSize
        // product._id += selectedSize
        // console.log(product)
        dispatch({type: 'ADD_TO_CART', payload:data})
        }
        else {
            setError("Please Enter a Size")
        }   
    }

  return (
    <>
    {product &&    <div className="singleProduct">
        <div className="left">
            <div className="imgContainer">
                <img src={product.img} alt="" />
            </div>
        </div>
        <div className="right">
            <div className="productWrapper">
                <h1 className="productTitle">{product.title}</h1>
                <p className="ProductDesc">{product.desc}</p>
                <p className="productPrice">{product.price} € </p>
                <div className="infos">
                    {/* <div className="colors">
                      <span>Color </span>
                      <div className="color active" style={{backgroundColor: "red"}}></div>
                      <div className="color" style={{backgroundColor: "blue"}}></div>
                      <div className="color" style={{backgroundColor: "green"}}></div>
                    </div> */}
                    <div className="size">
                        <label htmlFor="size">Size</label>
                        <select name="size" id="size" onChange={(e) => setSelectedSize(e.target.value)}>
                        <option selected disabled>Choose Size</option>
                            {product.size && product.size.map((size) => (
                                <option value={size}>{size}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="addTo">
                    <span onClick={() => {if(quantity > 1) setQuantity(quantity - 1)}}> — </span>
                    <span>{quantity}</span>
                    <span onClick={() => setQuantity(quantity + 1)}> + </span>
                    <motion.button 
                    whileHover={{scale:"1.1"}}
                    whileTap={{scale:'0.9'}}
                    onClick={handleAdd}
                    >Add to Cart</motion.button>
                    <motion.button
                     className="favorite"
                     whileHover={{scale:"1.1"}}
                     whileTap={{scale:'0.9'}}
                     onClick={() => setHeart(!heart)}
                     >{heart ?
                        <BsHeart />
                        :
                        <BsHeartFill />
                    }
                     </motion.button>
                     {error && (
                        <span style={{color:'red'}}>{error}</span>
                     )}
                </div>
            </div>
        </div>
    </div>
    }
     <Footer />
    </>
 
  )
}
