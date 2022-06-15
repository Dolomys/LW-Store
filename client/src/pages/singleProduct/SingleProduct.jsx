import { BsCartPlus, BsHeart, BsHeartFill } from "react-icons/bs"
import "./singleProduct.scss"
import {motion} from "framer-motion"
import { useState } from "react"
import { Footer } from "../../components/footer/Footer"

export const SingleProduct = () => {

    const [heart, setHeart] = useState(false)
    const [color, setColor] = useState("")

  return (
    <>
       <div className="singleProduct">
        <div className="left">
            <div className="imgContainer">
                <img src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80" alt="" />
            </div>
        </div>
        <div className="right">
            <div className="productWrapper">
                <h1 className="productTitle">Product Title - RED SHOES</h1>
                <p className="ProductDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsa maxime recusandae, amet accusantium debitis, eos eum voluptates rerum minima alias a, deserunt ratione inventore in illum culpa harum omnis!</p>
                <p className="productPrice">999 € </p>
                <div className="infos">
                    <div className="colors">
                      <span>Color </span>
                      <div className="color active" style={{backgroundColor: "red"}}></div>
                      <div className="color" style={{backgroundColor: "blue"}}></div>
                      <div className="color" style={{backgroundColor: "green"}}></div>
                    </div>
                    <div className="size">
                        <label htmlFor="size">Size</label>
                        <select name="size" id="size">
                            <option value="S">XS</option>
                            <option value="S">S</option>
                            <option value="S">M</option>
                            <option value="S">L</option>
                        </select>
                    </div>
                </div>
                <div className="addTo">
                    <motion.button 
                    whileHover={{scale:"1.1"}}
                    whileTap={{scale:'0.9'}}
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
                </div>
            </div>
        </div>
    </div>
     <Footer />
    </>
 
  )
}
