import "./footer.scss"

import { GiPositionMarker } from "react-icons/gi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
        <div className="left">
            <h2 className='logo'>LW Store<span className='dot'>.</span></h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur veniam numquam voluptatibus quisquam neque.             </p>
        </div>
        <div className="center">
            <h2>Links</h2>
            <div className="links">
            <ul>
                <Link to='/'>Home</Link>
                <Link to ='/products'>Products</Link>
                <Link to='/cart'>Cart</Link>
            </ul>
            </div>
        </div>
        <div className="right">
            <h2>Contact</h2>
            <div className="contact">
                <p><GiPositionMarker /> 6 rue des bons enfants</p>
                <p><BsFillTelephoneFill /> +33 06 95 52 06 38</p>
                <p><AiOutlineMail /> alexandreflo@hotmail.fr</p>
            </div>
          
        </div>
    </div>
  )
}
