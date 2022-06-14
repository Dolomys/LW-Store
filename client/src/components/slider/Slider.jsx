import './slider.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import motion from 'framer-motion'

import Slider from "react-slick";

export const SliderIntro = () => {

    const settings = {
        dots: false,
        fade: true,
        swipeToSlide: true,
        autoplay: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const infos = [
        {
            title:"Autumn Collection",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, deleniti!",
            link:"#",
            img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        },
        {
            title:"Summer Collection",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, deleniti!",
            link:"#",
            img: "https://images.unsplash.com/photo-1574296148664-3685383579c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
        },
        {
            title:"Winter Collection",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, deleniti!",
            link:"#",
            img: "https://images.unsplash.com/photo-1528283982967-bde1053cf71a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=416&q=80",
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
                <a href={slide.link}>See Collection </a>
            </div>
        </div>
    ))}
</Slider>
  )
}
