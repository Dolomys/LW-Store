import './slider.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {Link} from "react-router-dom"

import motion from 'framer-motion'

import Slider from "react-slick";

export const SliderIntro = () => {

    const settings = {
        dots: false,
        fade: true,
        swipeToSlide: true,
        autoplay: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const infos = [
        {
            title:"Welcome To LW Store",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, deleniti!",
            link:"/products",
            img: "https://images.unsplash.com/photo-1593010932917-92bd21088dee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
        },
        {
            title:"Shoes for everyone",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, deleniti!",
            link:"/products",
            img: "https://images.unsplash.com/photo-1588117305388-c2631a279f82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        },
        {
            title:"For every occasion, City or Outdoor !",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, deleniti!",
            link:"/products",
            img: "https://images.unsplash.com/photo-1490036293550-29261601ccb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        },
    ]

  return (
    <Slider {...settings}>
    {infos && infos.map(slide => (
        <div className="carousel">
            <div className="left">
                <img src={slide.img} alt="Collection Image" />
            </div>
            <div className="right">
                <h1>{slide.title}</h1>
                <p>{slide.desc}</p>
                <Link to={slide.link}>See Products </Link>
            </div>
        </div>
    ))}
</Slider>
  )
}
