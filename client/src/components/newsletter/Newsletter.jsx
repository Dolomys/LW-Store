import "./newsletter.scss"
import { RiSendPlane2Fill } from "react-icons/ri";
import {motion} from "framer-motion"

export const Newsletter = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="newsletter">
        <h1>Newsletter</h1>
        <p>Get Updated on all our new Collections !</p>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Email"/>
            <motion.button
             whileHover={{scale:"1.1"}}
             whileTap={{scale:"0.9"}}
             type="submit"><RiSendPlane2Fill /></motion.button>
        </form>
    </div>
  )
}
