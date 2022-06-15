import './topbar.scss'

import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Topbar = ({menuOpen,setMenuOpen}) => {

  const [english, setEnglish] = useState(true)

  return (
    <div className={"topbar "+ (menuOpen && "active ")}>
      <div className="wrapper">
      <div className="left">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={"line1 "}></span>
            <span className={"line2 "}></span>
            <span className={"line3 "}></span>
          </div>
        </div>
        <div className="center">
          <Link to="/" className='logo'>FW Store<span className='dot'>.</span></Link>
        </div>
        <div className="right">
          <div className="language" onClick={() => setEnglish(!english)}>
            {english ? 
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -10 3020 2020">
              <g id="French_Flag_by_Adam_Stanislav">
                <title>Flag of France, by Adam Stanislav</title>
                <rect fill="rgb(0%,14%,58%)" x="0" y="0" width="1010" height="2000" />
                <rect fill="rgb(97%,97%,97%)" x="1000" y="0" width="1010" height="2000" />
                <rect fill="rgb(93%,16%,22%)" x="2000" y="0" width="1000" height="2000" />
                <rect fill="none" stroke="rgb(55%,55%,55%)" stroke-width="10" x="0" y="0" width="3000" height="2000" />
              </g>
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="40" height="40">
              <clipPath id="s">
                <path d="M0,0 v30 h60 v-30 z"/>
              </clipPath>
              <clipPath id="t">
                <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
              </clipPath>
              <g clip-path="url(#s)">
                <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>
                <path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4"/>
                <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/>
                <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>
              </g>
            </svg>
            }
          </div>
          <Link to ='/cart' className="cartIcon"><AiOutlineShoppingCart /></Link>
        </div>
      </div>
    </div>
  )
}
