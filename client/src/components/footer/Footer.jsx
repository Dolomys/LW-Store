import "./footer.scss"

import { GiPositionMarker } from "react-icons/gi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="footer">
        <div className="left">
            <h2 className='logo'>FW Store<span className='dot'>.</span></h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur veniam numquam voluptatibus quisquam neque. 
                Qui eligendi et vitae ducimus sequi ab, accusamus consectetur atque numquam rem tenetur corporis libero suscipi.
            </p>
        </div>
        <div className="center">
            <h2>Links</h2>
            <div className="links">
            <ul className="left">
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
                <li>About</li>
            </ul>
            <ul className="right">
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
                <li>About</li>
            </ul>
            </div>
        </div>
        <div className="right">
            <h2>Contact</h2>
            <div className="contact">
                <p><GiPositionMarker /> 69 rue du Mont Olympe</p>
                <p><BsFillTelephoneFill /> +33 06 95 52 06 38</p>
                <p><AiOutlineMail /> 69 rue du Mont Olympe</p>
            </div>
          
        </div>
    </div>
  )
}
